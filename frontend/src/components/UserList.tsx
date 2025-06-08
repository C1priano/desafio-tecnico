import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useState } from "react"

type Usuario = {
  id: number
  nome: string
  cpf: string
  cep: string
  logradouro?: string
  bairro?: string
  cidade?: string
  estado?: string
}

type UserListProps = {
  onSelectUsuario: (usuario: Usuario) => void
}

export function UserList({ onSelectUsuario }: UserListProps) {
  const { data, isLoading, error, refetch } = useQuery<Usuario[]>({
    queryKey: ["usuarios"],
    queryFn: async () => {
      const response = await api.get("/usuarios")
      return response.data
    },
  })

  const [usuarioParaExcluir, setUsuarioParaExcluir] = useState<Usuario | null>(null)
  const [confirmandoExclusao, setConfirmandoExclusao] = useState(false)

  const excluirUsuario = async () => {
    if (!usuarioParaExcluir) return

    try {
      await api.delete(`/usuarios/${usuarioParaExcluir.id}`)
      alert("Usuário excluído com sucesso!")
      setUsuarioParaExcluir(null)
      setConfirmandoExclusao(false)
      refetch()
    } catch {
      alert("Erro ao excluir usuário.")
    }
  }

  if (isLoading) return <p className="text-center">Carregando usuários...</p>
  if (error) return <p className="text-center text-red-500">Erro ao carregar usuários.</p>

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-4">
      {data?.map((usuario) => (
        <Card key={usuario.id} className="p-4 shadow-sm space-y-1">
          <div className="font-semibold text-lg">{usuario.nome}</div>
          <p className="text-sm text-zinc-600">CPF: {usuario.cpf}</p>
          <Separator className="my-2" />
          <p className="text-sm">
            {usuario.logradouro}, {usuario.bairro}
          </p>
          <p className="text-sm">
            {usuario.cidade} - {usuario.estado} | CEP: {usuario.cep}
          </p>
          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => onSelectUsuario(usuario)}
            >
              Editar
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setUsuarioParaExcluir(usuario)
                setConfirmandoExclusao(true)
              }}
            >
              Excluir
            </Button>
          </div>
        </Card>
      ))}

      <Dialog open={confirmandoExclusao} onOpenChange={setConfirmandoExclusao}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
          </DialogHeader>
          <p>
            Tem certeza que deseja excluir o usuário{" "}
            <strong>{usuarioParaExcluir?.nome}</strong>?
          </p>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setConfirmandoExclusao(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={excluirUsuario}>
              Confirmar exclusão
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
