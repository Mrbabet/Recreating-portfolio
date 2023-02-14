import"./styles-078b8406.js";const a="/assets/breadcrumb-arrow-2aac3f3d.svg";class i extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<div class="navigation-top">
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
    </div>`}}customElements.define("page-header",i);class s extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<footer class="footer">
      <a href="#">abigailfraczek.kontakt@gmail.com</a>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`}}customElements.define("page-footer",s);let{host:m,hostname:f,href:u,origin:g,pathname:c,port:h,protocol:b,search:p}=window.location,r={info:"Info",portfolio:"Portfolio",realizacja:"Portfolio"};const l=document.querySelector(".name"),e=document.querySelector(".breadcrumbs"),t=document.querySelector(".previous-btn"),o=document.querySelector(".info-btn");window.location.toString().includes(c)===!0&&(l.style.fontWeight="400",e.style.fontWeight="700");if(window.location.toString().includes("info"))e.innerHTML=r.info,t.style.display="none",o.innerHTML="Portfolio",o.style.width=89+"px",o.href="./index.html";else if(window.location.toString().includes("portfolio"))e.innerHTML=r.portfolio,t.style.display="none";else if(window.location.toString().includes("realizacja")){e.innerHTML=r.realizacja;const n=document.createElement("span");n.innerHTML=`<img src="${a}"/>`,e.appendChild(n)}
