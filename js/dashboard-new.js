var archieve="";
var color="";
window.addEventListener("DOMContentLoaded", (event) => {
    console.log(localStorage.getItem("token"))
    let data =localStorage.getItem("token");
    
//     if (!data) {
//         window.location.href = "../pages/sign_in.html";
//     }
//    else{
//         window.location.href = "../pages/dashboard.html";
        
        console.log(getNote())
    //}
})

/***********************sidebar**************************/
let flag = true;
function openDrawer() {
    if (flag) {
        flag = false;
        $(".drawer").css("width", "300px");
        $(".myDrawer").css("width", "300px");
        $(".drawer").css("border-radius", "0px 25px 25px 0px");
        $(".drawer-span").css("display", "flex");
        $(".drawer-span").css("margin-left", "40px");
        $(".add-note").css("left", "35%");
        $("#card").css("left", "25%");
    }
    else {
        flag = true;
        $(".drawer").css("width", "48px");
        $(".drawer").css("border-radius", "50%");
        $(".myDrawer").css("width", "65px");
        $(".drawer-span").css("display", "none");
        $(".add-note").css("left", "22%");
        $("#card").css("left", "20%");
    }
}


/**********************Color Palette ********************/
let myPalette =
    `<div class="myPalette">
        <div class="sub-one">
            <div class="color-palette" id="1" style="background-color:#FFFFFF" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="2" style="background-color:#ccff90" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="3" style="background-color:#d7aefb" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
        </div>
        <div class="sub-two">
            <div class="color-palette" id="4" style="background-color:#f28b82" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="5" style="background-color:#a7ffeb" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="6" style="background-color:#fdcfe8" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
        </div>                        
        <div class="sub-three">
            <div class="color-palette" id="7" style="background-color:#fbbc04" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="8" style="background-color:#cbf0f8" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="9" style="background-color:#e6c9a8" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
        </div>                        
        <div class="sub-four">
            <div class="color-palette" id="10" style="background-color:#fff475" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="11" style="background-color:#aecbfa" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
            <div class="color-palette" id="12" style="background-color:#e8eaed" onclick="changeColor(this.id, $(this).parent().parent().parent().parent().parent().attr('id'))"></div>
        </div>
    </div>`

/*******************Add Note Buttons **********************/
let myBtns = `<div class="btns">
 <div class="myBtns"><img src="../assets/bell_icon.png" class="my-Btn-img"></div>
 <div class="myBtns"><img src="../assets/collaborate.svg" onclick="addcollaborator()" class="my-Btn-img"></div>
 <div class="myBtns" id="add-note-palette"><img src="../assets/color.svg" class="my-Btn-img">${myPalette}</div>
 <div class="myBtns"><img src="../assets/add_image.svg" class="my-Btn-img"></div>
 <div class="myBtns"><img src="../assets/archive.svg" onclick="addArchieve()" class="my-Btn-img"></div>
 <div class="myBtns"><img src="../assets/more_icon.svg" class="my-Btn-img"></div>
 </div>
<button onclick="updateNote()">Update</button>`;
//document.getElementById('add-note-btns');

/************************ Add Note*****************************/

function addArchieve(){
    //console.log("hi")
    archieve=true;

}
function addNote() {
    $(".sub-note1").attr('placeholder', 'Title');
    $(".add-note").css('height', '135px');
    $("#card").css('top', '40%');
    $(".sub-note2").css('display', 'block');
    $(".add-note3").css('display', 'flex');
   // document.getElementById("add-note-btns").innerHTML = myBtns;
    // document.getElementById("note").innerHTML = myBtns;
    // document.getElementById("title").innerHTML = myBtns;

}
function closeNote(myid) {
    console.log("added")
    //if (myid === "add-note-btns") {
        $(".sub-note1").attr('placeholder', 'Take a note...');
        $(".add-note").css('height', '45px');
        $("#card").css('top', '28%');
        $(".sub-note2").css('display', 'none');
        $(".add-note3").css('display', 'none');

        let title = document.getElementById("title").value;
        let note = document.getElementById("note").value;
        let noteData = {
            "title": title,
            "description": note,
        
        }
        if(archieve){
            noteData["isArchived"]=archieve
        }
        if(color!=""){
            data["color"]=color
        }
        if (title !== "" || note !== "") {
            saveNote(noteData);
        }
        document.getElementById("title").value = "";
        document.getElementById("note").value = "";
    }
    //  if (myid === "edit-note-btns") {
    //      $(".edit-note").css("display", "none");
    //  }
//}


/*******************collaboration**********/
function addcollaborator() {
    //alert('add');
    // console.log("hii");
    console.log(document.getElementById('myModal').style)
    document.getElementById('myModal').style.display = "block";
    document.getElementById("para-login").innerHTML = localStorage.getItem("username");



}

//-----------------list-------------------//
function searchEmail() {
    //alert("hii");
    //console.log(document.getElementById('email-list').style)  
    document.getElementById('email-list').style.display = "block";
    for (let i = 0; i < data.length; i++) {
        console.log(array[i]);
        if (email.value.length > 2) {
            console.log(document.getElementById('email-list').style)
        }
    }
    //document.getElementById("para-login").innerHTML=localStorage.getItem("username");
}

/**************************Color Palette Function ***************************/
// function changeColor(btnId, myId) {
//     // console.log(btnId);
//     // console.log(myId);

//     var color = $("#" + btnId).css("background-color");
//     $("#" + myId).css("background-color", color);
// }

/****************display data*************/

