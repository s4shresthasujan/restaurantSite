# Restaurant Page

A simple restaurant website built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

The project focuses on practicing **JavaScript modules, DOM manipulation, Webpack, and dynamic page rendering**.

## Features

- 🏠 Home page
- 🍽️ Menu page
- 📖 About Us page
- 🧩 Pages generated dynamically using JavaScript
- 📦 JavaScript modules
- 🎨 Custom CSS styling
- 🖼️ Restaurant images handled as project assets
- ⚡ Webpack bundling

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack
- npm

## Project Structure

```text
restaurant/
├── src/
│   ├── index.js
│   ├── home.js
│   ├── menu.js
│   ├── about.js
│   ├── styles.css
│   └── assets/
│       └── images/
│
├── dist/
├── package.json
├── webpack.config.js
└── README.md
```

## How It Works

The HTML contains the basic structure of the website, including the navigation and an empty content container:

```html
<div id="content"></div>
```

The different pages are created using JavaScript modules.

For example:

```js
export default function homePage() {
  const content = document.getElementById("content");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to My Restaurant";

  content.appendChild(heading);
}
```

The page module is then imported into `index.js`:

```js
import homePage from "./home.js";

homePage();
```

This allows the content of the website to be generated dynamically using JavaScript.

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd restaurant
```

Install the dependencies:

```bash
npm install
```

## Running the Project

Start the Webpack development server:

```bash
npm run start
```

Then open the local development URL provided by Webpack in your browser.

## What I Learned

Through this project, I practiced:

- Creating and using JavaScript modules
- Using `import` and `export`
- Creating DOM elements with JavaScript
- Using `appendChild()` and `append()`
- Manipulating element classes with `classList`
- Handling navigation with event listeners
- Organizing a project into multiple modules
- Working with Webpack
- Managing images and other assets

## Future Improvements

- Add interactive navigation between pages
- Improve the responsive design
- Add more menu items
- Add animations and transitions
- Improve accessibility
- Add a contact form

## Acknowledgements

This project was created as part of **The Odin Project – JavaScript curriculum**.

[The Odin Project](https://www.theodinproject.com/)
