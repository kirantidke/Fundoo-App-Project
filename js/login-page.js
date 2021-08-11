
function validation(){

    var username = document.getElementById('username1').value;
    var pass = document.getElementById('password').value;
    

    if(username == ""){
        document.getElementById('username').innerHTML ="** Please fill this field";
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
   
   if(pass == ""){
        document.getElementById('password').innerHTML =" ** Please fill the password field";
        return false;
    }
    if((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('password').innerHTML =" ** Passwords lenght must be between  5 and 20";
        return false;	
    }
    
    
}