(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();class h extends HTMLElement{constructor(){super(),this.innerHTML=`<div class="navigation-top">
    <div class="nav-left-side">
    <div class="name first-page">
      <a href="/">Abigail Frączek</a><span><svg class= "breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></span>
      </div>





      <div class="second-page">
      <a href ="/portfolio.html">Portfolio</a><span><svg class= "breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></span>
      </div>

      <div class="third-page"><a href ="/realizacja.html">Realizacja</a></div>
      <div class="info-page"> <a href="/info.html">Info</a></div>
     
      
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
      <a class="previous-btn" href ="portfolio.html"><img class="previous-arrow-img" src="/src/images/previous-btn.svg" /></a>
      <button class="go-back-btn"><img class="go-back-arrow-img" src = "/src/images/go-back-arrow.svg"/></button>
      <a class="info-btn" href="/info.html">Info</a></div>
  </div>`}}customElements.define("page-header",h);const d=document.querySelector(".title-desktop");d.style.display="none";const u=function(){window.location.toString().includes("realizacja")&&screen.width>1280?d.style.display="flex":d.style.display="none"};window.addEventListener("resize",u);window.onload=()=>u();class v extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<footer class="footer">
      <div class="email-mobile">abigailfraczek.kontakt</br>@gmail.com</div>
      <div class="email">abigailfraczek.kontakt@gmail.com</div>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`}}customElements.define("page-footer",v);const w="/assets/go-back-arrow-33446623.svg",b="/assets/go-back-arrow-33446623.svg";let{host:q,hostname:M,href:H,origin:P,pathname:L,port:z,protocol:F,search:T}=window.location;document.querySelector(".arrow-img");const S=document.querySelector(".name");document.querySelector(".breadcrumbs");const y=document.querySelector(".previous-btn"),k=document.querySelector(".previous-arrow-img"),x=document.querySelector(".go-back-arrow-img"),g=document.querySelector(".info-btn"),o=document.querySelector(".go-back-btn");o.style.display="none";y.style.display="none";g.href="./info.html";k.src=b;x.src=w;window.location.toString().includes(L)===!0&&(S.style.fontWeight="400");const n=document.querySelector(".first-page"),s=document.querySelector(".second-page"),i=document.querySelector(".third-page"),l=document.querySelector(".info-page"),r=document.querySelectorAll(".breadcrumb-container");n.style.fontWeight="700";s.style.display="none";i.style.display="none";l.style.display="none";r[0].style.display="none";window.location.toString().includes("info")?(r[0].style.display="flex",n.style.fontWeight="400",n.style.fontFamily="DM Sans",s.style.display="none",i.style.display="none",l.style.display="flex",l.style.fontWeight="700",l.style.fontFamily="Lora",o.style.width=42+"px",o.style.display="flex",o.addEventListener("click",function(){window.history.back()}),g.style.display="none"):window.location.toString().includes("portfolio")?(r[0].style.display="flex",r[1].style.display="none",n.style.fontWeight="400",n.style.fontFamily="DM Sans",s.style.display="flex",s.style.fontWeight="700",s.style.fontFamily="Lora",i.style.display="none",l.style.display="none",o.style.display="none",y.style.display="none"):window.location.toString().includes("realizacja")&&(r[0].style.display="flex",r[2].style.display="none",n.style.fontWeight="400",y.style.display="flex",s.style.display="flex",s.style.fontFamily="DM Sans",i.style.display="flex",i.style.fontWeight="700",i.style.fontFamily="Lora",l.style.display="none",o.style.display="none");
