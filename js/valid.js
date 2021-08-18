// import {registration} from '../service/sevice'
const firstName= document.getElementById('firstName');
const lastName= document.getElementById('lastName');
const username= document.getElementById('username');
const password= document.getElementById('password');
const password2= document.getElementById('password2');
var error = false;
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";



function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-outline error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    error= true;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-outline success';
    error= false;
}
function checkRequired(inputArr){
     inputArr.forEach(input => {
        if(input.value.trim() === ''){
              showError(input,`${input.id} required`);
        }
        else{
             showSuccess(input);
        }
        
    });
}

const validate =()=>{
    console.log("inside ")
  checkRequired([firstName,lastName,username,password,password2]);
  if(true){
    let data = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "email":username.value,
        "service": "advance",
        "password": password.value
    }
    registration(data)
  }
 
}

const signvalidate =()=>{
    console.log("inside ")
  checkRequired([firstName,lastName,username,password,password2]);
  if(true){
//    data dii
    sign(data)
  }
 
}


 function registration(data){

    servicereq('user/userSignUp','post',data)
 
 }
 
 function servicereq (url,meth,data){
   fetch(baseUrl+url, {
   method:meth,
   body: data
   })
   .then(result => {
      return console.log('Success:', result);
   })
   .catch(error => {
     console.error('Error:', error);
   });
 }
