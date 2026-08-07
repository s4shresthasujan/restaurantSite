export default function menuPage() {
  const content = document.getElementById("content");

  const cards = document.createElement("div");
  cards.classList.add("cards");

  cards.append(
    createCard("🍕 Margherita Pizza", "Fresh mozzarella and basil.", "$12"),
    createCard("🍔 Burger", "Juicy beef burger.", "$10"),
    createCard("🍝 Pasta", "Creamy Alfredo pasta.", "$14"),
  );

  content.appendChild(cards);
}

function createCard(name, description, price) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = name;

  const desc = document.createElement("p");
  desc.textContent = description;

  const cost = document.createElement("span");
  cost.textContent = price;

  card.append(title, desc, cost);

  return card;
}
