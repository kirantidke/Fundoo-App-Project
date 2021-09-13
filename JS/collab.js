const firstName= document.getElementById('default-email');
const lastName= document.getElementById('collab');
var error = false;
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";



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

//---------------------collaboration-----------------------//
const collaborate =(e)=>{
    console.log("inside ")
 // checkRequired([firstName,lastName,username,password,password2]);
  if(true){
    let data = {
        searchWord: e.target.value,
          
      }
    collab(data)
  }
 
}
//----------------------------------------//
 function collab(data){

    servicereq('user/searchUserList','post',data)
 
 }


 console.log(email);

//  window.addEventListener('DOMContentLoaded', (event) => {
//      getEmail();
//    });

//------------------------get email-----------------------//
function getEmail() {
    let email = localStorage.getItem('username');
    console.log(email);
    var nHTML = '';
    nHTML += email;
    document.getElementById("para-login").innerText = email; 
    //searchMail();
  }

  //---------------------search mail--------------------//

  var email = document.getElementById("collab-search");
  var email1 = document.getElementById("email-list");

  const searchMail =(e)=>{
    //alert("hii");
    console.log("search")
 
  if(true){
    let data = {
        searchWord: e.target.value
          
      }
    search(data);
  }
 
}
//----------------------color pallet-------------------------//
// var color = document.getElementById("title");
// var color = document.getElementById("note");
// var color = document.getElementById("card");

// const changeColor = () =>{
//   console.log("color-pallet")
//   if(true){
//     let data = {
//       title:,
//       description: ,
//       color:#jfkdj,
//       isArchieved:true;
//     }
//   }
// } 


//-----------------------------------------------------------//
function search(data){

  servicereq('user/searchUserList','get',data)

}
//----------------------delete notes---------------------//
// var note=document.getElementById();
// const trashNote=(id)=>{
//   let data={
//     "type":"module"
//     n          `oteIdList:[id],
//     isDeleted:true,

//   };
//   deleteNote(data)
// }
// function deleteNote(data){
//   servicereq('notes/trashNotes','post',data)
// }

//------------------------service-----------------------//
  function servicereq (url,meth,data){
    console.log(data);
    fetch(baseUrl+url, {
    method:meth,
    body: JSON.stringify(data),
             mode: 'cors',
             headers: {
               'Content-Type': 'application/json',
           }
           
    })
    .then( response => response.json() )
    .then( data => {
    console.log(data)
    //if(page=="signin.html"){
    //localStorage.setItem('token', data.id);
    // window.location.href = 'dashboard.html';
    //}
  })
  
  console.log(data)
    .catch(error => {
      console.error('Error:', error);
    });
  }