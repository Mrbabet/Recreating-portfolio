import"./styles-c91676f7.js";const s="/assets/breadcrumb-arrow-d3c83cbe.svg",a="/assets/previous-btn-33446623.svg";class c extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<div class="navigation-top">
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
      <button class="go-back-btn">Go Back </button>
    </div>
    </div>`}}customElements.define("page-header",c);class l extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<footer class="footer">
      <span>abigailfraczek.kontakt@gmail.com</span>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`}}customElements.define("page-footer",l);let{host:f,hostname:p,href:w,origin:h,pathname:d,port:v,protocol:y,search:k}=window.location,r={info:"Info",portfolio:"Portfolio",realizacja:"Portfolio"};const m=document.querySelector(".arrow-img"),u=document.querySelector(".name"),e=document.querySelector(".breadcrumbs"),t=document.querySelector(".previous-btn"),g=document.querySelector(".previous-arrow-img"),i=document.querySelector(".info-btn");let o=document.querySelector(".go-back-btn");o.style.display="none";i.href="./info.html";m.src=s;g.src=a;window.location.toString().includes(d)===!0&&(u.style.fontWeight="400",e.style.fontWeight="700");if(window.location.toString().includes("info"))e.innerHTML=r.info,t.style.display="none",i.style.display="none",o.innerHTML="Go back",o.style.width=89+"px",o.style.display="flex",o.addEventListener("click",function(){window.history.back()});else if(window.location.toString().includes("portfolio"))e.innerHTML=r.portfolio,t.style.display="none";else if(window.location.toString().includes("realizacja")){e.innerHTML=r.realizacja;const n=document.createElement("span");n.innerHTML=`<img src="${s}"/>`,e.appendChild(n)}
