//! FOR ADDMISSION FORM
function validateAdmissionForm() {
    var isValid = true;

    document.getElementById("admissionYearError").innerHTML = "";
    document.getElementById("boardError").innerHTML = "";
    document.getElementById("standardError").innerHTML = "";
    document.getElementById("mobileNumberError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";

    var admissionYear = document.getElementById("admissionYear").value.trim();
    if (admissionYear === "") {
        document.getElementById("admissionYearError").innerHTML = "Please select the admission year.";
        isValid = false;
    }

    var board = document.getElementById("board").value.trim();
    if (board === "") {
        document.getElementById("boardError").innerHTML = "Please select the board.";
        isValid = false;
    }

    var standard = document.getElementById("standard").value.trim();
    if (standard === "") {
        document.getElementById("standardError").innerHTML = "Please select the standard.";
        isValid = false;
    }

    var mobileNumber = document.getElementById("mobileNumber").value.trim();
    var mobilePattern = /^\d{10}$/; 
    if (mobileNumber === "") {
        document.getElementById("mobileNumberError").innerHTML = "Please enter your mobile number.";
        isValid = false;
    } else if (!mobilePattern.test(mobileNumber)) {
        document.getElementById("mobileNumberError").innerHTML = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    var email = document.getElementById("email").value.trim();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    return isValid;
}

//!FOR STUDENT INFORMATION
function validateStudentInfoForm() {
    var isValid = true;

    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("dobError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("parentNameError").innerHTML = "";
    document.getElementById("parentEmailError").innerHTML = "";
    document.getElementById("parentPhoneError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("stateError").innerHTML = "";
    document.getElementById("cityError").innerHTML = "";

    var firstName = document.getElementById("firstName").value;
    if ((firstName === ""|| !isNaN(firstName) )) {
        document.getElementById("firstNameError").innerHTML = "Please enter your first name.";
        isValid = false;
    }

    var lastName = document.getElementById("lastName").value;
    if ((lastName === "" || !isNaN(lastName))) {
        document.getElementById("lastNameError").innerHTML = "Please enter your last name.";
        isValid = false;
    }
    
    var dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("dobError").innerHTML = "Please select your date of birth.";
        isValid = false;
    }

    var gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("genderError").innerHTML = "Please select your gender.";
        isValid = false;
    }

    var parentName = document.getElementById("parentName").value;
    if ((parentName === "") || !isNaN(parentName)) {
        document.getElementById("parentNameError").innerHTML = "Please enter the parent/guardian name.";
        isValid = false;
    }
   

    var parentEmail = document.getElementById("parentEmail").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
    if (parentEmail === "") {
        document.getElementById("parentEmailError").innerHTML = "Please enter the parent/guardian email.";
        isValid = false;
    } else if (!emailPattern.test(parentEmail)) {
        document.getElementById("parentEmailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    var parentPhone = document.getElementById("parentPhone").value;
    if (parentPhone === "" || isNaN(parentPhone) || parentPhone.length !== 10) {
        document.getElementById("parentPhoneError").innerHTML = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    var address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("addressError").innerHTML = "Please enter your address.";
        isValid = false;
    }

    var state = document.getElementById("state").value;
    if (state === "") {
        document.getElementById("stateError").innerHTML = "Please select your state.";
        isValid = false;
    }

    var city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("cityError").innerHTML = "Please enter your city.";
        isValid = false;
    }

    if (isValid) {
        alert("Form successfully submitted!");
      
    } else {
        alert("Please fill the form correctly.");
    }
}

//!FOR CONTACT US
function validateContactForm() {
    var isValid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailaddError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    var name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        isValid = false;
    }
    if (!isNaN(name)) {
        document.getElementById("name").innerHTML = "Please enter characters not number.";
        isValid = false;
    }

    var email = document.getElementById("email").value.trim();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        document.getElementById("emailaddError").innerHTML = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailaddError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    var message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Please enter your message.";
        isValid = false;
    }

    return isValid;
}