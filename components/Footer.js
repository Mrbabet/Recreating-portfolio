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
      <div class="email-mobile">abigailfraczek.kontakt</br>@gmail.com</div>
      <div class="email">abigailfraczek.kontakt@gmail.com</div>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`;
  }
}

customElements.define("page-footer", PageFooter);
