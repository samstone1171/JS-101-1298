// console.log("Hello from application.js!")

// ////////
// Select DOM elements
// ////////

// with its ID (Noemi)
const noemi = document.querySelector("#noemi-radu");
console.log(noemi);

// with its tag type (h2)
const h2 = document.querySelector("h2");
console.log(h2);

// with its class (group)
const group = document.querySelector(".group");
console.log(group);

// by nest selection (ul of the group)
// const ul = group.querySelector("ul");
// console.log(ul);

// select multiple elements (all the card)
// cards is a NodeList, looks like an array
const cards = document.querySelectorAll(".card");
console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Minato reds ⛑️)
const ul = group.querySelector("ul");
ul.insertAdjacentHTML("beforeend", "<li>Minato reds ⛑️</li>");

// same but more complex (add Aliia!!!)
const card = document.querySelector(".card ul");
card.insertAdjacentHTML(
  "beforeend", 
  `<li>
    <img id="aliia-gismatullina" src="https://avatars.githubusercontent.com/u/138187142?v=4" alt="">
    <p>Aliia Gismatullina</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
// group.style.color = "red";
group.style.backgroundColor = "darkgreen";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");


// Read/Write for inputs (change the value in the email input)
const emailInput = document.querySelector("#email");
console.log(emailInput.value);
emailInput.value = "yann@lewagon.com";

// Read/Write the (inner) text and HTML content (QuizMate FC ⚽️ title)
const yoko = document.querySelector("#yoko-fc h3");
console.log(yoko.innerText);
console.log(yoko.innerHTML);

yoko.innerHTML = "Hello <em>everyone</em>!";