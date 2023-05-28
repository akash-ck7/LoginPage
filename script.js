// form1 functions
const formFunction = () =>{

    let userName =document.forms["myLoginForm"]["username"].value;
    let password =document.forms["myLoginForm"]["password"].value;
let errorId=document.getElementById("errorBox");
    if(userName==null || userName ==""){
       errorId.innerHTML ="Enter the UserName";
      return false;
    }else if(password==null || password==""){
        errorId.innerHTML="Enter the Password";
        return false;
    }else{
     alert("Login Successfull !!");

    }

}

const registration =() =>{
    let userName =document.forms["myRegistrationForm"]["username"].value;
    let email =document.forms["myRegistrationForm"]["email"].value;
    let password =document.forms["myRegistrationForm"]["password"].value;
    let re_password =document.forms["myRegistrationForm"]["re-password"].value;
    let errorId=document.getElementById("errorBox");

    if(userName ==null || userName ==""){
        errorId.innerHTML ="Enter the UserName";
      return false;
    }
    else if(email ==null || email ==""){
        errorId.innerHTML ="Enter the Email";
      return false;
    }
    else if(password ==null || password ==""){
        errorId.innerHTML ="enter the password";
      return false;
    }
    else if(re_password ==null || re_password ==""){
        errorId.innerHTML ="enter the password Again";
      return false;
    }
    else if(password != re_password ){
        errorId.innerHTML ="**Password Mismacth**";
      return false;
    }
    else{
        alert("Registration Successfull !! Click Login")
    }



}

