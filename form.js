const emailAddress = document.getElementById('email');
const templateForm = document.getElementById('form');
const validatorMessage = document.getElementById('validator-message');
templateForm.addEventListener('submit', (e) => {
  if (emailAddress.value !== emailAddress.value.toLowerCase()) {
    e.preventDefault();
    validatorMessage.textContent = 'Kindly input a valid email address!';
  } else {
    validatorMessage.textContent = '';
  }
});
const templateForm = document.getElementById('form');
const formInputs = form.querySelectorAll('input, textarea');
const fullName = document.getElementById('name');
const textMessage = document.getElementById('message');
const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const formData = getFromLocalStorage('formData');
if (formData !== null) {
  fullName.value = formData.fullName;
  emailAddress.value = formData.emailAddress;
  textMessage.value = formData.textMessage;
}

formInputs.forEach((fe) => {
  fe.addEventListener('input', () => {
    const objectForLocalStorage = {
      fullName: fullName.value,
      emailAddress: emailAddress.value,
      textMessage: textMessage.value,
    };
    saveToLocalStorage('formData', objectForLocalStorage);
  });
});
