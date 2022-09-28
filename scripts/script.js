const email = document.querySelector(".email-input");
const form = document.querySelector("form");
const errorIcon = document.querySelector(".input__error");
const errorMsg = document.querySelector(".input__error-message");
const submitBtn = document.querySelector(".input__submit-btn");
const border = document.querySelector(".main__input-wrap");

let isValid = true;

function setValidityState() {
  errorIcon.style.display = isValid ? "none" : "block";
  submitBtn.disabled = !isValid;
  errorMsg.style.visibility = isValid ? "hidden" : "visible";
  border.style.border = isValid
    ? "1px solid hsla(0, 36%, 70%, 0.5)"
    : "2px solid hsl(0, 93%, 68%)";
}

email.addEventListener("blur", () => {
  isValid = email.validity.valid;
  setValidityState();
});

email.addEventListener("keydown ", () => {
  if (!isValid) isValid = true;
  setValidityState();
});
