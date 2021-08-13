var form = document.getElementById('form');
var firstNameElement = document.getElementById('firstname');



form.addEventListener('onclick', (event) => {
    event.preventDefault();
    validate();

})
//define validate function
const validate = () => {
     var firstname = firstNameElement.value.trim();
  
    //validate username
    if(firstname === ""){
       // alert('first name canrt blank');
       setErrorMsg(firstNameElement,'firstname can not be blank');
      firstNameElement.style.border = "3px solid red";
       firstNameElement.focus();
      // return false;

    }else{
        setSuccessMsg(firstname);
    }

    

    function setErrorMsg(input, errormsgs){
        const formOutline = input.parentElement;
        const small = formOutline.querySelector('small');
        formOutline.className = "form-outline error";
        small.innerText = errormsgs;

    }
    function setSuccessMsg(input){
        const formOutline = input.parentElement;
        formOutline.className = "form-outline success";
       
    }
    
}
