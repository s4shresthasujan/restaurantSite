import restaurantImage from "../restaurant.jpeg";

export default function homePage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to my Restaurant";

  const image = document.createElement("img");
  image.src = restaurantImage;
  image.alt = "Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent = "We serve the best food in town.";

  content.appendChild(heading);
  content.appendChild(image);
  content.appendChild(paragraph);
}
