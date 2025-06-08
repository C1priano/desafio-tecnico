import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold text-center max-w-3xl leading-snug">
        Desenvolvimento de <span className="text-[#F44336]">Aplicação Web</span>: Consulta de CEP e Gerenciamento de Endereços
      </h1>
      <p className="text-center mb-5 text-lg text-zinc-600">
        Teste Técnico - Paulo Ricardo Cipriano Protasio
      </p>
      <div className="flex gap-4">
        <Link to="/register">
          <Button className="rounded-xl">Cadastrar Usuário</Button>
        </Link>
        <Link to="/user">
          <Button variant="outline" className="rounded-xl">Ver Usuários</Button>
        </Link>
      </div>
    </main>
  )
}

