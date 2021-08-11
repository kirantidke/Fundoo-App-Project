   
  /*  
    form1.addEventListener("change", validation); 
    user2.addEventListener("change", validation); 
    form3.addEventListener("change", validation); 
*/
function validation(){

    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    

    if(username == ""){
        document.getElementById('username').innerHTML =" ** Please fill the email id field";
        return false;
    }
    if(username.indexOf('@') <= 0 ){
        document.getElementById('username').innerHTML =" ** @ Invalid Position";
        return false;
    }
    
    if((username.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
        document.getElementById('username').innerHTML =" ** . Invalid Position";
        return false;
    }
    /*
    if((user.length <= 2) || (user.length > 20)) {
        document.getElementById('username').innerHTML =" ** Username lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML =" ** only characters are allowed";
        return false;
    }
    */
   if(pass == ""){
        document.getElementById('password').innerHTML =" ** Please fill the password field";
        return false;
    }
    if((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('password').innerHTML =" ** Passwords lenght must be between  5 and 20";
        return false;	
    }
    
    
}