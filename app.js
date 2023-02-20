import "./scss/styles.scss";
import ArrowRight from "./src/images/breadcrumb-arrow.svg";
import GoBack from "./src/images/go-back-arrow.svg";
import ArrowLeft from "./src/images/previous-btn.svg";
import IconOverlay from "./src/images/img-icon.svg";
import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";
import ImgGray from "./src/images/gray.svg";
import ImgGraySmall from "./src/images/gray-small.svg";

// ----------------------------------------------------------------------------------------

let { host, hostname, href, origin, pathname, port, protocol, search } =
  window.location;

// ----------------------------------------------------------------------------------------
const breadcrumbArrowImg = document.querySelector(".arrow-img");
const logo = document.querySelector(".name");
const breadcrumb = document.querySelector(".breadcrumbs");
const previousBtn = document.querySelector(".previous-btn");
const previousArrowImg = document.querySelector(".previous-arrow-img");
const goBackArrowImg = document.querySelector(".go-back-arrow-img");
const infoBtn = document.querySelector(".info-btn");
const goBackBtn = document.querySelector(".go-back-btn");
goBackBtn.style.display = "none";
previousBtn.style.display = "none";
infoBtn.href = "./info.html";

previousArrowImg.src = ArrowLeft;
goBackArrowImg.src = GoBack;

if (window.location.toString().includes(pathname) === true) {
  logo.style.fontWeight = "400";
}

const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");
const infoPage = document.querySelector(".info-page");
const breadcrumbArrow = document.querySelectorAll(".breadcrumb-container");

let homePage = true;
firstPage.style.fontWeight = "700";
secondPage.style.display = "none";
thirdPage.style.display = "none";
infoPage.style.display = "none";
breadcrumbArrow[0].style.display = "none";

if (!homePage) {
} else if (window.location.toString().includes("info")) {
  breadcrumbArrow[0].style.display = "flex";
  breadcrumbArrow[3].style.display = "none";
  firstPage.style.fontWeight = "400";
  firstPage.style.fontFamily = "Lora";
  secondPage.style.display = "none";
  thirdPage.style.display = "none";
  infoPage.style.display = "flex";
  infoPage.style.fontWeight = "700";
  infoPage.style.fontFamily = "Lora";
  goBackBtn.style.width = 42 + "px";
  goBackBtn.style.display = "flex";
  goBackBtn.addEventListener("click", function () {
    window.history.back();
  });
} else if (window.location.toString().includes("portfolio")) {
  breadcrumbArrow[0].style.display = "flex";
  breadcrumbArrow[1].style.display = "none";
  firstPage.style.fontWeight = "400";
  firstPage.style.fontFamily = "DM Sans";
  secondPage.style.display = "flex";
  secondPage.style.fontWeight = "700";
  secondPage.style.fontFamily = "Lora";
  thirdPage.style.display = "none";
  infoPage.style.display = "none";
  goBackBtn.style.display = "none";
  previousBtn.style.display = "none";
} else if (window.location.toString().includes("realizacja")) {
  breadcrumbArrow[0].style.display = "flex";
  breadcrumbArrow[2].style.display = "none";
  firstPage.style.fontWeight = "400";
  previousBtn.style.display = "flex";
  secondPage.style.display = "flex";
  secondPage.style.fontFamily = "DM Sans";
  thirdPage.style.display = "flex";
  thirdPage.style.fontWeight = "700";
  thirdPage.style.fontFamily = "Lora";
  infoPage.style.display = "none";
  goBackBtn.style.display = "none";
}
