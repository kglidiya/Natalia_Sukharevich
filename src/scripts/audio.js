import { sectionAudio, tracksTemplate } from "./constants";

function audioTime(time) {
  time = Math.floor(time);
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time - minutes * 60);
  var minutesVal = minutes;
  var secondsVal = seconds;
  if (minutes < 10) {
    minutesVal = "0" + minutes;
  }
  if (seconds < 10) {
    secondsVal = "0" + seconds;
  }
  return minutesVal + ":" + secondsVal;
}

export function creatTrack(track) {
  const trackElement = tracksTemplate.cloneNode(true);
  const audio = trackElement.querySelector("#audio");
  const btnPlay = trackElement.querySelector(".audio__btn-play");
  const btnPause = trackElement.querySelector(".audio__btn-pause");
  const bar = trackElement.getElementById("bar");
  let duration = trackElement.querySelector(".audio__duration");
  const progress = trackElement.querySelector(".audio__progress");
  const pathMp3 = track.source_mp3.match(/[^//]*$/)[0];
  const pathOgg = track.source_ogg.match(/[^//]*$/)[0];
  trackElement.querySelector(".audio__source_mp3").src = pathMp3;
  trackElement.querySelector(".audio__source_ogg").src = pathOgg;

  if (document.documentElement.lang === "ru") {
    trackElement.querySelector(".audio__title").textContent = track.titleRu;
  }
  if (document.documentElement.lang === "en") {
    trackElement.querySelector(".audio__title").textContent = track.titleEn;
  }

  audio.addEventListener("durationchange", () => {
    duration.textContent = audioTime(audio.duration);
  });

  if (isNaN(audio.duration)) {
    duration.textContent = track.duration;
  } else duration.textContent = audioTime(audio.duration);

  btnPlay.addEventListener("click", function () {
    const audio = this.closest("article").firstElementChild;
    audio.setAttribute("Active", true);
    const container = this.closest("div");
    container.classList.add("audio__container_active");
    btnPlay.classList.toggle("audio__btn_hidden");
    btnPause.classList.toggle("audio__btn_visible");

    const audioAll = document.querySelectorAll("#audio");

    audioAll.forEach((el) => {
      if (el.attributes.length === 3) {
        el.play();
        el.addEventListener("timeupdate", () => {
          const remainingTime = el.duration - el.currentTime;
          duration.textContent = audioTime(remainingTime);
          bar.style.width = `${Math.floor(
            (el.currentTime / el.duration) * 100
          )}%`;
        });
        setTimeout(() => {
          el.removeAttribute("Active");
        }, 0);
      }

      if (el.attributes.length === 2) {
        el.pause();
        if (isNaN(el.duration)) {
          duration.textContent = track.duration;
        } else
          el.addEventListener("timeupdate", () => {
            const duration = el.nextElementSibling.childNodes[4];
            return (duration.textContent = audioTime(el.duration));
          });
        el.currentTime = 0;
        el.nextElementSibling.childNodes[3].lastElementChild.style.width = "0";
        el.nextElementSibling.classList.remove("audio__container_active");
        el.nextElementSibling.childNodes[0].classList.remove("audio__btn_hidden");
        el.nextElementSibling.childNodes[2].classList.remove("audio__btn_visible");
      }
    });
  });

  btnPause.addEventListener("click", function () {
    this.closest("article").firstElementChild.pause();
    btnPlay.classList.toggle("audio__btn_hidden");
    btnPause.classList.toggle("audio__btn_visible");
  });

  progress.addEventListener("click", (e) => {
    const audio = e.target.closest("article").firstElementChild;
    let clickPosition;
    clickPosition =
      (e.pageX - progress.offsetLeft - sectionAudio.offsetLeft) /
      progress.offsetWidth;
    const clickTime = clickPosition * audio.duration;
    audio.currentTime = clickTime;
  });

  audio.addEventListener("ended", () => {
    btnPlay.classList.toggle("audio__btn_hidden");
    btnPause.classList.toggle("audio__btn_visible");
    bar.style.width = "0";
    duration.textContent = audioTime(audio.duration);
    audio.nextElementSibling.classList.remove("audio__container_active");
  });

  return trackElement;
}
