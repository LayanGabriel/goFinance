# 📱 goFinance - Mobile

Aplicativo de controle financeiro pessoal, desenvolvido com **React Native + Expo**. Permite registrar entradas e saídas, visualizar um resumo financeiro e listar transações com categorias.

---

## ✨ Funcionalidades

* ✅ Cadastro de transações (entrada/saída)
* ✅ Listagem de transações
* ✅ Resumo financeiro com:

  * Total de entradas
  * Total de saídas
  * Balanço final
  * Última entrada e última saída
* ✅ Ícones por categoria
* ✅ Integração com API Node.js + PostgreSQL

---

|   |   |
| - | - |

---

## 🚀 Tecnologias

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Styled-components](https://styled-components.com/)
* [Axios](https://axios-http.com/)
* [React Navigation](https://reactnavigation.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Node.js (API)](https://nodejs.org/) + [PostgreSQL](https://www.postgresql.org/)

---

## 🧠 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/LayanGabriel/goFinance.git
cd goFinance
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Inicie com Expo

```bash
npx expo start
```

---

## ⚙️ Configuração do Backend

> A API deve estar rodando em segundo plano com endpoints `/transacoes`

Você pode usar o [backend web do goFinance](https://github.com/LayanGabriel/goFinance-api) ou adaptar o seu.

---

## 📝 Estrutura de diretórios

```
📆 src
 ├ 📂components
 ┃ ├ 📌 HighlightCard.tsx
 ┃ ├ 📌 Transaction.tsx
 ├ 📂screens
 ┃ ├ 📂Dashboard
 ┃ ├ 📂Register
 ├ 📂Routes
 ├ 📂global
 ┃ ├ 📌 styles
 ├ 📌 App.tsx
```

---

## 💡 Inspiração

Este projeto foi inspirado no **Ignite da Rocketseat** e adaptado para consumir uma API real com banco de dados PostgreSQL.

---

## 🧑‍💻 Desenvolvedor

[Layan Gabriel](https://github.com/LayanGabriel)

---

## 📄 Licença

Este projeto está licenciado sob a licença 0BSD.

---
# goFinance
