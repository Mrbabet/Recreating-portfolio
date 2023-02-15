import"./styles-858b214a.js";const d="/assets/breadcrumb-arrow-d3c83cbe.svg",b="/assets/previous-btn-33446623.svg";class y extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<div class="navigation-top">
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
      <button class="go-back-btn"><img
      class="previous-arrow-img"
      src="/src/images/previous-btn.svg" /></button>
    </div>
    </div>`}}customElements.define("page-header",y);class f extends HTMLElement{constructor(){super(),this.innerHTML=""}connectedCallback(){this.innerHTML,this.render()}render(){this.innerHTML=`<footer class="footer">
      <span>abigailfraczek.kontakt@gmail.com</span>
      <a href="https://www.instagram.com/abigailfraczek/">Instagram</a>
    </footer>`}}customElements.define("page-footer",f);const i="/assets/gray-00ae53a3.svg",a="/assets/gray-small-f6659f1e.svg";let{host:H,hostname:M,href:S,origin:j,pathname:w,port:O,protocol:C,search:q}=window.location;const v=[{id:0,image:i,title:"Tytuł",description:"Opis.",type:"picture"},{id:1,image:i,title:"Tytuł",description:"Opis.",type:"picture"},{id:2,image:a,title:"Tytuł",description:"Opis.",type:"portrait",description1:"Logo jest wizualną <br/>reprezentacją <br/> Ciebie i Twojego <br/>biznesu.",description2:"Informator: <br/> <span class='underline'>Dlaczego logo <br/> to ważny element <br/> w budowaniu <br/>marki?</span>"},{id:3,image:i,title:"Tytuł",description:"Opis.",type:"picture"},{id:4,image:i,title:"Tytuł",description:"Opis.",type:"picture"},{id:5,image:i,title:"Tytuł",description:"Opis.",type:"picture",description1:"Identyfikacja<br/> wizualna  przyciąga <br/>sprecyzowaną<br/> grupę klientów,<br/> którzy zapłacą<br/> za Twoje produkty.",description2:"Informator:<br/><span class='underline'> Dlaczego warto<br/> zainwestować w spójną<br/> identyfikację wizualną<br/> marki?</span>"},{id:6,image:i,title:"Tytuł",description:"Opis.",type:"picture"},{id:7,image:a,title:"Tytuł",description:"Opis.",type:"portrait"},{id:8,image:i,title:"Tytuł",description:"Opis.",type:"picture",description1:"Marka dzieląca się<br/> doświadczeniami na mediach społecznościowych zbliża do siebie swoich<br/> klientów.",description2:"Informator:<br/> <span class='underline'> Dlaczego social media do jeden z elementów kreacji marki?</span> "},{id:9,image:i,title:"Tytuł",description:"Opis.",type:"picture"},{id:10,image:a,title:"Tytuł",description:"Opis.",type:"portrait"},{id:11,image:i,title:"Tytuł",description:"Opis.",type:"picture"}],h=document.querySelector(".portfolio"),T=function(e){for(let t=0;t<e.length;t++){const m=function(u,g){const s=document.createElement("img");s.className=u,s.src=`${e[t].image} `,g.prepend(s)},r=document.createElement("div");r.className="box-container",r.innerHTML=`<div class ='description-container'><div class="title">${e[t].title}</div>
                                    <p class="img-description">${e[t].description}</p></div>`,r.setAttribute("data-type",e[t].type),h.appendChild(r),m("box-container-img",r)}};document.onload=T(v);let c={info:"Info",portfolio:"Portfolio",realizacja:"Portfolio"};const z=document.querySelector(".arrow-img"),k=document.querySelector(".name"),n=document.querySelector(".breadcrumbs"),l=document.querySelector(".previous-btn"),I=document.querySelector(".previous-arrow-img"),p=document.querySelector(".info-btn");let o=document.querySelector(".go-back-btn");o.style.display="none";p.href="./info.html";z.src=d;I.src=b;window.location.toString().includes(w)===!0&&(k.style.fontWeight="400",n.style.fontWeight="700");if(window.location.toString().includes("info"))n.innerHTML=c.info,l.style.display="none",p.style.display="none",o.style.width=42+"px",o.style.display="flex",o.addEventListener("click",function(){window.history.back()});else if(window.location.toString().includes("portfolio"))n.innerHTML=c.portfolio,l.style.display="none";else if(window.location.toString().includes("realizacja")){n.innerHTML=c.realizacja;const e=document.createElement("span");e.innerHTML=`<img src="${d}"/>`,n.appendChild(e)}
