import{B as k}from"./breadcrumb-37be5bc7.js";const r="/assets/gray-small-f6659f1e.svg",b="/assets/Okładka-1-7ff9b0dd.webm",C="/assets/image 1-c3386454.png",L="/assets/image 2-9ab449d9.png",O="/assets/image 3-770b374c.png",E="/assets/image 4-81ea2140.png",h="/assets/image 48-1037bbff.png",v="/assets/image 58-bb9da7f7.png",D="/assets/image 72-e57b2184.png",I="/assets/Jaskółka 2-e84e665d.png",o=[{Link:b,Title:"Tytuł",Description:"Opis.",Type:"Picture",Location:"/portfolio/realizacja/"},{Link:C,Title:"Tytuł",Description:"Opis.",Type:"Picture"},{Link:r,Title:"Tytuł",Description:"Opis.",Type:"Portrait"},{Link:L,Title:"Tytuł",Description:"Opis.",Type:"Picture"},{Link:O,Title:"Tytuł",Description:"Opis.",Type:"Picture"},{Link:E,Title:"Tytuł",Description:"Opis.",Type:"Picture"},{Link:h,Title:"Tytuł",Description:"Opis.",Type:"Picture"},{Link:v,Title:"Tytuł",Description:"Opis.",Type:"Picture"},{Link:r,Title:"Tytuł",Description:"Opis.",Type:"Portrait"},{Link:D,Title:"Tytuł",Description:"Opis.",Type:"Picture"},{Link:r,Title:"Tytuł",Description:"Opis.",Type:"Portrait"},{Link:I,Title:"Tytuł",Description:"Opis.",Type:"Picture"}];new k;const P=document.querySelector(".portfolio");for(let n=0;n<o.length;n++){let T=function(e){return/[.]/.exec(e)?/[^.]+$/.exec(e):void 0};const s=o[n].Link,p=o[n].Title,d=o[n].Description,u=o[n].Type,m=o[n].Location,g=T(s),[l]=g;(function(){const e=document.createElement("a");e.className="box-container",e.setAttribute("data-type",u),e.href=m,P.appendChild(e)})();const c=document.querySelectorAll(".box-container"),y=function(){const e=document.createElement("div");e.innerHTML=`
            <div class="description-container">
              <div class="title">${p}</div>
              <p class="img-description">${d}</p>
            </div>`,c.forEach(t=>{t.appendChild(e)})};l==="webp"||l==="png"?function(){const t=document.createElement("img");t.src=s,c.forEach(i=>{i.appendChild(t)})}():function(){const t=document.createElement("video");t.className="video-container",t.autoplay=!0,t.muted=!0,t.loop=!0;const i=document.createElement("source");i.src=s,c.forEach(f=>{f.appendChild(t)}),t.appendChild(i)}(),y()}const a=document.querySelector(".scroll-top"),x=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,document.documentElement.style.scrollBehavior="smooth"},w=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?a.style.display="block":a.style.display="none"};window.addEventListener("scroll",w);a.addEventListener("click",x);