# 🛡️ Fake Product Identification System

A simple blockchain-based application that helps users verify the authenticity of products by scanning or entering a product ID. Built using Solidity, Ganache, Truffle, and Web3.js with a clean HTML frontend.

---

## 🚀 Project Overview

Every year, millions of fake products circulate the market, leading to fraud and distrust. This project solves that by storing product authenticity on the Ethereum blockchain and allowing users to verify products via a simple interface.

---

## 🛠️ Technologies Used

- **Solidity** – Smart contract language  
- **Truffle** – Development & migration framework  
- **Ganache** – Local Ethereum blockchain  
- **Web3.js** – JavaScript library for Ethereum interaction  
- **HTML/CSS** – Simple user interface  
- **VS Code + Live Server** – Frontend development & testing  

---

## 📦 Features

- ✅ Add products as genuine or fake (admin only)
- ✅ Verify any product by its ID
- ✅ Results shown instantly in the frontend
- ✅ Local development with full blockchain logic

---

## 📁 Project Structure
fake-product-verification/
├── contracts/ # Solidity contract
│ └── ProductVerification.sol
├── migrations/ # Truffle deploy scripts
│ └── 1_deploy_contract.js
├── build/ # Compiled contract + ABI (auto-generated)
├── frontend/
│ ├── index.html # Frontend UI
│ └── app.js # Web3 interaction logic
├── truffle-config.js # Truffle config
├── README.md # This file

---

## 💻 How to Run Locally

1. **Install dependencies**
   ```bash
   npm install -g truffle ganache
Start Ganache
ganache
Compile & migrate the contract
truffle compile
truffle migrate --network development
Start frontend
Open frontend/index.html with Live Server or manually via browser
Add products (in console)
npx truffle console --network development

const instance = await ProductVerification.deployed()
await instance.addProduct("P123", true)
await instance.addProduct("FAKE999", false)


🔍 How It Works
addProduct(productId, isAuthentic) — Admin adds product with authenticity flag
verifyProduct(productId) — Any user can check if a product is genuine
Results are shown in browser UI as ✅ or ❌

📄 License

MIT — free to use and modify for educational purposes.

🙌 Authors

Serikov Darkhan
Zhumabek Meiirzhan
Daulet Yermek
Astana IT University — Blockchain Technologies Project, 2025