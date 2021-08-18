/*function toggler(){
    $('body').toggleClass('side-expanded');
}

$(".sidebar").mouseover(function(){
    if($('body').hasClass('side-expanded')){
        //do nothing
    }
    else{
        $('body').addClass('side-hovered');
    }
});
$(".sidebar").mouseout(function(){
   if($('body').hasClass('side-expanded')){
       //do nothing
   }
   else{
    $('body').removeClass('side-hovered');
   }
});*/


function openSide() {

    document.getElementById("Sidebar11").style.width = "210px";

    document.getElementById("main").style.marginLeft = "210px";
    
    document.getElementById("Sidebar11").style.background = "#1a1a1a";
    
  }

  function closeSide() {

    document.getElementById("Sidebar11").style.width = "0";

    document.getElementById("main").style.marginLeft = "0";
    
    document.getElementById("Sidebar11").style.background = "gray";
  }


function openNotifications() {
  var x =
  document.getElementById("nottifications");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


    var cip = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
  $('video', this).get(0).play(); 
}

function hideVideo(e) {
  $('video', this).get(0).pause(); 
}

function openProfile() {
  var x =
  document.getElementById("profile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function openProfile() {
  var x =
  document.getElementById("profile");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function goBack() {
window.history.back()
}

function myFunction() {
var x = document.getElementById("snackbar");
x.className = "show";
setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}