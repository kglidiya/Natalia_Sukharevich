import {
  mediaQueryLandscape,
  sectionMedia,
  documentHeight,
  biography,
  backgroundBiography,
  mediaImage,
  sectionFooter,
  backgroundFooter,
  mediaQueryMedium,
} from "./constants";

let opacity = 0;

export function changeOpacity() {
  const offsetTopBiography = biography.getBoundingClientRect().top;
  const offsetBottomBiography = biography.getBoundingClientRect().bottom;
  const offsetTopMedia = sectionMedia.getBoundingClientRect().top;

  if (offsetTopBiography <= 0) {
    opacity = 1;
    backgroundBiography.style.top = `0`;
  }
  if (offsetTopBiography > 0) {
    opacity = documentHeight / (offsetTopBiography + 100) / 10;
    backgroundBiography.style.top = `${offsetTopBiography}px`;
  }
  if (offsetBottomBiography <= 0) {
    backgroundBiography.style.display = "none";
  }
  if (offsetBottomBiography > 0) {
    backgroundBiography.style.display = "flex";
  }
  if (offsetTopMedia <= 0) {
    mediaImage.style.top = `0`;
  }
  if (offsetTopMedia > 0) {
    mediaImage.style.top = `${offsetTopMedia}px`;
  }
  biography.style.opacity = opacity;
}

export function changeBackgroundFooter() {
  const offsetFooter = sectionFooter.getBoundingClientRect().top;
  const offsetBottomMedia = sectionMedia.getBoundingClientRect().bottom;
  if (
    (mediaQueryMedium.matches && offsetFooter > 0) ||
    (mediaQueryLandscape.matches && offsetFooter > 0)
  ) {
    backgroundFooter.style.display = "none";
  }
  if (
    (mediaQueryMedium.matches && offsetFooter <= 0) ||
    (mediaQueryLandscape.matches && offsetFooter <= 0)
  ) {
    backgroundFooter.style.display = "flex";
    if (sectionFooter.clientWidth <= 576) {
      backgroundFooter.style.bottom = `10%`;
      backgroundFooter.style.top = "auto";
    }
    if (sectionFooter.clientWidth > 576 && sectionFooter.clientWidth <= 768) {
      backgroundFooter.style.top = "auto";
      backgroundFooter.style.bottom = `0`;
    }
    if (mediaQueryLandscape.matches) {
      if (sectionFooter.clientWidth <= 576) {
        backgroundFooter.style.bottom = `10%`;
      } else backgroundFooter.style.bottom = `0`;
    }
  }
  if (!mediaQueryLandscape.matches && sectionFooter.clientWidth > 768) {
    backgroundFooter.style.display = "flex";
    backgroundFooter.style.top = `${offsetBottomMedia + 300}px`;
    backgroundFooter.style.bottom = `auto`;
  }
}
