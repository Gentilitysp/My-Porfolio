const emailAddress = document.getElementById('myEmail');
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
// Start of Local Storage code
const emailAddress = document.getElementById('mail');
const fullName = document.getElementById('name');
const textMessage = document.getElementById('message');
const templateForm = document.getElementById('form');
templateForm.addEventListener('input', () => {
  const localStorageObject = {
    name: fullName.value,
    email: emailAddress.value,
    message: textMessage.value,
  };
  localStorage.setItem('templateFormData', JSON.stringify(localStorageObject));
});
const getData = JSON.parse(localStorage.getItem('templateFormData'));
function prePopulated() {
  if (getData) {
    fullName.value = getData.name;
    emailAddress.value = getData.email;
    textMessage.value = getData.message;
    return getData;
  }
  return '';
}
prePopulated();