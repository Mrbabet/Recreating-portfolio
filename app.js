import "./scss/styles.scss";
import breadcrumbImg from "./src/images/breadcrumb-arrow.svg";
import previousBtnArrowImg from "./src/images/previous-btn.svg";
import { newComponents } from "./components";
import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";
// ----------------------------------------------------------------------------------------

let { host, hostname, href, origin, pathname, port, protocol, search } =
  window.location;

// ----------------------------------------------------------------------------------------

let breadcrumbs = {
  info: "Info",
  portfolio: "Portfolio",
  realizacja: "Portfolio",
};
const arrowImg = document.querySelector(".arrow-img");
const logo = document.querySelector(".name");
const breadcrumb = document.querySelector(".breadcrumbs");
const previousBtn = document.querySelector(".previous-btn");
const previousArrowImg = document.querySelector(".previous-arrow-img");
const infoBtn = document.querySelector(".info-btn");
let goBackBtn = document.querySelector(".go-back-btn");
goBackBtn.style.display = "none";

infoBtn.href = "./info.html";
arrowImg.src = breadcrumbImg;
previousArrowImg.src = previousBtnArrowImg;

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
  arrowContainer.innerHTML = `<img src="${breadcrumbImg}"/>`;
  breadcrumb.appendChild(arrowContainer);
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
const portfolio = document.querySelector(".portfolio");

const renderContainers = function (items) {
  for (let i = 0; i < items.length; i++) {
    //Render img
    const renderImg = function (className, appendPlace) {
      const createImg = document.createElement("img");
      createImg.className = className;
      createImg.src = `${items[i].image} `;
      createImg.setAttribute("data-src", `${items[i].imageData}`);
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
