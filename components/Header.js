"use strict";

export default class PageHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="navigation-top">
    <div class="nav-left-side">
    <div class="name first-page">
      <a href="/">Abigail Frączek</a><span><svg class= "breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></span>
      </div>





      <div class="second-page">
      <a href ="/portfolio/">Portfolio</a><span><svg class= "breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></span>
      </div>

      <div class="third-page"><a href ="/portfolio/realizacja/">Realizacja</a></div>
      <div class="info-page"> <a href="/info/">Info</a></div>
     
      
      <div class="title-desktop">
      <div class="header">36 Days of Type 2022</div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </div>
      </div> 
    </div>
    <div class="nav-right-side">
      <a class="previous-btn" href ="/portfolio/"><img class="previous-arrow-img" src="/src/images/previous-btn.svg" /></a>
      <button class="go-back-btn"><img class="go-back-arrow-img" src = "/src/images/go-back-arrow.svg"/></button>
      <a class="info-btn" href="/info/">Info</a></div>
  </div>`;
  }
}
customElements.define("page-header", PageHeader);

const dekstopTitle = document.querySelector(".title-desktop");
dekstopTitle.style.display = "none";
const displayDesktopTitles = function () {
  if (
    window.location.toString().includes("realizacja") &&
    screen.width > 1280
  ) {
    dekstopTitle.style.display = "flex";
  } else {
    dekstopTitle.style.display = "none";
  }
};
window.addEventListener("resize", displayDesktopTitles);
window.onload = () => displayDesktopTitles();
