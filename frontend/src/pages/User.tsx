import { UserList } from "@/components/UserList"
import { useState } from "react"
import { UserForm } from "@/components/UserForm"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function User() {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<any>()

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="mb-4">
        <Link to="/">
          <Button variant="outline">← Voltar para Home</Button>
        </Link>
      </div>
      <h2 className="text-xl font-bold mb-4">Lista de Usuários</h2>
      <UserForm
        usuarioSelecionado={usuarioSelecionado}
        onSubmitCallback={() => setUsuarioSelecionado(undefined)}
      />
      <hr className="my-8" />
      <UserList onSelectUsuario={setUsuarioSelecionado} />
    </main>
  )
}
