import "./scss/styles.scss";
import ArrowRight from "./src/images/breadcrumb-arrow.svg";
import GoBack from "./src/images/go-back-arrow.svg";
import ArrowLeft from "./src/images/previous-btn.svg";
import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";
import ImgGray from "./src/images/gray.svg";
import ImgGraySmall from "./src/images/gray-small.svg";
// ----------------------------------------------------------------------------------------

let { host, hostname, href, origin, pathname, port, protocol, search } =
  window.location;

// ----------------------------------------------------------------------------------------

let breadcrumbs = {
  info: "Info",
  portfolio: "Portfolio",
  realizacja: "Portfolio",
};
const breadcrumbArrowImg = document.querySelector(".arrow-img");
const logo = document.querySelector(".name");
const breadcrumb = document.querySelector(".breadcrumbs");
const previousBtn = document.querySelector(".previous-btn");
const previousArrowImg = document.querySelector(".previous-arrow-img");
const goBackArrowImg = document.querySelector(".go-back-arrow-img");
const infoBtn = document.querySelector(".info-btn");
let goBackBtn = document.querySelector(".go-back-btn");
goBackBtn.style.display = "none";

infoBtn.href = "./info.html";
breadcrumbArrowImg.src = ArrowRight;
previousArrowImg.src = ArrowLeft;
goBackArrowImg.src = GoBack;

if (window.location.toString().includes(pathname) === true) {
  logo.style.fontWeight = "400";
  breadcrumb.style.fontWeight = "700";
}
if (window.location.toString().includes("info")) {
  breadcrumb.innerHTML = breadcrumbs.info;
  previousBtn.style.display = "none";
  infoBtn.style.display = "none";
  goBackBtn.style.width = 42 + "px";
  goBackBtn.style.display = "flex";
  goBackBtn.addEventListener("click", function () {
    window.history.back();
  });
} else if (window.location.toString().includes("portfolio")) {
  breadcrumb.innerHTML = breadcrumbs.portfolio;
  previousBtn.style.display = "none";
} else if (window.location.toString().includes("realizacja")) {
  breadcrumb.innerHTML = breadcrumbs.realizacja;
  const arrowContainer = document.createElement("span");
  arrowContainer.innerHTML = `<img src="${ArrowRight}"/>`;
  breadcrumb.appendChild(arrowContainer);
}

const newComponents = [
  {
    id: 0,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
  },
  {
    id: 1,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
  },
  {
    id: 2,
    image: ImgGraySmall,
    title: "Tytuł",
    description: "Opis.",
    type: "portrait",
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
  },
  {
    id: 4,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
  },
  {
    id: 5,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
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
  },
  {
    id: 7,
    image: ImgGraySmall,
    title: "Tytuł",
    description: "Opis.",
    type: "portrait",
  },
  {
    id: 8,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
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
  },
  {
    id: 10,
    image: ImgGraySmall,
    title: "Tytuł",
    description: "Opis.",
    type: "portrait",
  },
  {
    id: 11,
    image: ImgGray,
    title: "Tytuł",
    description: "Opis.",
    type: "picture",
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

    //Generatimg the div element by the appendChild method

    const createBoxContainer = document.createElement("div");
    createBoxContainer.className = "box-container";
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
};
document.onload = renderContainers(newComponents);
