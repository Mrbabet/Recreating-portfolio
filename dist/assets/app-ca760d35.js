import"./styles-489a799d.js";const i="/assets/breadcrumb-arrow-2aac3f3d.svg",a="/assets/previous-btn-1a60c3e3.svg";class s extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<div class="navigation-top">
    <div class="nav-left-side">
      <a class="name" href="index.html"
        >Abigail Frączek<span class="breadcrumb-arrow"
          ><img
            class="arrow-img"/></span></a>
      <a class="breadcrumbs">aaa</a>
    </div>
    <div class="nav-right-side">
      <a class="previous-btn" 
        ><img
          class="previous-arrow-img"/></a
      ><a class="info-btn">Info</a>
    </div>
    </div>`}}customElements.define("page-header",s);class c extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<footer class="footer">
      <a href="#">abigailfraczek.kontakt@gmail.com</a>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`}}customElements.define("page-footer",c);let{host:g,hostname:p,href:h,origin:b,pathname:l,port:w,protocol:v,search:H}=window.location,n={info:"Info",portfolio:"Portfolio",realizacja:"Portfolio"};const d=document.querySelector(".arrow-img"),m=document.querySelector(".name"),e=document.querySelector(".breadcrumbs"),t=document.querySelector(".previous-btn"),u=document.querySelector(".previous-arrow-img"),r=document.querySelector(".info-btn");r.href="./info.html";d.src=i;u.src=a;window.location.toString().includes(l)===!0&&(m.style.fontWeight="400",e.style.fontWeight="700");if(window.location.toString().includes("info"))e.innerHTML=n.info,t.style.display="none",r.innerHTML="Portfolio",r.style.width=89+"px",r.href="./index.html";else if(window.location.toString().includes("portfolio"))e.innerHTML=n.portfolio,t.style.display="none";else if(window.location.toString().includes("realizacja")){e.innerHTML=n.realizacja;const o=document.createElement("span");o.innerHTML=`<img src="${i}"/>`,e.appendChild(o)}
