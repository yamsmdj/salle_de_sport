// ------ REGEX --------
const UserRegex = /^[a-zA-Z][a-zA-Z]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^(?:\d{1,3})?\d{10,14}$/;
const SujetRegex = /^[^{}<>$]{10,50}$/;
const CommentRegex = /^[^{}<>$]{30,500}$/;
// ------- VARIABLE -----------
let inputName = document.querySelector("#input1")
let inputFname = document.querySelector("#input2")
let inputTel= document.querySelector("#input3");
let inputEmail= document.querySelector("#input4");
let inputSujet = document.querySelector('#input5')
let inputComment = document.querySelector('#Textarea1')
const form = document.querySelector('form');
// ------ Validateurs ------
let nomValid = false;
let prenomValid = false ;
let telValid = false;
let emailValid = false;
let sujetValid = false;
let msgValid = false;


function addclass(element,regex , value, valid) {
    if (regex.test(value)) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        valid = true;
    } else {
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
    }}
    inputName.addEventListener('input', (e)=>{addclass(inputName, UserRegex, e.target.value, nomValid)});
    inputFname.addEventListener('input', (e)=>{addclass(inputFname, UserRegex, e.target.value)});
    inputTel.addEventListener('input', (e)=>{addclass(inputTel, PhoneNumberRegex, e.target.value)});
    inputEmail.addEventListener('input', (e)=>{addclass(inputEmail, EmailRegex, e.target.value)});
    inputSujet.addEventListener('input', (e)=>{addclass(inputSujet, SujetRegex, e.target.value)});
    inputComment.addEventListener('input', (e)=>{addclass(inputComment, CommentRegex, e.target.value)});
    
    form.addEventListener('submit', e=> {
        e.preventDefault()
        if (emailValid && nomValid && telValid && prenomValid && sujetValid && msgValid) {

            Email.send({
                SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
                To : '',
                From : "localhost:5500",
                Subject : "This is the subject",
                Body : "And this is the body",
                Attachments : [
                {
                    name : "smtpjs.png",
                    path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
                }]
            }).then(
              message => alert(message)
            );
        }
    })
