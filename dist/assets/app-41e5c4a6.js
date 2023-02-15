import"./styles-6d921df2.js";const a="/assets/breadcrumb-arrow-2aac3f3d.svg",s="/assets/previous-btn-1a60c3e3.svg";class c extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<div class="navigation-top">
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
      <button class="go-back-btn">Go Back</button>
    </div>
    </div>`}}customElements.define("page-header",c);class l extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<footer class="footer">
      <a href="#">abigailfraczek.kontakt@gmail.com</a>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`}}customElements.define("page-footer",l);let{host:b,hostname:p,href:h,origin:w,pathname:d,port:y,protocol:v,search:k}=window.location,t={info:"Info",portfolio:"Portfolio",realizacja:"Portfolio"};const m=document.querySelector(".arrow-img"),u=document.querySelector(".name"),e=document.querySelector(".breadcrumbs"),r=document.querySelector(".previous-btn"),f=document.querySelector(".previous-arrow-img"),i=document.querySelector(".info-btn");let o=document.querySelector(".go-back-btn");o.style.display="none";i.href="./info.html";m.src=a;f.src=s;window.location.toString().includes(d)===!0&&(u.style.fontWeight="400",e.style.fontWeight="700");if(window.location.toString().includes("info"))e.innerHTML=t.info,r.style.display="none",i.style.display="none",o.innerHTML="Go back",o.style.width=89+"px",o.style.display="flex",o.addEventListener("click",function(){window.history.back()});else if(window.location.toString().includes("portfolio"))e.innerHTML=t.portfolio,r.style.display="none";else if(window.location.toString().includes("realizacja")){e.innerHTML=t.realizacja;const n=document.createElement("span");n.innerHTML=`<img src="${a}"/>`,e.appendChild(n)}
