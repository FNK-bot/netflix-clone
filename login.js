function validateForm() {
    let email=document.forms["login-form"]["email"].value;
    let pass=document.forms["login-form"]["password"].value;
    if(email == ""){
        alert("fill email or phone number");
        
        return false;       
    }
    else if(pass == ""){
        alert("fEnter Password");
        return false;
    }
    else{
        alert("Welcome "+email)
    }
}