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
