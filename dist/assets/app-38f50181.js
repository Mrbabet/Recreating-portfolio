(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();class m extends HTMLElement{constructor(){super(),this.innerHTML=`<div class="navigation-top">
    <div class="nav-left-side">
      <a class="name first-page" href="/">Abigail Frączek<svg class="breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></a>
      <a class="second-page" href="/portfolio.html">Portfolio<svg class= "breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></a>
      <a class="third-page" href="/realizacja.html">Realizacja <svg class= "breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></a>
      <a class="info-page" href="/info.html">Info<svg class= "breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></a>
      <div class="title-desktop">
      <div class="header">36 Days of Type 2022</div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </div></div> 
    </div>
    <div class="nav-right-side">
      <a class="previous-btn" href ="portfolio.html"><img class="previous-arrow-img" src="/src/images/previous-btn.svg" /></a>
      <button class="go-back-btn"><img class="go-back-arrow-img" src = "/src/images/go-back-arrow.svg"/></button>
      <a class="info-btn" href="/info.html">Info</a></div>
  </div>`}}customElements.define("page-header",m);const p=document.querySelector(".title-desktop"),u=function(){window.location.toString().includes("realizacja")&&screen.width>1280?p.style.display="flex":p.style.display="none"};window.addEventListener("resize",u);window.onload=()=>u();class h extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<footer class="footer">
      <span>abigailfraczek.kontakt@gmail.com</span>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`}}customElements.define("page-footer",h);const w="/assets/previous-btn-33446623.svg",v="/assets/previous-btn-33446623.svg";let{host:q,hostname:H,href:M,origin:P,pathname:L,port:B,protocol:F,search:T}=window.location;document.querySelector(".arrow-img");const b=document.querySelector(".name");document.querySelector(".breadcrumbs");const d=document.querySelector(".previous-btn"),x=document.querySelector(".previous-arrow-img"),S=document.querySelector(".go-back-arrow-img"),k=document.querySelector(".info-btn"),n=document.querySelector(".go-back-btn");n.style.display="none";d.style.display="none";k.href="./info.html";x.src=v;S.src=w;window.location.toString().includes(L)===!0&&(b.style.fontWeight="400");const i=document.querySelector(".first-page"),s=document.querySelector(".second-page"),l=document.querySelector(".third-page"),r=document.querySelector(".info-page"),o=document.querySelectorAll(".breadcrumb-container");i.style.fontWeight="700";s.style.display="none";l.style.display="none";r.style.display="none";o[0].style.display="none";window.location.toString().includes("info")?(o[0].style.display="flex",o[3].style.display="none",i.style.fontWeight="400",i.style.fontFamily="Lora",s.style.display="none",l.style.display="none",r.style.display="flex",r.style.fontWeight="700",r.style.fontFamily="Lora",n.style.width=42+"px",n.style.display="flex",n.addEventListener("click",function(){window.history.back()})):window.location.toString().includes("portfolio")?(o[0].style.display="flex",o[1].style.display="none",i.style.fontWeight="400",i.style.fontFamily="DM Sans",s.style.display="flex",s.style.fontWeight="700",s.style.fontFamily="Lora",l.style.display="none",r.style.display="none",n.style.display="none",d.style.display="none"):window.location.toString().includes("realizacja")&&(o[0].style.display="flex",o[2].style.display="none",i.style.fontWeight="400",d.style.display="flex",s.style.display="flex",s.style.fontFamily="DM Sans",l.style.display="flex",l.style.fontWeight="700",l.style.fontFamily="Lora",r.style.display="none",n.style.display="none");
