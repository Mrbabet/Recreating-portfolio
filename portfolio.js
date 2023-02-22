import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";
import "./scss/styles.scss";
import { data } from "./data";
const portfolioContainer = document.querySelector(".portfolio");

for (let i = 0; i < data.length; i++) {
  const link = data[i].Link;
  const title = data[i].Title;
  const description = data[i].Description;
  const typeOfContent = data[i].Type;
  const location = data[i].Location;
  function getFileExtension(filename) {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  }
  const containerExtension = getFileExtension(link);
  const [arrayValue] = containerExtension;

  const generateBoxContainer = function () {
    const boxContainer = document.createElement("a");
    boxContainer.className = "box-container";
    boxContainer.setAttribute("data-type", typeOfContent);
    boxContainer.href = location;
    portfolioContainer.appendChild(boxContainer);
  };
  generateBoxContainer();

  const boxContainer = document.querySelectorAll(".box-container");

  const generateDescriptionContainer = function () {
    const descriptionContainer = document.createElement("div");
    descriptionContainer.innerHTML = `
            <div class="description-container">
              <div class="title">${title}</div>
              <p class="img-description">${description}</p>
            </div>`;
    boxContainer.forEach((element) => {
      element.appendChild(descriptionContainer);
    });
  };

  if (arrayValue === "webp" || arrayValue === "svg") {
    const generateImgContainer = function () {
      const imageContainer = document.createElement("img");
      imageContainer.src = link;
      boxContainer.forEach((element) => {
        element.appendChild(imageContainer);
      });
    };
    generateImgContainer();
  } else {
    const generateVideoContainer = function () {
      const videoContainer = document.createElement("video");
      videoContainer.className = "video-container";
      videoContainer.autoplay = true;
      videoContainer.muted = true;
      videoContainer.loop = true;
      const videoSource = document.createElement("source");
      videoSource.src = link;
      boxContainer.forEach((element) => {
        element.appendChild(videoContainer);
      });

      videoContainer.appendChild(videoSource);
    };
    generateVideoContainer();
  }
  generateDescriptionContainer();
}
const scrollBtn = document.querySelector(".scroll-top");

const goBackTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.documentElement.style.scrollBehavior = "smooth";
};
// Function which shows button when we scroll

const showOnScroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

window.addEventListener("scroll", showOnScroll);
scrollBtn.addEventListener("click", goBackTop);
