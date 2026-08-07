// index.js
import "./styles.css";
import homePage from "./home.js";
import aboutPage from "./about.js";
import menuPage from "./menu.js";

const content = document.getElementById("content");

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

about.addEventListener("click", () => {
  content.textContent = "";
  aboutPage();
});

home.addEventListener("click", () => {
  content.textContent = "";
  homePage();
});

menu.addEventListener("click", () => {
  content.textContent = "";
  menuPage();
});

homePage();

console.log("my restaurant");
