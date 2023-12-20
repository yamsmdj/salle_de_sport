const UserRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10,14}$/;
let inputEmail= document.querySelector("input[type=email]");
console.log(inputEmail);
const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(EmailRegex.test(inputEmail.value));
    if (EmailRegex.test(inputEmail.value)) {
        inputEmail.classList.add('is-valid');
        inputEmail.classList.remove('is-invalid');
    } else {
        inputEmail.classList.add('is-invalid');
        inputEmail.classList.remove('is-valid');
    }
})



// inputEmail.addEventListener('input', (e)=>{
//     e.target.value()
// })
