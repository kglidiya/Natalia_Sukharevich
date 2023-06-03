import myAudioResource1_mp3 from "../audio/Sonata_reminiscenza.mp3";
import myAudioResource2_mp3 from "../audio/Chopin_Ballade_4.mp3";
import myAudioResource3_mp3 from "../audio/Chopin_Grande_Vals.mp3";
import myAudioResource4_mp3 from "../audio/Tales_Op_26.mp3";
import myAudioResource5_mp3 from "../audio/Romeo_and_Juliet.mp3";
import myAudioResource6_mp3 from "../audio/Haydn.mp3";
import myAudioResource7_mp3 from "../audio/Clementi_part1.mp3";
import myAudioResource8_mp3 from "../audio/Clementi_part2.mp3";
import myAudioResource9_mp3 from "../audio/Rakhmaninov_ sharp_minor.mp3";
import myAudioResource10_mp3 from "../audio/Rakhmaninov_Etude_g_minor.mp3";
import myAudioResource11_mp3 from "../audio/Rakhmaninov_in_major.mp3";
import myAudioResource12_mp3 from "../audio/Kulev_major.mp3";
import myAudioResource13_mp3 from "../audio/Kulev_minor.mp3";
import myAudioResource14_mp3 from "../audio/Brahms_part1.mp3";
import myAudioResource15_mp3 from "../audio/Brahms_part2.mp3";
import myAudioResource1_ogg from "../audio/Sonata_reminiscenza.ogg";
import myAudioResource2_ogg from "../audio/Chopin_Ballade_4.ogg";
import myAudioResource3_ogg from "../audio/Chopin_Grande_Vals.ogg";
import myAudioResource4_ogg from "../audio/Tales_Op_26.ogg";
import myAudioResource5_ogg from "../audio/Romeo_and_Juliet.ogg";
import myAudioResource6_ogg from "../audio/Haydn.ogg";
import myAudioResource7_ogg from "../audio/Clementi_part1.ogg";
import myAudioResource8_ogg from "../audio/Clementi_part2.ogg";
import myAudioResource9_ogg from "../audio/Rakhmaninov_-sharp_minor.ogg";
import myAudioResource10_ogg from "../audio/Rakhmaninov_Etude_g_minor.ogg";
import myAudioResource11_ogg from "../audio/Rakhmaninov_in_major.ogg";
import myAudioResource12_ogg from "../audio/Kulev_major.ogg";
import myAudioResource13_ogg from "../audio/Kulev_minor.ogg";
import myAudioResource14_ogg from "../audio/Brahms_part1.ogg";
import myAudioResource15_ogg from "../audio/Brahms_part2.ogg";

import previewImg from "../images/previewYoutube.jpg";
import previewImgMobile from "../images/previewYoutube_mobile.jpeg";

