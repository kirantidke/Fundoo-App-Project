/*password-toggle*/
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
    
/*toggle sidebar*/
    
    $( document ).ready(function() {
        let sidebar = document.querySelector(".sidebar");
        let closeBtn = document.querySelector("#btn");
        
        closeBtn.addEventListener("click", ()=>{
          sidebar.classList.toggle("open");
        });
    } );
    
    
    /****toggle text field***/
    
    
    function openNotes(){
      // $('#form').addClass('form-open');
          document.querySelector("#note-title").style.display = "block";
          document.querySelector("#form-buttons").style.display = "block";
    }

    
    function closeNotes(){
      document.querySelector("#note-title").style.display = "none";
      document.querySelector("#form-buttons").style.display = "none";
      document.getElementById('note-text').value='';
      document.getElementById('note-title').value='';
    }
    
   /* 
    const placeholder = document.querySelector("#placeholder");
    const notesField = document.querySelector("#notes");
    const notes = JSON.parse(localStorage.getItem('notes')) || []; 
    function displayNotes() {
      const hasNotes = notes.length > 0;
      placeholder.style.display = hasNotes ? 'none' : 'flex';
       notesField.innerHTML = notes.map(note => `
          <div class="note">
            <div class="note-title">${note.title}</div>
            <div class="note-text">${note.description}</div>
            <div class="toolbar-container">
              <div class="toolbar">
                hello
              </div>
            </div>
          </div>
       `).join("");
    displayNotes();
    
    }    */