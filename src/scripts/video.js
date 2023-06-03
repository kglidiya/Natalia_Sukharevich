import {
    itemsAll,
    sliderTrack,
    videoMain,
    mediaQuerySmall,
    mediaQueryLandscape,
    sliderWrapper,
    sectionMedia,
    btnNext,
    btnPrev,
    iconPlay,
    preview,
    previewMobile,
    videoPreview,
    slidesToShow
} from './constants';

export function showIconPlay() {
    iconPlay.classList.add('video__iframe-icon_active');
};

export function hideIconPlay() {
    iconPlay.classList.remove('video__iframe-icon_active');
};

export function playVideo(src) {
    videoMain.innerHTML = `<iframe class="video__iframe" src=${src}?autoplay=1&mute=0&enablejsapi=1" 
   frameborder="0" allow="autoplay" allowfullscreen="allowfullscreen"></iframe>`;
};

let positionX = 0;
let positionY = 0;

export function changePreviewImg() {
    if (mediaQuerySmall.matches) {
        videoPreview.src = previewMobile;
    }
    else videoPreview.src = preview;
};

export function showNextSlide() {
    let itemWidth = sliderTrack.clientWidth / slidesToShow;
    let itemHeight = sliderWrapper.clientHeight / 3;
    positionX -= itemWidth;
    positionY -= itemHeight;
    if (mediaQuerySmall.matches || mediaQueryLandscape.matches
        || (sectionMedia.offsetWidth >= 1024 && sectionMedia.offsetWidth <= 1200)) {
        sliderTrack.style.transform = `translateY(${positionY}px)`;
    }
    else sliderTrack.style.transform = `translateX(${positionX}px)`;
};

export function showPrevSlide() {
    let itemWidth = sliderTrack.clientWidth / slidesToShow;
    let itemHeight = sliderWrapper.clientHeight / 3;
    positionX += itemWidth;
    positionY += itemHeight;
    if (mediaQuerySmall.matches || mediaQueryLandscape.matches
        || (sectionMedia.offsetWidth >= 1024 && sectionMedia.offsetWidth <= 1200)) {
        sliderTrack.style.transform = `translateY(${positionY}px)`;
    }
    else sliderTrack.style.transform = `translateX(${positionX}px)`;
};

export function checkBtn() {
    let itemWidth = sliderTrack.clientWidth / slidesToShow;
    let itemHeight = sliderWrapper.clientHeight / 3;
    if (!mediaQuerySmall.matches && !mediaQueryLandscape.matches
        && sectionMedia.offsetWidth > 1200 || sectionMedia.offsetWidth <= 1024) {
        if (positionX === -itemWidth) {
            btnPrev.disabled = true;
        } else btnPrev.disabled = false;
        if (positionX === -(itemWidth * 6)) {
            btnNext.disabled = true;
        } else btnNext.disabled = false;
    }

    if (mediaQuerySmall.matches || mediaQueryLandscape.matches
        || sectionMedia.offsetWidth >= 1024 && sectionMedia.offsetWidth <= 1200) {
        if (positionY === -((itemsAll.length - 4) * itemHeight)) {
            btnNext.disabled = true;
        } else btnNext.disabled = false;
        if (positionY === -itemHeight) {
            btnPrev.disabled = true;
        } else btnPrev.disabled = false;
    }
}

export function openMainVideo(evt) {
    const src = evt.currentTarget.firstElementChild.dataset.src;
    playVideo(src);
};

export function adjustWidth() {
    itemsAll.forEach(function (item) {
        if (sectionMedia.offsetWidth <= 576) {
            btnPrev.disabled = true;
            item.style.width = '95%';
            sliderTrack.style.transform = `translateY(0)`;
        }
        if (mediaQueryLandscape.matches) {
            btnPrev.disabled = true;
            item.style.width = '95%';
            sliderTrack.style.transform = `translateY(0)`;
        }
        if (sectionMedia.offsetWidth > 1024 && sectionMedia.offsetWidth <= 1200) {
            btnPrev.disabled = true;
            item.style.width = '95%';
            sliderTrack.style.transform = `translateY(0)`;
        }
        if (sectionMedia.offsetWidth > 576 && sectionMedia.offsetWidth <= 1024 && !mediaQueryLandscape.matches) {
            btnPrev.disabled = true;
            item.style.width = `${(sliderWrapper.clientWidth / 4) - 30}px`;
            sliderTrack.style.transform = `translateX(0)`;
        }
        if (sectionMedia.offsetWidth > 1200) {
            btnPrev.disabled = true;
            item.style.width = `${(sliderWrapper.clientWidth / 4) - 30}px`;
            sliderTrack.style.transform = `translateX(0)`;
        }
        btnNext.disabled = false;
        positionY = 0;
        positionX = 0;
    });
};
