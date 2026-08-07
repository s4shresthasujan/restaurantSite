import restaurantImage from "./assets/images/restaurant.jpeg";

export default function homePage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to Food Haven";

  const image = document.createElement("img");
  image.src = restaurantImage;
  image.alt = "Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Experience fresh ingredients, delicious meals, and a cozy atmosphere.We have been serving our customers with love and passion for over 15 years..";

  const cards = document.createElement("div");
  cards.classList.add("cards");

  cards.append(
    createCard("Fresh Ingredients", "Locally sourced every day."),
    createCard("Best Chefs", "Prepared by experienced professionals."),
    createCard("Fast Service", "Hot meals served quickly."),
  );

  content.append(heading, image, paragraph, cards);
}

function createCard(name, description) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = name;

  const desc = document.createElement("p");
  desc.textContent = description;

  card.append(title, desc);

  return card;
}
