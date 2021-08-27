var toggle  = document.getElementById("toggle");
var content = document.getElementById("content");

toggle.addEventListener("click", function() {
  content.style.display = (content.dataset.toggled ^= 1) ? "block" : "none";
});

// sidebar open and close section

const sidebar = document.getElementById('sidebar');
const trigger = document.getElementById('trigger');

trigger.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar--open');
  
  trigger.querySelectorAll('i').forEach(icon => {
    icon.classList.toggle('fa-menu');
    icon.classList.toggle('fa-times');
  });  
});
