const input = document.querySelector("input");
const form = document.querySelector("form");
const image = document.querySelector("img");
const button = document.querySelector(".save-button");

const getQrcode = async (value) => {
  const blob = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?data=${value}&size=250x250`
  ).then((res) => res.blob());

  const url = URL.createObjectURL(blob);

  image.src = url;
  button.href = url;
};

getQrcode("hello");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getQrcode(input.value);
  input.value = "";
});
