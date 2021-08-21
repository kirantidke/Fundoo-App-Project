const description = document.getElementById('note-text');
const title = document.getElementById('note-title');
var error = false;
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/";

//function showError(input, message){
    //const formControl = input.parentElement;
    //formControl.className = 'form-outline error';
    //const small = formControl.querySelector('small');
    //small.innerText = message;
   // error= true;

//}

function showSuccess(input){
    const formControl = input.parentElement;
   // formControl.className = 'form-outline success';
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

const addNotes = () => {
  console.log("inside ")
  if(true){
    let data = {                         //title &description
        "title": title.value,
        "description": description.value
      }
      notes(data)
  }
    
    // notesreq('notes/addNotes','post', data)
    //servicereq('notes/addNotes','post', data)
  }
  function notes(data){

    servicereq('notes/addNotes','post',data)
    
 
 }

 //service
 function servicereq (url,meth,data){
    console.log(data);
    fetch(baseUrl+url, {
    method:meth,
    headers: {
     'Content-Type': 'application/json',
     'Authorization': localStorage.getItem('token')
   },
    body: JSON.stringify(data),
             mode: 'cors',
          //    headers: {
          //      'Content-Type': 'application/json',
          //  }
           
    })
    .then( response => response.json() )
    .then( data => {
      console.log(data)
     // localStorage.setItem('token', data.id);
    } )
 
 
    .catch(error => {
      console.error('Error:', error);
    });
}