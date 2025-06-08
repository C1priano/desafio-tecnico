import { UserList } from "@/components/UserList"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

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

export function User() {
  const [usuarioParaEditar, setUsuarioParaEditar] = useState<Usuario | null>(null)
  const [abrirModal, setAbrirModal] = useState(false)
  const navigate = useNavigate()

  const confirmarEdicao = () => {
    if (usuarioParaEditar) {
      localStorage.setItem("usuarioEditando", JSON.stringify(usuarioParaEditar))
      navigate("/register")
    }
  }

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="mb-4">
        <Link to="/">
          <Button variant="outline">← Voltar para Home</Button>
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-center mb-2">
        Lista de usuários cadastrados
      </h2>
      <p className="text-center mb-6 text-sm text-zinc-600">
        Abaixo estão os usuários registrados no sistema
      </p>

      <UserList
        onSelectUsuario={(usuario) => {
          setUsuarioParaEditar(usuario)
          setAbrirModal(true)
        }}
      />

      <Dialog open={abrirModal} onOpenChange={setAbrirModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar usuário</DialogTitle>
          </DialogHeader>
          <p>
            Deseja editar o cadastro de <strong>{usuarioParaEditar?.nome}</strong>?
          </p>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setAbrirModal(false)}>
              Cancelar
            </Button>
            <Button onClick={confirmarEdicao}>
              Confirmar e editar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
