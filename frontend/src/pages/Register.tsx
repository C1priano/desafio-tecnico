import { UserForm } from "@/components/UserForm"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Register() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <div className="mb-4">
        <Link to="/">
          <Button variant="outline">← Voltar para Home</Button>
        </Link>
      </div>
      <h2 className="text-xl font-bold mb-4">Cadastrar novo usuário</h2>
      <UserForm />
    </main>
  )
}
