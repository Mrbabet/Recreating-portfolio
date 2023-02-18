import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";
import "./scss/styles.scss";
import ImgGray from "./src/images/gray.svg";
import ImgGraySmall from "./src/images/gray-small.svg";

const newComponents = [
  {
    id: 0,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
    link: "realizacja.html",
  },
  {
    id: 1,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
    link: "realizacja.html",
  },
  {
    id: 2,
    image: ImgGraySmall,
    title: "Tytuł",
    description: "Opis.",
    type: "portrait",
    link: "realizacja.html",
    description1:
      "Logo jest wizualną <br/>reprezentacją <br/> Ciebie i Twojego <br/>biznesu.",
    description2:
      "Informator: <br/> <span class='underline'>Dlaczego logo <br/> to ważny element <br/> w budowaniu <br/>marki?</span>",
  },
  {
    id: 3,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
    link: "realizacja.html",
  },
  {
    id: 4,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
    link: "realizacja.html",
  },
  {
    id: 5,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
    link: "realizacja.html",
    description1:
      "Identyfikacja<br/> wizualna  przyciąga <br/>sprecyzowaną<br/> grupę klientów,<br/> którzy zapłacą<br/> za Twoje produkty.",
    description2:
      "Informator:<br/><span class='underline'> Dlaczego warto<br/> zainwestować w spójną<br/> identyfikację wizualną<br/> marki?</span>",
  },
  {
    id: 6,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
    link: "realizacja.html",
  },
  {
    id: 7,
    image: ImgGraySmall,
    title: "Tytuł",
    description: "Opis.",
    type: "portrait",
    link: "realizacja.html",
  },
  {
    id: 8,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
    link: "realizacja.html",
    description1:
      "Marka dzieląca się<br/> doświadczeniami na mediach społecznościowych zbliża do siebie swoich<br/> klientów.",
    description2:
      "Informator:<br/> <span class='underline'> Dlaczego social media do jeden z elementów kreacji marki?</span> ",
  },
  {
    id: 9,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
    link: "realizacja.html",
  },
  {
    id: 10,
    image: ImgGraySmall,
    title: "Tytuł",
    description: "Opis.",
    type: "portrait",
    link: "realizacja.html",
  },
  {
    id: 11,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
    link: "realizacja.html",
  },
];

const portfolio = document.querySelector(".portfolio");

const renderContainers = function (items) {
  for (let i = 0; i < items.length; i++) {
    //Render img
    const renderImg = function (className, appendPlace) {
      const createImg = document.createElement("img");
      createImg.className = className;
      createImg.src = `${items[i].image} `;
      appendPlace.prepend(createImg);
    };
    const renderOverlay = function (className, appendPlace) {};

    //Generatimg the div element by the appendChild method

    const createBoxContainer = document.createElement("a");
    createBoxContainer.className = "box-container";
    createBoxContainer.href = items[i].link;
    createBoxContainer.innerHTML = `<div class ='description-container'><div class="title">${items[i].title}</div>
                                    <p class="img-description">${items[i].description}</p></div>`;
    createBoxContainer.setAttribute("data-type", items[i].type);
    // createBoxContainer.setAttribute("data-img-src", items[i].hover);
    portfolio.appendChild(createBoxContainer);

    //Using the rengerImg function to prepend the img container above appended div container
    renderImg("box-container-img", createBoxContainer);
    // const id = newComponents.map((x) => x.id + 1);

    // if (id[i] > 0 && id[i] % 3 === 0 && id[i] % id.length !== 0) {
    //   const createNewDiv = document.createElement("div");
    //   createNewDiv.className = "information";
    //   createNewDiv.innerHTML = `<div class="description-1">${items[i].description1}</div>
    //                             <div class="description-2">${items[i].description2}</div>
    //                             <div class="arrow"><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                             <path d="M6.07107 -2.2769e-05L5.46808 0.602968L11.51 6.64493L-0.0010454 6.64493L-4.0432e-05 7.49816L11.509 7.49816L5.46808 13.5391L6.07107 14.1421L13.1421 7.07104L6.07107 -2.2769e-05Z" fill="#B4AFA6"/>
    //                             </svg>
    //                             </div>`;
    //   portfolio.appendChild(createNewDiv);
    // }
  }
  const imageContainer = document.querySelectorAll(".box-container-img");
  imageContainer.forEach((img) => {
    img.addEventListener("mouseover", function () {});
  });
};

const scrollBtn = document.querySelector(".scroll-top");

const goBackTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.documentElement.style.scrollBehavior = "smooth";
};
// Function which shows button when we scroll

const showOnScroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

window.addEventListener("scroll", showOnScroll);
scrollBtn.addEventListener("click", goBackTop);

document.onload = renderContainers(newComponents);
