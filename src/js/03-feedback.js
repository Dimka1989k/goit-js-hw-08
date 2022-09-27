import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'selectedFilters';
const formRef = document.querySelector('.feedback-form');
initForm();

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(handleSubmit) {
  handleSubmit.preventDefault();
  const formData = new FormData(formRef);
  formData.forEach((value, name) => console.log(value, name));
  handleSubmit.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput(handleSubmit) {
  let keepFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  keepFilters = keepFilters ? JSON.parse(keepFilters) : {};
  keepFilters[handleSubmit.target.name] = handleSubmit.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(keepFilters));
}

function initForm() {
  let keepFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (keepFilters) {
    keepFilters = JSON.parse(keepFilters);
    Object.entries(keepFilters).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  }
}
