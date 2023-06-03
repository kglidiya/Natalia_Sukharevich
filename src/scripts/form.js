import { form, formBtn } from "./constants";

export function formSubmit() {
  const data = new FormData(form);
  fetch("https://natalia-sukharevich.com/mail.php", {
    mode: "no-cors",
    method: "POST",
    body: data,
  })
    .then((response) => {
      if (response.type === "opaque" || response.ok) {
        if (document.documentElement.lang === "en") {
          formBtn.textContent = "Sent";
        }
        if (document.documentElement.lang === "ru") {
          formBtn.textContent = "Сообщение отправлено";
        }
        setTimeout(() => {
          if (document.documentElement.lang === "en") {
            formBtn.textContent = "Send";
          }
          if (document.documentElement.lang === "ru") {
            formBtn.textContent = "Отправить";
          }
          form.reset();
        }, 1000);
      }
      return Promise.reject(response.status);
    })
    .catch((err) => {
      console.log(err);
    });
}
