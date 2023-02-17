"use strict";

export default class PageHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "";
  }

  connectedCallback() {
    this.innerHTML;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="navigation-top">
    <div class="nav-left-side">
      <a class="name" href="/">Abigail Frączek</a>
    </div>
    <div class="nav-right-side">
      <a class="previous-btn" href ="portfolio.html"><img class="previous-arrow-img" src="/src/images/previous-btn.svg" /></a>
      <a class="info-btn" href="">Info</a>
      <button class="go-back-btn"><img class="go-back-arrow-img" src = "/src/images/go-back-arrow.svg"/></button>
    </div>
    </div>`;
  }
}

customElements.define("page-header", PageHeader);

// const shadow = this.attachShadow({ mode: "open" });

// const navigationTop = document.createElement("div");
// navigationTop.className = "navigation-top";
// const navigationLeftSide = document.createElement("div");
// navigationLeftSide.className = "nav-left-side";
// const breadcrumb = document.createElement("a");
// breadcrumb.className = "name breadcrumb";
// breadcrumb.href = location.pathname;
// breadcrumb.innerHTML = `Text`;
// navigationLeftSide.append(breadcrumb);
// const navigationRightSide = document.createElement("div");
// navigationRightSide.className = "nav-right-side";

// shadow.appendChild(navigationTop);
// navigationTop.append(navigationLeftSide);
// navigationTop.append(navigationRightSide);
