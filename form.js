
    let popup=document.getElementById("popup");
 
 function openpopup(){
    popup.classList.add("open-popup");
 }
 function closepopup(){
    popup.classList.remove("open-popup");
 }
 
 let nav=document.getElementById("navbar");
 function openbar(){
    nav.classList.add("open-navbar");
 }
  
 function closebar(){
    nav.classList.remove("open-navbar");
 }
 const form = document.getElementById("form");
const name = document.getElementById("fullname");
const fname = document.getElementById("fname");
const mname = document.getElementById("mname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();

})
const setError = (element, massage) => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.formerror');

    errorDisplay.innertext = massage;
    inputcontrol.classList.add('formerror');
    inputcontrol.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.formerror');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('formerror');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const nameValue = fullname.value.trim();
    const fnameValue = fname.value.trim();
    const mnameValue = mname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    if (nameValue < 5) {
        setError(fullname, "*Name is  too short");
    }
    else {
        setSuccess(fullname);
    }
    if (fnameValue < 5) {
        setError(fname, "*father name is too short");
    }
    else {
        setSuccess(fname);
    }
    if (mnameValue <5) {
        setError(mname, " *mother name is too short")
    }
    else {
        setSuccess(mname);
    }
    if (emailValue < 5) {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if (passwordValue < 5) {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }

    if (phoneValue < 9) {
        setError(phone, "*please enter 10 digit mobile number");
    }
    else {
        setSuccess(phone);
    }

};
