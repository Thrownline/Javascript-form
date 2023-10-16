function validate() {
    var email = document.getElementById("email");
    var number = document.getElementById("numClasses");
    var numberWarn = document.getElementById("number-warn");
    var name = document.getElementById("name");
    var phone = document.getElementById("tbPhone")
    var movie = document.getElementById("favMovie")
    var numErrors = 0;
    if (number.value > 8) {
        numberWarn.attributes["style"].value = "display:inline;";
        numberWarn.innerHTML = "value " + number.value + " is not valid. Too many classes";
        numErrors += 1;
    }
    else {
        numberWarn.attributes["style"].value = "display:none;";
        numberWarn.innerHTML = "";
    }
    if (numErrors > 0) {
        return false;
    }

    var error = " ";

    error += validatePhoneNumber();

    var phoneNumber = document.getElementById("tbphone");
    var phoneValue = phoneNumber.value;

    var phoneParts =phoneValue.split('-');
    if ((! phoneValue.includes('-')) || (isNaN(phoneParts[0]) && isNaN(phoneParts[1])  && isNaN(phoneParts[2]))){
        error += "Invalid phone number"
    }


    if (isNaN(phone.value) || phone.value == "") {
        error += "<div> Invalid Number</div>"
    }

    if (error != " ") {
        alert("Invlaid input, please correct any errors")
        errorElement.innerHTML = error;
        return false;
    }

var emailAddr = email;
var emailValue= emailAddr.value;
if(! emailValue.includes('@') || emailValue == "" ){
    error +=  "Invalid email address"
}

var fName = name;
var nameValue =fName.value;
if (nameValue == "") {
    error += "Enter a name"
}

var favMovie = movie;
var movieValue = favMovie.value
if (movieValue == ""){
    error += "Enter a movie title"
}



}
function validatePhoneNumber() {
    var errorText = " ";
    var phoneNumber = document.getElementById('tbPhone')
    var phoneValue = phoneNumber.value
    if (!phoneValue > 9 || phoneValue == null || phoneValue == "number") {
        errorText += "<div> Invalid Phone Number </div>"
    }
    return
}