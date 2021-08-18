/*
function validation(){

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('user2').value;
    var username = document.getElementById('username1').value;
    var pass = document.getElementById('password1').value;
    var confirmpass = document.getElementById('password2').value;

    if(firstname == ""){
        document.getElementById('firstname').innerHTML =" ** Please fill the first name field";
        return false;
    }
    if(!isNaN(firstname)){
        document.getElementById('firstname').innerHTML =" ** only characters are allowed";
        return false;
    }
    if(lastname ==""){
        document.getElementById('lastname').innerHTML =" ** Please fill the lastname field";
        return false;
    }
    if(!isNaN(lastname)){
        document.getElementById('lastname').innerHTML =" ** only characters are allowed..";
        return false;
    }

    if(username == ""){
        document.getElementById('username').innerHTML =" ** Please fill the username field";
        return false;
    }
    
    if(username.indexOf('@') <= 0 ){
        document.getElementById('username').innerHTML =" ** @ Invalid Position";
        return false;
    }
    
    if((username.charAt(emails.length-4)!='.') && (username.charAt(username.length-3)!='.')){
        document.getElementById('username').innerHTML =" ** . Invalid Position";
        return false;
    }
    
    if((username.length <= 2) || (username.length > 20)) {
        document.getElementById('username').innerHTML =" ** Username lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(username)){
        document.getElementById('username').innerHTML =" ** only characters are allowed";
        return false;
    }
    
   if(pass == ""){
        document.getElementById('password').innerHTML =" ** Please fill the password field";
        return false;
    }
    
    if((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('password').innerHTML =" ** Passwords lenght must be between  5 and 20";
        return false;	
    }
    
    if(pass!=confirmpass){
        document.getElementById('password').innerHTML =" ** Password does not match the confirm password";
        return false;
    }
    
    if(confirmpass == ""){
        document.getElementById('cpassword').innerHTML =" ** Please fill the confirmpassword field";
        return false;
    }
}  
*/
var form = document.getElementById('form');
var firstNameElement = document.getElementById('firstname');
var lastNameElement = document.getElementById('lastname');
var userNameElement = document.getElementById('username');
var passElement = document.getElementById('password1');
var confirmPassElement = document.getElementById('password2');

/*
form.addEventListener('onclick', (event) => {
    event.preventDefault();

    validate();
    const formData = new FormData(this);
       
    //fetch method for api
   / fetch('sign-up-page.html',{
        method: 'post',
        body:formData}).then(function (response){
    return response.text();
    
}).then(function(text){
    console.log(text);
}).catch(function(error){
    console.error(error);
});
});*/
let data = {
    "firstName": this.state.firt,
    "lastName": this.state.las,
    "email": "jhdb@gmail.com",
    "service": "advance",
    "password": "jsbfvjhdbf"
}
const fetchnew = (url,methodnew) =>{
    //cont baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";
    fetch(baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/"+url),{
        method:methodnew ,
        body:formData}.then(function (response){
    return response.text();
    
}).then(function(text){
    console.log(text);
}).catch(function(error){
    console.error(error);
});
}
//define validate function
const validate = (url,method) => {
    
    var error = false;
     var firstname = firstNameElement.value.trim();
     var lastname = lastNameElement.value.trim();
    var username = userNameElement.value.trim();
     var pass = passElement.value.trim();
     var confirmpass = confirmPassElement.value.trim();
     

    //validate username
    if(firstname === ""){
       // alert('first name canrt blank');
       setErrorMsg(firstNameElement,'firstname can not be blank');
      firstNameElement.style.border = "3px solid red";
      error = true;
       firstNameElement.focus();
       
      // return false;

    }else{
        setSuccessMsg(firstname);
    }

    if(lastname === ""){
        setErrorMsg(lastNameElement,'lastname can not be blank');
        lastNameElement.style.border = "3px solid red";
        error = true;
        lastNameElement.focus();
       
    }else{
        setSuccessMsg(lastname);
    }

    if(username === ""){
        setErrorMsg(userNameElement,'username can not be blank');
        userNameElement.style.border = "3px solid red";
        userNameElement.focus();
    }else{
        setSuccessMsg(username);
    }
    if(pass === ""){
        setErrorMsg(passElement,'password can not be blank');
        passElement.style.border = "3px solid red";
        passElement.focus();
    }else{
        setSuccessMsg(password1);
    }

    if(confirmpass === ""){
        setErrorMsg(confirmPassElement,'password can not be blank');
        confirmPassElement.style.border = "3px solid red";
        confirmPassElement.focus();
    }
    else{
        setSuccessMsg(password2);
    }

    if(emailid === ""){
        setErrorMsg(emailElement,'email or phone should not be blank');
    }else{
        setSuccessMsg(email);
    }

    function setErrorMsg(input, errormsgs){
        const formOutline = input.parentElement;
        const small = formOutline.querySelector('small');
        formOutline.className = "form-outline error";
        small.innerText = errormsgs;

    }
   /* function setSuccessMsg(input){
        const formOutline = input.parentElement;
        formOutline.className = "form-outline success";
       
    }*/
    if(!error){
        fetch(url,method)
    }
   
    
}
//api call