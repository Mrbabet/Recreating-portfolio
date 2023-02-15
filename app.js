import "./scss/styles.scss";
import breadcrumbImg from "./src/images/breadcrumb-arrow.svg";
import previousBtnArrowImg from "./src/images/previous-btn.svg";
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
  infoBtn.innerHTML = "Portfolio";
  infoBtn.style.width = 89 + "px";
  infoBtn.href = "./index.html";
} else if (window.location.toString().includes("portfolio")) {
  breadcrumb.innerHTML = breadcrumbs.portfolio;
  previousBtn.style.display = "none";
} else if (window.location.toString().includes("realizacja")) {
  breadcrumb.innerHTML = breadcrumbs.realizacja;
  const arrowContainer = document.createElement("span");
  arrowContainer.innerHTML = `<img src="${breadcrumbImg}"/>`;
  breadcrumb.appendChild(arrowContainer);
}
