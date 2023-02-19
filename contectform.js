let popup=document.getElementById("navbar");
    function openbar(){
       popup.classList.add("open-navbar");
    
    }
     
    function closebar(){
       popup.classList.remove("open-navbar");
    } 
  function myFunction() {
    alert("your query is submited  contect soon !");
  }
 
  let form = document.getElementById("form");
let fname = document.getElementById("fname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

})
let setError = (element, massage) => {
    let inputcontrol = element.parentElement;
    let errorDisplay = inputcontrol.querySelector('.formerror');

    errorDisplay.innertext = massage;
    inputcontrol.classList.add('formerror');
    inputcontrol.classList.remove('success')
}
let setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.formerror');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('formerror');
};
let isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    let nameValue = fname.value.trim();
    let emailValue = email.value.trim();
    let phoneValue = phone.value.trim();
    if (nameValue < 5) {
        setError(fname, "*Name is  too short");
    }
    else {
        setSuccess(fname);
    }
    if (emailValue < 5) {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if (phoneValue < 9) {
        setError(phone, "*please enter 10 digit mobile number");
    }
    else {
        setSuccess(phone);
    }

};
