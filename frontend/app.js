const web3 = new Web3("http://127.0.0.1:8545");

const contractAddress = "0x38a4a7a310e0f458c819730fc99df35612d550fe";

const abi = [
  {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "products",
      "outputs": [
        {
          "internalType": "string",
          "name": "productId",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isAuthentic",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productId",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "_isAuthentic",
          "type": "bool"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productId",
          "type": "string"
        }
      ],
      "name": "verifyProduct",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
];

const contract = new web3.eth.Contract(abi, contractAddress);

async function checkProduct() {
  const productId = document.getElementById("productId").value;

  try {
    const result = await contract.methods.verifyProduct(productId).call();
    document.getElementById("result").innerText = result
      ? "✅ Product is Authentic"
      : "❌ Product is FAKE";
  } catch (err) {
    console.error("Error verifying product:", err);
    document.getElementById("result").innerText = "⚠️ Error checking product";
  }
}

window.checkProduct = checkProduct;

async function addProduct() {
  const productId = document.getElementById("newProductId").value;
  const isAuthentic = document.getElementById("isAuthentic").checked;

  try {
    const accounts = await web3.eth.getAccounts();
    const fromAddress = accounts[0];

    await contract.methods.addProduct(productId, isAuthentic).send({ from: fromAddress });

    document.getElementById("addResult").innerText = "✅ Product added successfully!";
  } catch (err) {
    console.error("Error adding product:", err);
    document.getElementById("addResult").innerText = "❌ Failed to add product.";
  }
}

window.addProduct = addProduct;

