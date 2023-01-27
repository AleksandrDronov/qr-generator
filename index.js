const input = document.querySelector('input');
const form = document.querySelector('form');
const image = document.querySelector('img')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=250x250`;
  input.value = ''
})
