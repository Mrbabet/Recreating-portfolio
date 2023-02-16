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
      <a class="name" href="/"
        >Abigail Frączek<span class="breadcrumb-arrow"
          ><img
            class="arrow-img"
            src="/src/images/breadcrumb-arrow.svg"/></span></a>
      <a class="breadcrumbs"></a>
    </div>
    <div class="nav-right-side">
      <a class="previous-btn" 
        ><img
          class="previous-arrow-img"
          src="/src/images/previous-btn.svg" /></a
      ><a class="info-btn" href="">Info</a>
      <button class="go-back-btn"><img 
      class="go-back-arrow-img" src = "/src/images/go-back-arrow.svg"/></button>
    </div>
    </div>`;
  }
}

customElements.define("page-header", PageHeader);
