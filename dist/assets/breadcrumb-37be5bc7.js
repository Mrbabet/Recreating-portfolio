(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))y(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&y(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function y(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();class b extends HTMLElement{constructor(){super(),this.innerHTML=`<div class="navigation-top">
    <div class="nav-left-side">
    <div class="name first-page">
      <a href="/">Abigail Frączek</a><span><svg class= "breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></span>
      </div>





      <div class="second-page">
      <a href ="/portfolio/">Portfolio</a><span><svg class= "breadcrumb-container" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0004 6.99487L10.9953 0L10.2568 0.748718L15.9799 6.4718H0V7.51795H15.9799L15.7645 7.74359L10.2568 13.2513L10.9953 14L18.0004 6.99487Z" fill="#111110"/>
      </svg></span>
      </div>

      <div class="third-page"><a href ="/portfolio/realizacja/">Realizacja</a></div>
      <div class="info-page"> <a href="/info/">Info</a></div>
     
      
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
      <a class="previous-btn" href ="/portfolio/"><img class="previous-arrow-img" src="/src/images/previous-btn.svg" /></a>
      <button class="go-back-btn"><img class="go-back-arrow-img" src = "/src/images/go-back-arrow.svg"/></button>
      <a class="info-btn" href="/info/">Info</a></div>
  </div>`}}customElements.define("page-header",b);const p=document.querySelector(".title-desktop");p.style.display="none";const m=function(){window.location.toString().includes("realizacja")&&screen.width>1280?p.style.display="flex":p.style.display="none"};window.addEventListener("resize",m);window.onload=()=>m();class L extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<footer class="footer">
      <div class="email-mobile">abigailfraczek.kontakt</br>@gmail.com</div>
      <div class="email">abigailfraczek.kontakt@gmail.com</div>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`}}customElements.define("page-footer",L);const S="/assets/go-back-arrow-1a60c3e3.svg",k="/assets/go-back-arrow-1a60c3e3.svg";function q(){let{host:d,hostname:l,href:u,origin:y,pathname:e,port:t,protocol:c,search:x}=window.location;document.querySelector(".arrow-img");const h=document.querySelector(".name");document.querySelector(".breadcrumbs");const f=document.querySelector(".previous-btn"),w=document.querySelector(".previous-arrow-img"),v=document.querySelector(".go-back-arrow-img"),g=document.querySelector(".info-btn"),s=document.querySelector(".go-back-btn");s.style.display="none",f.style.display="none",g.href="/info/",w.src=k,v.src=S,window.location.toString().includes(e)===!0&&(h.style.fontWeight="400");const n=document.querySelector(".first-page"),o=document.querySelector(".second-page"),i=document.querySelector(".third-page"),r=document.querySelector(".info-page"),a=document.querySelectorAll(".breadcrumb-container");n.style.fontWeight="700",o.style.display="none",i.style.display="none",r.style.display="none",a[0].style.display="none",window.location.toString().includes("info")?(a[0].style.display="flex",n.style.fontWeight="400",n.style.fontFamily="DM Sans",o.style.display="none",i.style.display="none",r.style.display="flex",r.style.fontWeight="700",r.style.fontFamily="Lora",s.style.width=42+"px",s.style.display="flex",s.addEventListener("click",function(){window.history.back()}),g.style.display="none"):window.location.toString().includes("portfolio")&&!window.location.toString().includes("realizacja")?(a[0].style.display="flex",a[1].style.display="none",n.style.fontWeight="400",n.style.fontFamily="DM Sans",o.style.display="flex",o.style.fontWeight="700",o.style.fontFamily="Lora",i.style.display="none",r.style.display="none",s.style.display="none",f.style.display="none"):window.location.toString().includes("realizacja")&&window.location.toString().includes("portfolio")&&(a[0].style.display="flex",n.style.fontWeight="400",f.style.display="flex",o.style.display="flex",o.style.fontFamily="DM Sans",i.style.display="flex",i.style.fontWeight="700",i.style.fontFamily="Lora",r.style.display="none",s.style.display="none")}console.log(window.location.toString().includes("realizacja"));export{q as B};
