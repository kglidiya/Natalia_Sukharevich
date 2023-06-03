import "./styles/index.css";
import {
  btnNext,
  btnPrev,
  itemsAll,
  sectionPhoto,
  photos,
  closeBtnPopup,
  btnBackwards,
  btnForward,
  imagesAll,
  tracks,
  sectionAudio,
  links,
  backgroundBiography,
  backgroundFooter,
  btnHide,
  btnHideMobile,
  btnShow,
  btnShowMobile,
  form,
  videoMain,
} from "./scripts/constants";
import {
  showNextSlide,
  showPrevSlide,
  checkBtn,
  openMainVideo,
  adjustWidth,
  showIconPlay,
  hideIconPlay,
  playVideo,
  changePreviewImg,
} from "./scripts/video";
import {
  observer,
  openPopup,
  closePopup,
  openMainPhoto,
  showMainPhotoBackwards,
  showMainPhotoForward,
  showNextPhoto,
  checkBtnPhoto,
  showPrevPhoto,
  adjustOnResize,
} from "./scripts/photo";
import { creatTrack } from "./scripts/audio";
import { changeBackgroundFooter, changeOpacity } from "./scripts/background";
import { showHiddenContent } from "./scripts/biography";
import { formSubmit } from "./scripts/form";

window.addEventListener("resize", () => {
  changeOpacity();
  adjustWidth();
  changePreviewImg();
  changeBackgroundFooter();
  adjustOnResize();
});

window.addEventListener("scroll", () => {
  changeOpacity();
  changeBackgroundFooter();
});

document.addEventListener("DOMContentLoaded", () => {
  backgroundBiography.style.top = "-1300px";
  backgroundFooter.style.display = "none";
  adjustWidth();
  changePreviewImg();
  adjustOnResize()
});

if (document.documentElement.lang === "en") {
  links[1].classList.add("intro__link_active");
}
if (document.documentElement.lang === "ru") {
  links[0].classList.add("intro__link_active");
}

btnShow.addEventListener("click", (e) => showHiddenContent(e));
btnHide.addEventListener("click", (e) => showHiddenContent(e));
btnShowMobile.addEventListener("click", (e) => showHiddenContent(e));
btnHideMobile.addEventListener("click", (e) => showHiddenContent(e));

tracks.forEach((track) => {
  sectionAudio.append(creatTrack(track));
});

observer.observe(sectionPhoto);

photos.forEach((button) => {
  button.addEventListener("click", openPopup);
});

closeBtnPopup.addEventListener("click", closePopup);

btnBackwards.addEventListener("click", function () {
  showPrevPhoto();
  checkBtnPhoto();
  showMainPhotoBackwards();
});

btnForward.addEventListener("click", function () {
  showNextPhoto();
  checkBtnPhoto();
  showMainPhotoForward();
});

imagesAll.forEach(function (image) {
  image.addEventListener("click", openMainPhoto);
});

itemsAll.forEach(function (slide) {
  slide.addEventListener("click", openMainVideo);
});

videoMain.addEventListener("mouseover", showIconPlay);
videoMain.addEventListener("mouseout", hideIconPlay);
videoMain.addEventListener("click", () => {
  playVideo(itemsAll[0].firstElementChild.dataset.src);
});

btnNext.addEventListener("click", function () {
  checkBtn();
  showNextSlide();
});

btnPrev.addEventListener("click", function () {
  checkBtn();
  showPrevSlide();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formSubmit();
});
