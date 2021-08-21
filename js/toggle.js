
$(document).on('change', '.password-toggle', function(e) {
// const passwordToggle = document.querySelector('.password-toggle')

// passwordToggle.addEventListener('change', function() {
  
  const password = document.querySelector('.showPassword')
  
  if (password.type === 'password') {
    password.type = 'text'
  } else {
    password.type = 'password'
  }
  
  
})



/***toggle sidebar**/

$( document ).ready(function() {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    
    closeBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("open");
    });
} );


function openNotes(){
  // $('#form').addClass('form-open');
      document.querySelector("#note-title").style.display = "block";
      document.querySelector("#form-buttons").style.display = "block";
}



  

