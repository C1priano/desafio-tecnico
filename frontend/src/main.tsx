import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { User } from "./pages/User"
import { ReactQueryProvider } from "./lib/react-query"
import { Toaster } from "sonner"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Toaster richColors position="top-right" />
      </BrowserRouter>
    </ReactQueryProvider>
  </React.StrictMode>
)
