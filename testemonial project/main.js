const clients = [
  {
    name: "Maria Inês",
    img: "./img/img1.jpg",
    rating: 4,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut quisquam recusandae delectus adipisci iusto.",
  },
  {
    name: "Carlos Morais",
    img: "./img/img2.jpg",
    rating: 1.5,
    text: "Shitty experience",
  },
  {
    name: "Carlota Morais",
    img: "./img/img3.jpg",
    rating: 5,
    text: "Great with great cars",
  },
  {
    name: "Morais Silva",
    img: "./img/img4.jpg",
    rating: 4,
    text: "Exellent",
  },
];

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const clientName = document.querySelector(".Costumer-name");
const clientImg = document.querySelector(".costumer-img");
const clientRating = document.querySelector(".costumer-rating");
const clientText = document.querySelector(".costumer-text");
var counter = 0;

btnNext.addEventListener("click", function (e) {
  e.preventDefault();
  clientRating.innerHTML = "";
  counter++;
  if (counter == clients.length) {
    counter = 0;
  }
  clientName.innerText = clients[counter].name;
  clientText.innerText = clients[counter].text;
  clientImg.src = `${clients[counter].img}`;
  var starCounter = clients[counter].rating;
  for (let i = 0; starCounter > i; i++) {
    var createDiv = document.createElement("i");
    createDiv.className = "fa fa-star";
    clientRating.appendChild(createDiv);
  }
});

btnPrev.addEventListener("click", function (e) {
  e.preventDefault();
  clientRating.innerHTML = "";
  if (counter == 0) {
    counter = 3;
  } else {
    counter--;
  }
  console.log(counter);
  clientName.innerText = clients[counter].name;
  clientText.innerText = clients[counter].text;
  clientImg.src = `${clients[counter].img}`;
  var starCounter = clients[counter].rating;
  for (let i = 0; starCounter > i; i++) {
    var createDiv = document.createElement("i");
    createDiv.className = "fa fa-star";
    clientRating.appendChild(createDiv);
  }
});
/* 
function star() {
  let i = document.createElement("i");
  i.classList.add(star);
  clientRating.appendChild(i);
}
 */
