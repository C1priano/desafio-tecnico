import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Desafio Técnico - CRUD de Usuários</h1>
      <div className="flex gap-4">
        <Link to="/register">
          <Button>Cadastrar Usuário</Button>
        </Link>
        <Link to="/user">
          <Button variant="outline">Ver Usuários</Button>
        </Link>
      </div>
    </main>
  )
}

