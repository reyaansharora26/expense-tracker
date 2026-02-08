const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = [];

form.addEventListener("submit", addTransaction);

function addTransaction(e) {
  e.preventDefault();

  if (text.value === "" || amount.value === "") return;

  const transaction = {
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  addToDOM(transaction);
  updateValues();

  text.value = "";
  amount.value = "";
}

function addToDOM(t) {
  const sign = t.amount < 0 ? "-" : "+";
  const item = document.createElement("li");

  item.classList.add(t.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${t.text}
    <span>${sign}$${Math.abs(t.amount)}</span>
  `;

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map(t => t.amount);

  const total = amounts.reduce((a, b) => a + b, 0).toFixed(2);
  const income = amounts.filter(a => a > 0).reduce((a, b) => a + b, 0).toFixed(2);
  const expense = (
    amounts.filter(a => a < 0).reduce((a, b) => a + b, 0) * -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  moneyPlus.innerText = `+$${income}`;
  moneyMinus.innerText = `-$${expense}`;
}
