import MouseFollower from "mouse-follower";
import gsap from "gsap";
import showreal from "./src/images/Showreal.svg";

MouseFollower.registerGSAP(gsap);

export function Cursor() {
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
}
