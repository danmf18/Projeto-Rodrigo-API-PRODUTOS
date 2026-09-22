import express from "express";
import { produtosRoutes } from "./routes/produtoRoute.js";

export const app = express();

//Middleware: ensina o Express a ler o corpo da requisicão em JSON
app.use(express.json())

app.get('/api/check', (req, res)=>{
  res.status(200).json({status:'ok', mensagem:'Servidor funcionando via HTTP'});
});
app.use('/api/produtos', produtosRoutes);
app.use((req, res)=>{
  res.status(404).json({ erro: `A rota ${req.method} ${req.originalUrl} não existe`});
});

app.use((erro, req, res, _next)=> {
  console.error('Erro de Sistema: ', erro.message);
  res.status(500).json({ erro: 'Falha interna do servidor'})
});