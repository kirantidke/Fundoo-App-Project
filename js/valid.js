// import {registration} from '../service/sevice'
const firstName= document.getElementById('firstName');
const lastName= document.getElementById('lastName');
const username= document.getElementById('username');
const password= document.getElementById('password');
const password2= document.getElementById('password2');
var error = false;
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

const head = {
  headers: {
          // 'Accept': 'application/json',charset=UTF-8',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
}


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
//reg
const validate =()=>{
    console.log("inside ")
 // checkRequired([firstName,lastName,username,password,password2]);
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

//sign in function
const signvalidate =()=>{
  console.log("inside ")
  checkRequired([username,password]);
  if(true){
//    data dii
let data = {
  
  "email":username.value,
  "password": password.value,
  //"service": "advance",
 
  }
    sign(data)
  }
 
}
//forgot pass
const forgotvalidate =()=>{
  console.log("inside ")
checkRequired([username]);
if(true){
  let data = {
     // "firstName": firstName.value,
     // "lastName": lastName.value,
      "email":username.value,
      "service": "advance",
      //"password": password.value
  }
  forgot(data)
}

}
//reset
const resetvalidate =()=>{
  console.log("inside ")
  checkRequired([password]);
  if(true){
    let data = {
     // "firstName": firstName.value,
     // "lastName": lastName.value,
     // "email":username.value,
     // "service": "advance",
      "password": password.value
      //newpassword:this.state.password,token:requiredToken

  }
  reset(data)
}

}



//reg
 function registration(data){

    servicereq('user/userSignUp','post',data)
 
 }
 //sign in
 function sign(data){

  servicereq('user/login','post',data)

}
//forgot service

function forgot(data){

  servicereq('user/reset','post',data)

}

//reset
//forgot service

function reset(data){

  servicereq('user/reset-password','post',data)

}

// const getnote =()=>{
//   servicereq('notes/getNotesList', 'get', {})
// }


//service
 function servicereq (url,meth,data){
   console.log(data);
   fetch(baseUrl+url, {
   method:meth,
  //  headers: {
  //   'Content-Type': 'application/json',
  //   'Authorization': localStorage.getItem('token')
  // },
   body: JSON.stringify(data),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
          }
          
   })
   .then( response => response.json() )
   .then( data => {
     console.log(data)
     //if(page ==.html)
     localStorage.setItem('token', data.id);
   } )


   .catch(error => {
     console.error('Error:', error);
   });

  //  getnote();
  //  return console.log('Success:', result);
   
 }

//  const addNotes = () => {
//   const description = document.getElementById('note-text').value;
//   const title = document.getElementById('note-title').value;
  
//   //validatenotes() check([description])
//   if(description !== '' && title !== ''){
//     let data = {                         //title &description
//       "title": title,
//       "description": description
//     }
//     // notesreq('notes/addNotes','post', data)
//     servicereq('notes/addNotes','post', data)
//   }
//}