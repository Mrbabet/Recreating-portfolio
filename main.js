import "./scss/styles.scss";
import showreal from "./src/images/Showreal.svg";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";

MouseFollower.registerGSAP(gsap);

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (!isMobile() || screen.width >= 1200) {
  const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: "mf-cursor",
    innerClassName: "mf-cursor-inner",
    textClassName: "mf-cursor-text",
    mediaClassName: "mf-cursor-media",
    mediaBoxClassName: "mf-cursor-media-box",
    iconSvgClassName: "mf-svgsprite",
    iconSvgNamePrefix: "-",
    iconSvgSrc: "",
    dataAttr: "cursor",
    hiddenState: "-hidden",
    textState: "-text",
    iconState: "-icon",
    activeState: "-active",
    mediaState: "-media",
    stateDetection: {
      "-pointer": "a,button",
      "-hidden": "iframe",
    },
    visible: false,
    visibleOnState: false,
    speed: 0.3,
    ease: "expo.out",
    overwrite: true,
    skewing: 0,
    skewingText: 0,
    skewingIcon: 0,
    skewingMedia: 0,
    skewingDelta: 0,
    skewingDeltaMax: 0,
    stickDelta: 0,
    showTimeout: 0,
    hideOnLeave: true,
    hideTimeout: 0,
    hideMediaTimeout: 0,
  });

  const el = document.querySelector(".carousel");
  el.addEventListener("mouseenter", () => {
    cursor.show();
    cursor.setImg(showreal);
  });

  el.addEventListener("mouseleave", () => {
    cursor.hide();
    cursor.removeImg();
  });
}

let carouselSlider = document.querySelector(".carousel-slider");
let list = document.querySelector(".carousel-list");
let item = document.querySelectorAll(".carousel-item");
let list2;

const itemsWidth = [];
item.forEach((item) => {
  const carouselItemWidth = item.offsetWidth;
  itemsWidth.push(carouselItemWidth);
});

let itemsWidthSum = 0;
const sumFunction = function () {
  for (let i = 0; i < itemsWidth.length; i++) {
    itemsWidthSum += itemsWidth[i];
  }
};
sumFunction();

let carouselSliderWidth = itemsWidthSum + 240;
carouselSlider.style.width = carouselSliderWidth + "px";

if (screen.width <= 1760) {
  carouselSliderWidth = itemsWidthSum + 240;
} else {
  carouselSliderWidth = itemsWidthSum * 1.7;
}

carouselSlider.style.width = carouselSliderWidth + "px";
function carousel() {
  item.forEach((item, index) => {
    item.style.transform = `translateX(${index * 60}px)`;
  });

  const speed = 1;

  const width = carouselSliderWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (carouselSliderWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
}

carousel();

const showrealImgContainer = document.querySelector(".showreal-img");
const carouselContainer = document.querySelector(".carousel");
const carouselItem = document.querySelector(".carousel-item");

const centerCarousel = function () {
  const showrealContainerHeight = showrealImgContainer.offsetHeight;
  const carouselItemHeight = carouselItem.offsetHeight;
  return (carouselContainer.style.top =
    showrealContainerHeight * 0.5 - carouselItemHeight * 0.5 + "px");
};

window.onload = function () {
  centerCarousel();
};

window.onresize = function () {
  centerCarousel();
};
