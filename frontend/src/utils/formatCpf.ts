export function formatarCPF(cpf: string) {
  return cpf
    .replace(/\D/g, "")                       // remove tudo que não é número
    .replace(/(\d{3})(\d)/, "$1.$2")          // coloca o primeiro ponto
    .replace(/(\d{3})(\d)/, "$1.$2")          // coloca o segundo ponto
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")    // coloca o traço
}
