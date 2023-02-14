"use strict";

export default class PageFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "";
  }

  connectedCallback() {
    this.innerHTML;
    this.render();
  }

  render() {
    this.innerHTML = `<footer class="footer">
      <a href="#">abigailfraczek.kontakt@gmail.com</a>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`;
  }
}

customElements.define("page-footer", PageFooter);