function printNoteData(data) {
    console.log("display")
    let temp = "";
    let note = document.getElementById("card");
    data['data']['data'].reverse();
    data['data']['data'].forEach(element => {

        if(element.isArchived!=true && element.isDeleted!=true){
        
        console.log(element.isArchived,element.isDeleted)
        let title = element.title;
        let description = element.description;
        temp += `<div class="my-note" id="${element.id}">
            <div class="noteFields" onclick="openNote('${element.title}','${element.description}','${element.id}')">
                <div class="title-div" id="card-title">${title}</div>
                <div class="note-div" id="card-note">${description}</div>
            </div>
        
            <!-------------icons---------------->
            <div class="btns-div" id="image-btns">
                <div class="note-btns"><img src="../assets/bell_icon.png" class="note-img"></img></div>
                <div class="note-btns"><img src="../assets/collaborate.svg" class="note-img"></div>
                <div class="note-btns" id="palette"><img src="../assets/color.svg" class="note-img">
                <div class="myPalette">
                <div class="sub-one" id="change-color">
                    <div class="color-palette" id="1" style="background-color:#FFFFFF" onclick="changeColor(this.id)"></div>
                    <div class="color-palette" id="2" style="background-color:#ccff90" onclick="changeColor(this.id)"></div>
                    <div class="color-palette" id="3" style="background-color:#d7aefb" onclick="changeColor(this.id)"></div>
                </div>
                <div class="sub-two">
                    <div class="color-palette" id="4" style="background-color:#f28b82" onclick="changeColor(this.id)"></div>
                    <div class="color-palette" id="5" style="background-color:#a7ffeb" onclick="changeColor(this.id)"></div>
                    <div class="color-palette" id="6" style="background-color:#fdcfe8" onclick="changeColor(this.id)"></div>
                </div>                        
                <div class="sub-three">
                    <div class="color-palette" id="7" style="background-color:#fbbc04" onclick="changeColor(this.id)"></div>
                    <div class="color-palette" id="8" style="background-color:#cbf0f8" onclick="changeColor(this.id)"></div>
                    <div class="color-palette" id="9" style="background-color:#e6c9a8" onclick="changeColor(this.id)"></div>
                </div>                        
                <div class="sub-four">
                    <div class="color-palette" id="10" style="background-color:#fff475" onclick="changeColor(this.id)"></div>
                    <div class="color-palette" id="11" style="background-color:#aecbfa" onclick="changeColor(this.id)"></div>
                    <div class="color-palette" id="12" style="background-color:#e8eaed" onclick="changeColor(this.id)"></div>
                </div>
            </div> 
                </div> 
                <div class="note-btns" id="OpenImgUpload" onclick="upload()"><img src="../assets/add_image.svg" class="note-img"></div>
                <div class="note-btns"><img src="../assets/archive.svg" class="note-img"></div>
                <div class="note-btns moreBtn"><img src="../assets/more_icon.svg" class="note-img">
              
                    <div class="dropdown">
                        <div class="dropdown-item" id = "trash_${element.id}" onclick="trashNotes(this)">Delete note</div>
                        <div class="dropdown-item">Add label</div>
                        <div class="dropdown-item">Add drawing</div>
                        <div class="dropdown-item">Make a copy</div>
                        <div class="dropdown-item">Show checkboxes</div>
                        <div class="dropdown-item">Copy to Google Docs</div>
                    </div>
                </div>
            </div>
        </div>`;
    }        
    });
    note.innerHTML = temp;
  
}
/************************update note function ***********************/
let selectedItem = notesList[element];

function openNote(title,description,id){

      document.getElementById("title1").value=title;
     document.getElementById("note1").value=description;
 
    // console.log(Title,description,id)
        
console.log(document.getElementById('myModal1').style)
document.getElementById('myModal1').style.display = "block";
//document.getElementById("para-login").innerHTML = localStorage.getItem("username");

      $(".edit-note").css("display", "flex");
      document.getElementById("edit-note-btns").innerHTML =`<div class="btns">
      <div class="myBtns"><img src="../assets/bell_icon.png" class="my-Btn-img"></div>
      <div class="myBtns"><img src="../assets/collaborate.svg" onclick="addcollaborator()" class="my-Btn-img"></div>
      <div class="myBtns" id="add-note-palette"><img src="../assets/color.svg" class="my-Btn-img">${myPalette}</div>
      <div class="myBtns"><img src="../assets/add_image.svg" class="my-Btn-img"></div>
      <div class="myBtns"><img src="../assets/archive.svg" onclick="addArchieve()" class="my-Btn-img"></div>
      <div class="myBtns"><img src="../assets/more_icon.svg" class="my-Btn-img"></div>
      </div>
     <button onclick="updateNote('${id}')">Update</button>`
     
 
 }
 function updateNote(id) {
    
    let data = {


          "title":  document.getElementById("title1").value,
          "description": document.getElementById("note1").value,
          "noteId":id,
      
      }
      update(data)
  }
 //*****************trash notes*******************/

function trashNotes(e){
    console.log(e.id)
    let data ={
       // "type": "module",
       noteIdList:[e.id.split("_")[1]],
        isDeleted:true,
    };
    deleteNote(data);
    //printNoteData();
}

function changeColor(id){
    console.log(document.getElementById(id).style.backgroundColor)
    

    // document.getElementById('bg-color').style
     document.getElementById('bg-color').style.backgroundColor = document.getElementById(id).style.backgroundColor;
     document.getElementById('title').style.backgroundColor = document.getElementById(id).style.backgroundColor;
     document.getElementById('note').style.backgroundColor = document.getElementById(id).style.backgroundColor;
     
   
     // let data={
    //      noteIdList:[id],
    //      color:''
    //  }
  
}