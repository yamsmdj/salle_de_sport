const UserRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;


const form = document.querySelector('form');
console.log(form);
const inputEmail = document.querySelector('input[type=email]');
console.log(inputEmail);


form.addEventListener('submit', e =>{
    e.preventDefault()

    if (EmailRegex.test(inputEmail.value)) {
        inputEmail.classList.add('is-valid');
        inputEmail.classList.remove('is-invalid');
    }else{
    inputEmail.classList.add('is-invalid');
    inputEmail.classList.remove('is-valid');
}

})


