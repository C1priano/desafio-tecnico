import { useEffect, useState } from "react"
import { UserForm } from "@/components/UserForm"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Register() {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<any>(null)

  useEffect(() => {
    const usuarioEditando = localStorage.getItem("usuarioEditando")
    if (usuarioEditando) {
      setUsuarioSelecionado(JSON.parse(usuarioEditando))
      localStorage.removeItem("usuarioEditando")
    }
  }, [])

  const isEditando = !!usuarioSelecionado

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <div className="mb-4">
        <Link to="/">
          <Button variant="outline">← Voltar para Home</Button>
        </Link>
      </div>
      <h2 className="text-2xl font-bold text-center mb-2">
        {isEditando ? "Editar usuário cadastrado" : "Cadastrar novo usuário"}
      </h2>
      <p className="text-center mb-6 text-sm text-zinc-600">
        {isEditando
          ? "Atualize os dados do usuário selecionado abaixo"
          : "Preencha os campos abaixo para cadastrar um novo endereço"}
      </p>
      <UserForm
        usuarioSelecionado={usuarioSelecionado}
        onSubmitCallback={() => {
          window.location.href = "/user"
        }}
      />
    </main>
  )
}
