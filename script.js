const fname = document.getElementById("firstname");
const fnameError = document.getElementById("fnerror");

// fname.addEventListener("change", function() {
//     if (!fname.validity.valid) {
//         fnameError.style.display = "block";
//         fname.style.border = "red solid 1px";
//     }
// });


const lname = document.getElementById("lastname");
const lnameError = document.getElementById("lnerror");

// lname.addEventListener("change", function() {
//     if (!lname.validity.valid) {
//         lnameError.style.display = "block";
//         lname.style.border = "red solid 1px";
//     }
// });


const email = document.getElementById("email");
const emailFormatError = document.getElementById("email-error");
const emailError = document.getElementById("mail-error");

// email.addEventListener("change", function() {
//     if (!email.validity.valid) {
//         emailError.style.display = "block";
//         email.style.border = "red solid 1px";
//     } else if (email.validity.typeMismatch) {
//         emailFormatError.style.display = "block";
//         email.style.border = "red solid 1px";
//     }
// });

const enquiry = document.getElementById("enquiry");
const enquiryError = document.getElementById("query-error");


const message = document.getElementById("message");
const messageError = document.getElementById("message-error");

// message.addEventListener("change", function() {
//     if (!message.validity.valid) {
//         messageError.style.display = "block";
//         message.style.border = "red solid 1px";
//     }
// });


const consent = document.getElementById("consent");
const consentError = document.getElementById("consent-error");

const popUp = document.getElementById("pop-up");

let isValid = true;

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    errorCheck();

    if (isValid == true) {
        popUp.style.display = "block";
        popUp.scrollIntoView();

        form.reset();

        setTimeout(() => {
        popUp.style.display = "none";
        }, 5000)
    }

});


function errorCheck() {

    if (!fname.validity.valid) {
        fnameError.style.display = "block";
        fname.style.border = "red solid 1px";
        isValid = false;
    }   

    if (!lname.validity.valid) {
        lnameError.style.display = "block";
        lname.style.border = "red solid 1px";
        isValid = false;
    }

    if (!email.validity.valid) {
        emailError.style.display = "block";
        email.style.border = "red solid 1px";
        isValid = false;
    }
    
    if (email.validity.typeMismatch) {
        emailError.style.display = "";
        emailFormatError.style.display = "block";
        email.style.border = "red solid 1px";
        isValid = false;
    }

    if (!enquiry.validity.valid) {
        enquiryError.style.display = "block";
        isValid = false;
    } else if (enquiry.validity.valid) {
        enquiryError.style.display = "";
    }

    if (!message.validity.valid) {
        messageError.style.display = "block";
        message.style.border = "red solid 1px";
        isValid = false;
    }

    if (!consent.validity.valid) {
        consentError.style.display = "block";
        isValid = false;
    } else if (consent.validity.valid) {
        consentError.style.display = "";
    }

}