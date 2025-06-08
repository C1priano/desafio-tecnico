import { useState } from "react"
import { UserForm } from "@/components/UserForm"
import { UserList } from "@/components/UserList"

function App() {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<any>()

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Cadastro de Usuário</h1>
      <UserForm
        usuarioSelecionado={usuarioSelecionado}
        onSubmitCallback={() => setUsuarioSelecionado(undefined)}
      />
      <hr className="my-8" />
      <h2 className="text-xl font-semibold mb-4">Usuários cadastrados</h2>
      <UserList onSelectUsuario={setUsuarioSelecionado} />
    </main>
  )
}

export default App
