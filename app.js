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
const generateHeader = function () {
  generateContainers(contentSection, "navigation-top", "div");

  const navigationTop = document.querySelector(".navigation-top");

  generateContainers(navigationTop, "nav-left-side", "div");
  generateContainers(navigationTop, "nav-right-side", "div");

  const navigationLeft = document.querySelector(".nav-left-side");

  generateContainers(navigationLeft, "name", "a");

  const logo = document.querySelector(".name");
  logo.innerHTML = "Abigail Frączek";
  logo.href = "index.html";

  generateContainers(logo, "breadcrumb-arrow", "span");
  const breadcrumbArrow = document.querySelector(".breadcrumb-arrow");

  generateContainers(breadcrumbArrow, "arrow-img", "img");
  const breadcrumbArrowImg = document.querySelector(".arrow-img");
  breadcrumbArrowImg.src = breadcrumbImg;

  generateContainers(navigationLeft, "breadcrumbs", "a");
  const breadcrumbs = document.querySelector(".breadcrumbs");
  breadcrumbs.innerHTML = `Portfolio`; // Need to add name depending on the Url of page;
  breadcrumbs.href = "";
  const navigationRight = document.querySelector(".nav-right-side");
  generateContainers(navigationRight, "previous-btn", "a");

  const previousBtn = document.querySelector(".previous-btn");

  generateContainers(previousBtn, "previous-arrow-img", "img");

  const PreviousArrowImg = document.querySelector(".previous-arrow-img");
  PreviousArrowImg.src = previousBtnArrowImg;

  generateContainers(navigationRight, "info-btn", "a");

  const infoBtn = document.querySelector(".info-btn");
  infoBtn.innerHTML = "Info";
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
  instagram.href = "#";
};
generateFooter();
