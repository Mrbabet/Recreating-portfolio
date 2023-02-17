import "./scss/styles.scss";
import ArrowRight from "./src/images/breadcrumb-arrow.svg";
import GoBack from "./src/images/go-back-arrow.svg";
import ArrowLeft from "./src/images/previous-btn.svg";
import ArrowOkładka from "./src/images/arrow-okładka.svg";
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
