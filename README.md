# Desafio Técnico – Desenvolvedor Full Stack Júnior | Solution TI

## Descrição do Projeto

Aplicação web full stack para cadastro, edição e listagem de usuários, com integração à API ViaCEP. Desenvolvida com Spring Boot (Java) no backend e Vite + React no frontend. Interface responsiva, com feedback visual, validações e boas práticas de UI/UX.

---

## Tecnologias Utilizadas

### Backend
- Java 17+
- Spring Boot 3
- PostgreSQL
- Maven
- Integração com API ViaCEP

### Frontend
- React 18 + Vite
- TypeScript
- Tailwind CSS 4
- ShadCN UI
- Axios
- React Query
- React Hook Form + Zod
- Sonner (toast)

---

## Estrutura do Projeto

```
desafio-tecnico/
├── backend/       → API em Spring Boot + PostgreSQL
├── frontend/      → Interface React + Vite + Tailwind
├── README.md      → Este arquivo
```

---

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Java 17 ou superior  
- Node.js 18+  
- PostgreSQL (rodando localmente)  
- Maven  

---

### Banco de Dados

1. Crie um banco vazio chamado `desafio` no PostgreSQL:

```sql
CREATE DATABASE desafio;
```

2. Crie o arquivo de configuração:

Renomeie o arquivo:

```
backend/src/main/resources/application.properties.example
```

para:

```
backend/src/main/resources/application.properties
```

E insira sua senha local do PostgreSQL:

```properties
spring.datasource.username=postgres
spring.datasource.password=senha_do_seu_postgres
```

---

### Rodando o Backend

```bash
cd backend
mvn spring-boot:run
```

O backend estará rodando em:  
 http://localhost:8080

---

### Rodando o Frontend

```bash
cd frontend
npm install
npm run dev
```

A interface estará disponível em:  
 http://localhost:5173
 
