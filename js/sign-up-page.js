   
  /*  
    form1.addEventListener("change", validation); 
    user2.addEventListener("change", validation); 
    form3.addEventListener("change", validation); 
*/
function validation(){

    var firstname = document.getElementById('user1').value;
    var lastname = document.getElementById('user2').value;
    var username = document.getElementById('username1').value;
    var pass = document.getElementById('password1').value;
    var confirmpass = document.getElementById('password').value;

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
        document.getElementById('password').innerHTML =" ** Please fill the confirmpassword field";
        return false;
    }
    
}