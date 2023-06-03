import {
  btnShow,
  btnShowMobile,
  textHidden,
  mediaQueryLandscape,
  mediaQueryLarge,
  textHiddenMobile,
  btnHideMobile,
  sectionMedia,
  mediaImage,
} from "./constants";


export function showHiddenContent(e) {
  if (e.target.classList.contains("biography__button-show_mobile")) {
    textHiddenMobile.classList.toggle("biography__hidden_show");
    btnShowMobile.style.display = "none";
  }

  if (e.target.classList.contains("biography__button-hide_mobile")) {
    textHiddenMobile.classList.toggle("biography__hidden_show");
    btnShowMobile.style.display = "block";
  }

  if (e.target.classList.contains("biography__button-show")) {
    textHidden.classList.toggle("biography__hidden_show");
    btnHideMobile.style.display = "none";
    btnShow.style.display = "none";
  }

  if (e.target.classList.contains("biography__button-hide")) {
    textHidden.classList.toggle("biography__hidden_show");
    if (mediaQueryLarge.matches || mediaQueryLandscape.matches) {
      btnHideMobile.style.display = "block";
    } else btnHideMobile.style.display = "none";
    btnShow.style.display = "block";
  }

  setTimeout(() => {
    const offsetTopMedia = sectionMedia.getBoundingClientRect().top;
    mediaImage.style.top = `${offsetTopMedia}px`;
  }, 0);
}


