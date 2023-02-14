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
      <a class="name" href="index.html"
        >Abigail Frączek<span class="breadcrumb-arrow"
          ><img
            class="arrow-img"
            src="/src/images/breadcrumb-arrow.svg" /></span></a>
      <a class="breadcrumbs">aaa</a>
    </div>
    <div class="nav-right-side">
      <a class="previous-btn" 
        ><img
          class="previous-arrow-img"
          src="/src/images/previous-btn.svg" /></a
      ><a class="info-btn" href="info.html">Info</a>
    </div>
    </div>`;
  }
}

customElements.define("page-header", PageHeader);
