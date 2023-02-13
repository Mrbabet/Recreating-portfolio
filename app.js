import "./scss/styles.scss";
import breadcrumbImg from "./src/images/breadcrumb-arrow.svg";
import previousBtnArrowImg from "./src/images/previous-btn.svg";
// ----------------------------------------------------------------------------------------

const contentSection = document.querySelector(".content");

const generateContainers = function (place, className, tagName) {
  const generateDiv = document.createElement(tagName);
  generateDiv.className = className;
  place.appendChild(generateDiv);
};
// ----------------------------------------------------------------------------------------

const { host, hostname, href, origin, pathname, port, protocol, search } =
  window.location;

let logo;
let breadcrumbs;
let infoBtn;
let previousBtn;

const generateHeader = function () {
  generateContainers(contentSection, "navigation-top", "div");

  const navigationTop = document.querySelector(".navigation-top");

  generateContainers(navigationTop, "nav-left-side", "div");
  generateContainers(navigationTop, "nav-right-side", "div");

  const navigationLeft = document.querySelector(".nav-left-side");

  generateContainers(navigationLeft, "name", "a");

  logo = document.querySelector(".name");
  logo.innerHTML = "Abigail Frączek";
  logo.href = "index.html";

  generateContainers(logo, "breadcrumb-arrow", "span");
  const breadcrumbArrow = document.querySelector(".breadcrumb-arrow");

  generateContainers(breadcrumbArrow, "arrow-img", "img");
  const breadcrumbArrowImg = document.querySelector(".arrow-img");
  breadcrumbArrowImg.src = breadcrumbImg;

  generateContainers(navigationLeft, "breadcrumbs", "a");
  breadcrumbs = document.querySelector(".breadcrumbs");
  breadcrumbs.innerHTML = pathname; // Need to add name depending on the Url of page;
  breadcrumbs.href = "";
  const navigationRight = document.querySelector(".nav-right-side");
  generateContainers(navigationRight, "previous-btn", "a");

  previousBtn = document.querySelector(".previous-btn");

  generateContainers(previousBtn, "previous-arrow-img", "img");

  const PreviousArrowImg = document.querySelector(".previous-arrow-img");
  PreviousArrowImg.src = previousBtnArrowImg;

  generateContainers(navigationRight, "info-btn", "a");

  infoBtn = document.querySelector(".info-btn");
  infoBtn.innerHTML = "Info";
  infoBtn.href = "/info.html";
};
generateHeader();
// ----------------------------------------------------------------------------------------
const generateMain = function () {
  generateContainers(contentSection, "main", "main");
};
generateMain();
// ----------------------------------------------------------------------------------------
const generateFooter = function () {
  generateContainers(contentSection, "footer", "footer");

  const footer = document.querySelector(".footer");

  generateContainers(footer, "email", "a");
  generateContainers(footer, "instagram", "a");

  const email = document.querySelector(".email");
  const instagram = document.querySelector(".instagram");

  email.innerHTML = "abigailfraczek.kontakt@gmail.com";
  email.href = "#";
  instagram.innerHTML = "Instagram";
  instagram.href = "https://www.instagram.com/abigailfraczek/";
};
generateFooter();

console.log(breadcrumbs);

if (window.location.toString().includes(pathname) === true) {
  logo.style.fontWeight = "400";
  breadcrumbs.style.fontWeight = "700";
}

if (window.location.toString().includes("realizacja") === true) {
  previousBtn.style.display = "flex";
} else {
  previousBtn.style.display = "none";
}

if (window.location.toString().includes("info") === true) {
  infoBtn.innerHTML = "Portfolio";
  infoBtn.style.width = 89 + "px";
  infoBtn.className = "portfolio-btn";
  const portfolioBtn = document.querySelector(".portfolio-btn");
  portfolioBtn.href = "/index.html";
}
