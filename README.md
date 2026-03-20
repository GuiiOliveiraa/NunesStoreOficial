# 🛍️ Nunes Store

Interface de e-commerce desenvolvida com HTML, CSS e JavaScript puro, focada em exibição de produtos e filtragem dinâmica por categorias.

## 🚀 Visão geral

A aplicação simula uma vitrine digital com interação básica, permitindo ao usuário navegar entre categorias e iniciar uma compra via WhatsApp.

## ✨ Funcionalidades

- 📦 Exibição de produtos em formato de grid
- 🔎 Filtro dinâmico por categoria (sem recarregar a página)
- 🎯 Destaque visual do filtro ativo
- 📱 Layout responsivo
- 📲 Integração direta com WhatsApp para conversão

## 🛠️ Tecnologias

- HTML5 (estrutura semântica)
- CSS3 (Grid, Flexbox, Variáveis)
- JavaScript (DOM + eventos)

## 📂 Estrutura

📁 projeto
┣ 📁 assets
┣ 📄 index.html
┣ 📄 style.css
┗ 📄 script.js

🧠 Arquitetura
🔹 Filtro de produtos

Cada produto possui uma classe (roupas ou tenis)

Os botões possuem data-categoria

O JavaScript controla a visibilidade via classe .hidden

card.classList.toggle('hidden', !card.classList.contains(categoria));
🔹 Estado ativo

O botão selecionado recebe a classe .active, garantindo feedback visual ao usuário.

📲 Integração com WhatsApp

Os links de compra utilizam:

https://wa.me/<numero>?text=<mensagem>

Permitindo iniciar uma conversa direta com contexto do produto.
