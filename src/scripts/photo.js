import {
  photosMiddle,
  photoCenter,
  photosBorder,
  popup,
  btnForward,
  btnBackwards,
  track,
  photosAll,
  imagesAll,
  photoMain,
  caption,
  mediaQueryLandscape,
  mediaQueryLarge,
} from "./constants";

let photoHeight = 200;
let countPhoto = 0;
let pos = 0;

export const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      photoCenter.classList.add("amimation_center");
      photosMiddle.forEach((photo) => photo.classList.add("amimation_middle"));
      photosBorder.forEach((photo) => photo.classList.add("amimation_border"));
    }
    if (!entry.isIntersecting) {
      photoCenter.classList.remove("amimation_center");
      photosMiddle.forEach((photo) =>
        photo.classList.remove("amimation_middle")
      );
      photosBorder.forEach((photo) =>
        photo.classList.remove("amimation_border")
      );
    }
  });
});

export function openPopup() {
  popup.classList.add("popup_opened");
}

export function closePopup() {
  popup.classList.remove("popup_opened");
}

export function showNextPhoto() {
  pos -= photoHeight;
  if (mediaQueryLarge.matches) {
    track.style.transform = `translateX(${pos}px)`;
  } else track.style.transform = `translateY(${pos}px)`;
}

export function checkBtnPhoto() {
  if (pos === 0) {
    btnBackwards.disabled = true;
  }
  if (pos < 0) {
    btnBackwards.disabled = false;
  }
  if (pos === -((imagesAll.length - 4) * 200) && !mediaQueryLandscape.matches) {
    btnForward.disabled = true;
  }
  if (pos === -3400 && mediaQueryLandscape.matches) {
    btnForward.disabled = true;
  } else if (
    (pos > -3800 && mediaQueryLandscape.matches) ||
    (pos > -((imagesAll.length - 4) * 200) && !mediaQueryLandscape.matches)
  ) {
    btnForward.disabled = false;
  }
}

export function showPrevPhoto() {
  pos += photoHeight;
  if (mediaQueryLarge.matches) {
    track.style.transform = `translateX(${pos}px)`;
  } else track.style.transform = `translateY(${pos}px)`;
}

export function openMainPhoto(evt) {
  photoMain.src = evt.target.src;
  caption.textContent = evt.target.nextElementSibling.textContent;
}

export function showMainPhotoForward() {
  countPhoto += 1;
  for (let i = 0; i < photosAll.length; i++) {
    photoMain.src = photosAll[countPhoto].firstElementChild.src;
    caption.textContent =
      photosAll[countPhoto].firstElementChild.nextElementSibling.textContent;
    photosAll[countPhoto].firstElementChild.style.transform = "scale(1.1)";
  }
}

export function showMainPhotoBackwards() {
  countPhoto -= 1;
  for (let i = 0; i < photosAll.length; i++) {
    photoMain.src = photosAll[countPhoto].firstElementChild.src;
    caption.textContent =
      photosAll[countPhoto].firstElementChild.nextElementSibling.textContent;
  }
}

export function adjustOnResize() {
  track.style.transform = `translateX(0)`;
  track.style.transform = `translateY(0)`;
  pos = 0;
  countPhoto = 0;
  btnForward.disabled = false;
  btnBackwards.disabled = true;
}
