export default function aboutPage() {
  const content = document.getElementById("content");

  const title = document.createElement("h2");
  title.textContent = "About Us";

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    " Food Haven is a family-owned restaurant dedicated to providing delicious meals made with fresh, high-quality ingredients.";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Our mission is to create memorable dining experiences through exceptional food and outstanding customer service.";

  const location = document.createElement("p");
  location.textContent = "📍 Kathmandu, Nepal";

  const contact = document.createElement("p");
  contact.textContent = " 📞 +977 9800000000";

  const mail = document.createElement("p");
  mail.textContent = " ✉️ contact@foodhaven.com";

  content.appendChild(title);
  content.appendChild(paragraph1);
  content.appendChild(paragraph2);
  content.appendChild(location);
  content.appendChild(contact);
  content.appendChild(mail);
}
