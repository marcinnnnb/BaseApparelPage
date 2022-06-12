const form = document.querySelector('.main__form');
const email = document.querySelector('.form__email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailVal = email.value;

  // check if it is a valid email
  if (!validateEmail(emailVal)) {
    form.classList.add('error');
  } else {
    form.classList.remove('error');
    document.body.innerHTML = `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 30px"><h1>: )</h1></div>`;
  }
});

function validateEmail(email) {
  let regexValues =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexValues.test(String(email).toLowerCase());
}
