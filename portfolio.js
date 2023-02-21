import PageHeader from "./components/Header";
import PageFooter from "./components/Footer";
import "./scss/styles.scss";

const portfolioContainer = document.querySelector(".portfolio");
fetch("./resources.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const resources = data;
    for (let i = 0; i < resources.length; i++) {
      const link = resources[i].Link;
      const title = resources[i].Title;
      const description = resources[i].Description;
      const typeOfContent = resources[i].Type;
      const location = resources[i].Location;
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
  });

// <video class="box-container-img" autoplay muted>
//         <source src="/src/images/Okładka-1.webm" />
//       </video>
//       <div class="description-container">
//         <div class="title">Tytuł</div>
//         <p class="img-description">Opis.</p>
//       </div>

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
