import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/api"
import { useEffect, useState } from "react"

const schema = z.object({
  id: z.number().optional(),
  nome: z.string().min(3, "Nome é obrigatório"),
  cpf: z.string().min(11, "CPF inválido").max(14),
  cep: z.string().min(8, "CEP inválido").max(9),
  logradouro: z.string().optional(),
  bairro: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().optional(),
})

type FormData = z.infer<typeof schema>

type UserFormProps = {
  usuarioSelecionado?: FormData
  onSubmitCallback?: () => void
}

export function UserForm({ usuarioSelecionado, onSubmitCallback }: UserFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const [erroCep, setErroCep] = useState("")

  // Preenche os campos se estiver editando
  useEffect(() => {
    if (usuarioSelecionado) {
      reset(usuarioSelecionado)
    }
  }, [usuarioSelecionado, reset])

  const handleBuscarCep = async (cep: string) => {
    try {
      const { data } = await api.get(`/viacep/${cep}`)
      setValue("logradouro", data.logradouro || "")
      setValue("bairro", data.bairro || "")
      setValue("cidade", data.localidade || "")
      setValue("estado", data.uf || "")
      setErroCep("")
    } catch {
      setErroCep("CEP inválido ou não encontrado.")
    }
  }

  const onSubmit = async (data: FormData) => {
    try {
      if (data.id) {
        await api.put(`/usuarios/${data.id}`, data)
        alert("Usuário atualizado com sucesso!")
      } else {
        await api.post("/usuarios", data)
        alert("Usuário cadastrado com sucesso!")
      }

      onSubmitCallback?.()
      reset()
    } catch {
      alert("Erro ao salvar. CPF pode já estar em uso.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto mt-10">
      <div>
        <Label>Nome</Label>
        <Input {...register("nome")} />
        {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
      </div>

      <div>
        <Label>CPF</Label>
        <Input {...register("cpf")} />
        {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}
      </div>

      <div>
        <Label>CEP</Label>
        <Input
          {...register("cep")}
          onBlur={(e) => handleBuscarCep(e.target.value)}
        />
        {erroCep && <p className="text-red-500 text-sm">{erroCep}</p>}
      </div>

      <div>
        <Label>Logradouro</Label>
        <Input {...register("logradouro")} />
      </div>

      <div>
        <Label>Bairro</Label>
        <Input {...register("bairro")} />
      </div>

      <div>
        <Label>Cidade</Label>
        <Input {...register("cidade")} />
      </div>

      <div>
        <Label>Estado</Label>
        <Input {...register("estado")} />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Salvando..." : usuarioSelecionado ? "Atualizar" : "Salvar"}
      </Button>
    </form>
  )
}