export const preview = previewImg;
export const previewMobile = previewImgMobile;
export const documentHeight = document.documentElement.clientHeight;
export const biography = document.querySelector('.biography');
export const btnShow = document.querySelector('.biography__button-show');
export const btnShowMobile = document.querySelector('.biography__button-show_mobile');
export const textHidden = document.querySelector('.biography__hidden');
export const textHiddenMobile = document.querySelector('.biography__hidden_mobile');
export const btnHide = document.querySelector('.biography__button-hide');
export const btnHideMobile = document.querySelector('.biography__button-hide_mobile');
export const itemsAll = document.querySelectorAll('.video__slider-item');
export const sliderTrack = document.querySelector('.video__slider-track');
export const sliderWrapper = document.querySelector('.video__slider-wrapper');
export const btnNext = document.querySelector('.video__slider-button_next');
export const btnPrev = document.querySelector('.video__slider-button_prev');
export const videoMain = document.querySelector('.video__main');
export const mediaQuery = window.matchMedia("(max-width: 414px)");
export const mediaQuerySmall = window.matchMedia("(max-width: 576px)");
export const mediaQueryLandscape = window.matchMedia("(max-width: 915px) and (orientation:landscape)");
export const mediaQueryMedium = window.matchMedia("(max-width: 768px) and (orientation:portrait)");
export const mediaQueryLarge = window.matchMedia("(max-width: 992px) and (orientation:portrait)");
export const sectionPhoto = document.querySelector('.photo');
export const photosMiddle = document.querySelectorAll('.middle')
export const photoCenter = document.querySelector('.center');
export const photosBorder = document.querySelectorAll('.border');
export const photos = document.querySelectorAll('.photo__item');
export const popup = document.querySelector('.popup');
export const closeBtnPopup = document.querySelector('.popup__closebtn');
export const btnForward = document.querySelector('.popup__button-forward');
export const btnBackwards = document.querySelector('.popup__button-backwards');
export const track = document.querySelector('.popup__track');
export const photosAll = document.querySelectorAll('.popup__box');
export const imagesAll = document.querySelectorAll('.popup__image');
export const photoMain = document.querySelector('.popup__photo-main');
export const caption = document.querySelector('.popup__caption');
export const form = document.querySelector('#formElem');
export const formBtn = document.querySelector('.contacts__button');
export const sectionAudio = document.querySelector('.audio__scroll');
export const tracksTemplate = document.querySelector('.audio__tracks').content;
export const sectionMedia = document.querySelector('.media');
export const sectionFooter = document.querySelector('.footer');
export const mediaImage = document.querySelector('.media__image');
export const backgroundImage = document.querySelector('.page__background-image');
export const backgroundBiography = document.querySelector('.biography__photo');
export const backgroundFooter = document.querySelector('.footer__image');
export const scrollContainer = document.querySelector('.audio__scroll');
export const links = document.querySelectorAll('.intro__link');
export const iconPlay = document.querySelector('.video__iframe-icon');
export const videoPreview = document.querySelector('.video__iframe-preview');
export const slidesToShow = 4;
export const tracks = [
    {
    source_mp3: myAudioResource14_mp3,
    source_ogg: myAudioResource14_ogg,
    titleEn:
      "Brahms. Variations and Fugue on a Theme by Handel op.24. Part 1",
    titleRu: "Брамс. Вариации и фуга на тему Генделя op.24, 1-я часть",
    duration: "11:46",
  },
  {
    source_mp3: myAudioResource15_mp3,
    source_ogg: myAudioResource15_ogg,
    titleEn:
      "Brahms. Variations and Fugue on a Theme by Handel op.24. Part 2",
    titleRu: "Брамс. Вариации и фуга на тему Генделя op.24, 2-я часть",
    duration: "08:36",
  },
  {
    source_mp3: myAudioResource2_mp3,
    source_ogg: myAudioResource2_ogg,
    titleEn: "Chopin. Ballade № 4 in F minor op.52",
    titleRu: "Шопен. Баллада № 4 фа минор op. 52",
    duration: "11:08",
  },
  {
    source_mp3: myAudioResource3_mp3,
    source_ogg: myAudioResource3_ogg,
    titleEn: "Chopin. Grande Valse № 5 in A flat major op.42",
    titleRu: "Шопен. Вальс №5 ля-бемоль мажор, op. 42",
    duration: "04:03",
  },
  {
    source_mp3: myAudioResource5_mp3,
    source_ogg: myAudioResource5_ogg,
    titleEn:
      "Prokofiev. Pieces from Romeo and Juliet, Op.75- No. 10, Romeo and Juliet Before Parting",
    titleRu:
      "Прокофьев. «Ромео и Джульетта перед разлукой» из сюиты «Ромео и Джульетта», Op.75- No. 10",
    duration: "07:47",
  },
  {
    source_mp3: myAudioResource7_mp3,
    source_ogg: myAudioResource7_ogg,
    titleEn: "Clementi. Sonata in F-sharp minor, Op. 25 No. 5. 1 st mov. Allegro con espressione",
    titleRu: "Клементи. Соната фа-диез минор, Op. 25 No. 5. Часть 1. Allegro con espressione",
    duration: "03:56",
  },
  {
    source_mp3: myAudioResource8_mp3,
    source_ogg: myAudioResource8_ogg,
    titleEn: "Clementi. Sonata in F-sharp minor, Op. 25 No. 2 nd mov. Lento e patetico",
    titleRu: "Клементи. Соната фа-диез минор, Op. 25 No. 5. Часть 2. Lento e patetico",
    duration: "03:10",
  },
  {
    source_mp3: myAudioResource6_mp3,
    source_ogg: myAudioResource6_ogg,
    titleEn: "Haydn. Sonata in G minor, H.XVI No.44 1st mov. Moderato",
    titleRu: "Гайдн. Соната соль минор, H.XVI No.44 часть 1. Moderato",
    duration: "09:04",
  },
  {
    source_mp3: myAudioResource1_mp3,
    source_ogg: myAudioResource1_ogg,
    titleEn:
      "Medtner. «Sonata-reminiscenza» from «Forgotten Melodies» I, Op. 38- No. 1 in A minor",
    titleRu:
      "Метнер. «Соната-воспоминание» из цикла «Забытые мотивы» I, Op. 38- No. 1, ля минор",
    duration: "13:46",
  },
  {
    source_mp3: myAudioResource12_mp3,
    source_ogg: myAudioResource12_ogg,
    titleEn: "Vadim Kulev. Prelude in B major",
    titleRu: "Вадим Кулёв. Прелюдия си мажор",
    duration: "02:04",
  },
  {
    source_mp3: myAudioResource13_mp3,
    source_ogg: myAudioResource13_ogg,
    titleEn: "Vadim Kulev. Prelude in F sharp minor",
    titleRu: "Вадим Кулёв. Прелюдия фа-диез минор",
    duration: "02:03",
  },

  {
    source_mp3: myAudioResource9_mp3,
    source_ogg: myAudioResource9_ogg,
    titleEn: "Rakhmaninov. Etude-tableau op.33 in C sharp minor",
    titleRu: "Рахманинов. Этюд-картина op.33 до-диез минор",
    duration: "03:03",
  },
  {
    source_mp3: myAudioResource10_mp3,
    source_ogg: myAudioResource10_ogg,
    titleEn: "Rakhmaninov. Etude -tableau op.33 in G minor",
    titleRu: "Рахманинов. Этюд-картина op.33 соль минор",
    duration: "04:01",
  },
  {
    source_mp3: myAudioResource11_mp3,
    source_ogg: myAudioResource11_ogg,
    titleEn: "Rakhmaninov. Etude-tableau op.33 in C major",
    titleRu: "Рахманинов. Этюды-картина op.33 до мажор",
    duration: "02:16",
  },
  {
    source_mp3: myAudioResource4_mp3,
    source_ogg: myAudioResource4_ogg,
    titleEn: "Medtner. Tales, Op.26- No. 1 in E-Flat Major",
    titleRu: "Метнер. Сказка Op.26- No. 1 ми бемоль мажор",
    duration: "02:57",
  },
];



