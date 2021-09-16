var archieve = "";
var color = "";
var searchUserList=[];
var colabData=[];
var displayCollab=[];
var searchUserList1=[];

window.addEventListener("DOMContentLoaded", (event) => {
    console.log(localStorage.getItem("token"))
    // let data = localStorage.getItem("token");
    getNote();
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

function showPassword() {
    var x = document.getElementById("password");
    var y = document.getElementById("confirm");
    if (x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}
function showPass() {
    let z = document.getElementById("password");
    if (z.type === "password") {
        z.type = "text";
    } else {
        z.type = "password";
    }
}

/************************ Add Note*****************************/

function addArchieve() {

    archieve = true;
    
}
function addNote() {
    $(".sub-note1").attr('placeholder', 'Title');
    $(".add-note").css('height', '135px');
    $("#card").css('top', '40%');
    $(".sub-note2").css('display', 'block');
    $(".add-note3").css('display', 'flex');
    //$(".add-colab").css('display', 'none');
  

}
function closeNote(myid) {
    console.log("added")
    //if (myid === "add-note-btns") {
    $(".sub-note1").attr('placeholder', 'Take a note...');
    $(".add-note").css('height', '50px');
    $("#card").css('top', '28%');
    $(".sub-note2").css('display', 'none');
    $(".add-note3").css('display', 'none');
    $(".add-note31").css('display', 'none');
   
    let myColor = document.querySelector("#title");
    myColor.style.backgroundColor = "white"; 
    $(".circle").css('display', 'none');   

    let title = document.getElementById("title").value;
    let note = document.getElementById("note").value;
    let noteData = {
        "title": title,
        "description": note,

    }
    if (archieve) {
        noteData["isArchived"] = archieve
    }
    if (color != "") {
        noteData["color"] = color
    }
    if(colabData.length>0){
        noteData["collaberators"]=[JSON.stringify(colabData)]
    }
    
    if (title !== "" || note !== "") {
         saveNote(noteData);
        console.log(noteData)
    }
    document.getElementById("title").value = "";
    document.getElementById("note").value = "";
    colabData=[];
    // document.getElementById("add-note-btns").value = "";
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
function addcollaboratorDisplay() {
    //alert('add');
    // console.log("hii");
    console.log(document.getElementById('myModal-colab').style)
    document.getElementById('myModal-colab').style.display = "block";
    document.getElementById("para-login1").innerHTML = localStorage.getItem("username");



}



/****************display data*************/

function printNoteData(data) {
    console.log("display")
    // let temp = "";
    // let note = document.getElementById("card");
    // data['data']['data'].reverse();
    // data['data']['data'].forEach(element => {

    //     if(element.isArchived!=true && element.isDeleted!=true){

    //     console.log(element.isArchived,element.isDeleted)
    //     let title = element.title;
    //     let description = element.description;
    //     temp += `<div class="my-note" id="${element.id}">
    //         <div class="noteFields" onclick="openNote('${element.title}','${element.description}','${element.id}')">
    //             <div class="title-div" id="card-title">${title}</div>
    //             <div class="note-div" id="card-note">${description}</div>
    //         </div>

    //         <!-------------icons---------------->
    //         <div class="btns-div" id="image-btns">
    //             <div class="note-btns"><img src="../assets/bell_icon.png" class="note-img"></img></div>
    //             <div class="note-btns"><img src="../assets/collaborate.svg" class="note-img"></div>
    //             <div class="note-btns" id="palette"><img src="../assets/color.svg" class="note-img">

    //             <div class="myPalette">
    //             <div class="sub-one" id="change-color">
    //                 <div class="color-palette" id="1" style="background-color:#FFFFFF" onclick="changeColor(this.id)"></div>
    //                 <div class="color-palette" id="2" style="background-color:#ccff90" onclick="changeColor(this.id)"></div>
    //                 <div class="color-palette" id="3" style="background-color:#d7aefb" onclick="changeColor(this.id)"></div>
    //             </div>
    //             <div class="sub-two">
    //                 <div class="color-palette" id="4" style="background-color:#f28b82" onclick="changeColor(this.id)"></div>
    //                 <div class="color-palette" id="5" style="background-color:#a7ffeb" onclick="changeColor(this.id)"></div>
    //                 <div class="color-palette" id="6" style="background-color:#fdcfe8" onclick="changeColor(this.id)"></div>
    //             </div>                        
    //             <div class="sub-three">
    //                 <div class="color-palette" id="7" style="background-color:#fbbc04" onclick="changeColor(this.id)"></div>
    //                 <div class="color-palette" id="8" style="background-color:#cbf0f8" onclick="changeColor(this.id)"></div>
    //                 <div class="color-palette" id="9" style="background-color:#e6c9a8" onclick="changeColor(this.id)"></div>
    //             </div>                        
    //             <div class="sub-four">
    //                 <div class="color-palette" id="10" style="background-color:#fff475" onclick="changeColor(this.id)"></div>
    //                 <div class="color-palette" id="11" style="background-color:#aecbfa" onclick="changeColor(this.id)"></div>
    //                 <div class="color-palette" id="12" style="background-color:#e8eaed" onclick="changeColor(this.id)"></div>
    //             </div>
    //         </div> 
    //             </div> 
    //             <div class="note-btns" id="OpenImgUpload" onclick="upload()"><img src="../assets/add_image.svg" class="note-img"></div>
    //             <div class="note-btns"><img src="../assets/archive.svg" class="note-img"></div>
    //             <div class="note-btns moreBtn"><img src="../assets/more_icon.svg" class="note-img">

    //                 <div class="dropdown">
    //                     <div class="dropdown-item" id = "trash_${element.id}" onclick="trashNotes(this)">Delete note</div>
    //                     <div class="dropdown-item">Add label</div>
    //                     <div class="dropdown-item">Add drawing</div>
    //                     <div class="dropdown-item">Make a copy</div>
    //                     <div class="dropdown-item">Show checkboxes</div>
    //                     <div class="dropdown-item">Copy to Google Docs</div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>`;
    // }        
    // });
    // note.innerHTML = temp;


}
/***********************note archieve and trash*****************/
function icons() {
    let getIcons = ""
    // getIcons+= `<div class="btns-div" id="image-btns">
    //        <div class="note-btns"><img src="../assets/bell_icon.png" class="note-img"></img></div>
    //         <div class="note-btns"><img src="../assets/collaborate.svg" class="note-img"></div>
    //         <div class="note-btns" id="palette"><img src="../assets/color.svg" class="note-img">

    //         <div class="myPalette">
    //         <div class="sub-one" id="change-color">
    //             <div class="color-palette" id="1" style="background-color:#FFFFFF" onclick="changeColor(this.id)"></div>
    //             <div class="color-palette" id="2" style="background-color:#ccff90" onclick="changeColor(this.id)"></div>
    //             <div class="color-palette" id="3" style="background-color:#d7aefb" onclick="changeColor(this.id)"></div>
    //         </div>
    //         <div class="sub-two">
    //             <div class="color-palette" id="4" style="background-color:#f28b82" onclick="changeColor(this.id)"></div>
    //             <div class="color-palette" id="5" style="background-color:#a7ffeb" onclick="changeColor(this.id)"></div>
    //             <div class="color-palette" id="6" style="background-color:#fdcfe8" onclick="changeColor(this.id)"></div>
    //         </div>                        
    //         <div class="sub-three">
    //             <div class="color-palette" id="7" style="background-color:#fbbc04" onclick="changeColor(this.id)"></div>
    //             <div class="color-palette" id="8" style="background-color:#cbf0f8" onclick="changeColor(this.id)"></div>
    //             <div class="color-palette" id="9" style="background-color:#e6c9a8" onclick="changeColor(this.id)"></div>
    //         </div>                        
    //         <div class="sub-four">
    //             <div class="color-palette" id="10" style="background-color:#fff475" onclick="changeColor(this.id)"></div>
    //             <div class="color-palette" id="11" style="background-color:#aecbfa" onclick="changeColor(this.id)"></div>
    //             <div class="color-palette" id="12" style="background-color:#e8eaed" onclick="changeColor(this.id)"></div>
    //         </div>
    //     </div> 
    //         </div> 
    //         <div class="note-btns" id="OpenImgUpload" onclick="upload()"><img src="../assets/add_image.svg" class="note-img"></div>
    //         <div class="note-btns"><img src="../assets/archive.svg" class="note-img"></div>
    //         <div class="note-btns moreBtn"><img src="../assets/more_icon.svg" class="note-img">

    //             <div class="dropdown">
    //                 <div class="dropdown-item" id = "trash_${element.id}" onclick="trashNotes(this)">Delete note</div>
    //                 <div class="dropdown-item">Add label</div>
    //                 <div class="dropdown-item">Add drawing</div>
    //                 <div class="dropdown-item">Make a copy</div>
    //                 <div class="dropdown-item">Show checkboxes</div>
    //                 <div class="dropdown-item">Copy to Google Docs</div>
    //             </div>
    //         </div>
    //     </div>
    // </div>`;
    let trashIcons = ``
    let archieveIcons = ``

    if (noteString === "trashnotes") {
        return trashIcons;
    }
    else if (noteString === "archievenotes") {
        return archieveIcons;
    }
    else {
        return getIcons;
    }

}

function commonNotes(data, noteString) {
    let temp = "";
    let note = document.getElementById("card");
    //data['data']['data'].reverse();
    var style= "background-color: red";
    data.forEach(element => {

        if (element.isArchived != true && element.isDeleted != true) {

            console.log(element.isArchived, element.isDeleted)
            let title = element.title;
            let description = element.description;
            //let collaborators = element.collaborators;
            let temp1="";
            //let collabora
            for(let j=0;j<element.collaborators.length;j++){
                temp1+=`<div class="circle1" id="circle-colab">`+element.collaborators[j].email.charAt(0)+`</div>`
            }

            temp += `<div class="my-note" id="${element.id}" >
            <div class="noteFields" onclick="openNote('${element.title}','${element.description}','${element.id}')" style="background-color:${element.color}">
                <div class="title-div" id="card-title">${title}</div>
                <div class="note-div" id="card-note">${description}</div>
                <div class="addcolab3" id="addcolab3">
                </div>`

                if(element.collaborators.length>0){
               temp+= `<div>`+temp1+`</div>`
                }
            temp+=`</div>
            
        
            <!-------------icons---------------->`

            temp += //icons(data,noteString)//
                `<div class="btns-div" id="image-btns">
                <div class="note-btns"><img src="../assets/bell_icon.png" class="note-img"></img></div>
                <div class="note-btns"><img src="../assets/collaborate.svg" onclick="addcollaboratorDisplay()" class="note-img"></div>
                <div class="note-btns" id="palette"><img src="../assets/color.svg" class="note-img">
                
                <div class="myPalette1">
                <div class="sub-one1" id="change-color">
                    <div class="color-palette" id="1" style="background-color:#FFFFFF" onclick="changeColor1('#FFFFFF','${element.id}')"></div>
                    <div class="color-palette" id="2" style="background-color:#ccff90" onclick="changeColor1('#ccff90','${element.id}')"></div>
                    <div class="color-palette" id="3" style="background-color:#d7aefb" onclick="changeColor1('#d7aefb','${element.id}')"></div>
                </div>
                <div class="sub-two">
                    <div class="color-palette" id="4" style="background-color:#f28b82" onclick="changeColor1('#f28b82','${element.id}')"></div>
                    <div class="color-palette" id="5" style="background-color:#a7ffeb" onclick="changeColor1('#a7ffeb','${element.id}')"></div>
                    <div class="color-palette" id="6" style="background-color:#fdcfe8" onclick="changeColor1('#fdcfe8','${element.id}')"></div>
                </div>                        
                <div class="sub-three">
                    <div class="color-palette" id="7" style="background-color:#fbbc04" onclick="changeColor1('#fbbc04','${element.id}')"></div>
                    <div class="color-palette" id="8" style="background-color:#cbf0f8" onclick="changeColor1('#cbf0f8','${element.id}')"></div>
                    <div class="color-palette" id="9" style="background-color:#e6c9a8" onclick="changeColor1('#e6c9a8','${element.id}')"></div>
                </div>                        
                <div class="sub-four">
                    <div class="color-palette" id="10" style="background-color:#fff475" onclick="changeColor1('#fff475','${element.id}')"></div>
                    <div class="color-palette" id="11" style="background-color:#aecbfa" onclick="changeColor1('#aecbfa','${element.id}')"></div>
                    <div class="color-palette" id="12" style="background-color:#e8eaed" onclick="changeColor1('#e8eaed','${element.id}')"></div>
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

function openNote(title, description, id) {

    document.getElementById("title1").value = title;
    document.getElementById("note1").value = description;

    // console.log(Title,description,id)

    console.log(document.getElementById('myModal1').style)
    document.getElementById('myModal1').style.display = "block";
    //document.getElementById("para-login").innerHTML = localStorage.getItem("username");

    $(".edit-note").css("display", "flex");

    document.getElementById("edit-note-btns1").innerHTML = 
    `<div class="btns">
      <div class="myBtns"><img src="../assets/bell_icon.png" class="my-Btn-img"></div>
      <div class="myBtns"><img src="../assets/collaborate.svg" onclick="addcollaboratorDisplay()" class="my-Btn-img"></div>
      <div class="myBtns" id="palette1"><img src="../assets/color.svg" class="my-Btn-img">
       <div class="myPalette">
      <div class="sub-one" id="change-color">
          <div class="color-palette" id="1" style="background-color:#FFFFFF"
              onclick="changeColor1('#FFFFFF','${id}')"></div>
          <div class="color-palette" id="2" style="background-color:#ccff90"
              onclick="changeColor1('#ccff90','${id}')"></div>
          <div class="color-palette" id="3" style="background-color:#d7aefb"
              onclick="changeColor1('#d7aefb','${id}')"></div>
      </div>
      <div class="sub-two">
          <div class="color-palette" id="4" style="background-color:#f28b82"
              onclick="changeColor1('#f28b82','${id}')"></div>
          <div class="color-palette" id="5" style="background-color:#a7ffeb"
              onclick="changeColor1('#a7ffeb','${id}')"></div>
          <div class="color-palette" id="6" style="background-color:#fdcfe8"
              onclick="changeColor1('#fdcfe8','${id}')"></div>
      </div>
      <div class="sub-three">
          <div class="color-palette" id="7" style="background-color:#fbbc04"
              onclick="changeColor1('#fbbc04','${id}')"></div>
          <div class="color-palette" id="8" style="background-color:#cbf0f8"
              onclick="changeColor1('#cbf0f8','${id}')"></div>
          <div class="color-palette" id="9" style="background-color:#e6c9a8"
              onclick="changeColor1('#e6c9a8','${id}')"></div>
      </div>
      <div class="sub-four">
          <div class="color-palette" id="10" style="background-color:#fff475"
              onclick="changeColor1('#fff475','${id}')"></div>
          <div class="color-palette" id="11" style="background-color:#aecbfa"
              onclick="changeColor1('#aecbfa','${id}')"></div>
          <div class="color-palette" id="12" style="background-color:#e8eaed"
              onclick="changeColor1('#e8eaed','${id}')"></div>
      </div>
  </div>
  </div>
      <div class="myBtns"><img src="../assets/add_image.svg" class="my-Btn-img"></div>
      <div class="myBtns"><img src="../assets/archive.svg" onclick="addArchieve()" class="my-Btn-img"></div>
      <div class="myBtns"><img src="../assets/more_icon.svg" class="my-Btn-img"></div>
      </div>
     <button onclick="updateNote('${id}')">Update</button>`


}
function updateNote(id) {

    let data = {


        "title": document.getElementById("title1").value,
        "description": document.getElementById("note1").value,
        "noteId": id,

    }
    if(displayCollab.length>0){
        data["collaberators"]=[JSON.stringify(displayCollab)]
    }
    update(data)
    $(".modal-content").css("display", "none");
}
//*****************trash notes*******************/

function trashNotes(e) {
    console.log(e.id)
    let data = {
        // "type": "module",
        noteIdList: [e.id.split("_")[1]],
        isDeleted: true,
    };
    deleteNote(data);
    //printNoteData();
    //commonNotes(data, "trashnotes")
}

function rgb(r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red + green + blue;
}
function changeColor(clr) {
 
// document.getElementById('bg-color').style
    document.getElementById('bg-color').style.backgroundColor = clr;
    //let change=document.getElementById('bg-color').style.backgroundColor;
    document.getElementById('title').style.backgroundColor = clr;
    document.getElementById('note').style.backgroundColor = clr;
    //color=document.getElementById(id).style.backgroundColor;
    color = clr;

    // let data = {
        
    //     color: document.getElementById(id).style.backgroundColor,
    //     noteIdList: [id]
    // }
    // addColor(data)

}
function changeColor1(clr,id){
    //console.log(clr,id)
    document.getElementById('bg-color1').style.backgroundColor = clr;
    document.getElementById('login-email1').style.backgroundColor = clr;
   // document.getElementById('collab-content').style.backgroundColor = clr;
    document.getElementById('modal2').style.backgroundColor = clr;
    document.getElementById('title1').style.backgroundColor = clr;
    document.getElementById('note1').style.backgroundColor = clr;
    document.getElementById('edit-note-btns1').style.backgroundColor = clr;

    color = clr;
      let data = {
        "noteIdList": [id],
        "color": clr
       
    }
    console.log(data)
    addColor(data)
    
}

//-----------------list-------------------//

function searchEmail() {
    $(".dropdown1").css('display', 'block');
    let email = document.getElementById("searchemail");
    //document.getElementById('.dropdown1').style.display = "block";
  

    let data = {
        "searchWord": email.value
      };
        if(email.value.length > 3){
    search(data)
       }
}

function selectemail(list){
    searchUserList=list;
    $(".dropdown1").css('display', 'block');
    // document.getElementById("searchemail").value=searchUserList=[];
    console.log(list)
    let temp = ""
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].email)
        temp += ` <li style="list-style-type:none">
        <div id=` + i + ` onclick = "selectItem(id)">` + list[i].email+ `</div></li>`;
        
    }
    console.log(temp)
    document.getElementById("mail-list").innerHTML = temp;
    
    
   
  }
  function selectItem(i){
 document.querySelector('#searchemail').value = searchUserList[i].email;
    colabData.push(searchUserList[i])
    $(".dropdown1").css('display', 'none');
  }
  
  
  function addEmailToCollab(){
   //alert("hii")
   //document.getElementById("addcolab").value;
   $(".modal").css('display', 'none');
       

        let temp=""
        for(i=0;i<colabData.length;i++){
            console.log(colabData[i].email)
            temp+=`<div class="circle" id="circle-colab">`+colabData[i].email.charAt(0)+`</div>
            <div class="add-note31">
                 <div>`
        }document.getElementById("addcolab").innerHTML=temp;
        
        $(".circle").css('display', 'block');
        // document.getElementById("add-note-btns").innerHTML=temp;
        // $(".add-note3").css('display', 'block');
    }

    //-------------collaborator for display note------------//
    // function searchEmail1() {
    //     $(".dropdown1").css('display', 'block');
    //     let email = document.getElementById("searchemail");
        //document.getElementById('.dropdown1').style.display = "block";
      
    
    //     let data = {
    //         "searchWord": email.value
    //       };
    //         if(email.value.length > 3){
    //     search(data)
    //        }
    // }
    
    // function selectemail1(list){
    //     searchUserList1=list1;
    //     $(".dropdown1").css('display', 'block');
        // document.getElementById("searchemail").value=searchUserList=[];
        // console.log(list1)
        // let temp = ""
        // for (let i = 0; i < list.length; i++) {
        //     console.log(list1[i].email)
        //     temp += ` <li style="list-style-type:none">
        //     <div id=` + i + ` onclick = "selectItem1(id)">` + list1[i].email+ `</div></li>`;
            
        // }
        // console.log(temp)
        // document.getElementById("mail-list").innerHTML = temp;
        
        
       
    //   }
    //   function selectItem1(i){
    //  document.querySelector('#searchemail').value = searchUserList1[i].email;
    //     colabData.push(searchUserList1[i])
    //     $(".dropdown1").css('display', 'none');
    //   }
      

    function addCollabToDisplay(){
       
        //document.getElementById("addcolab").value;
         $(".modal-colab").css('display', 'none');
       let temp=""
              for(i=0;i<displayCollab.length;i++){
                 console.log(displayCollab[i].email)
                 temp+=`<div class="circle3" id="circle-colab3">`+displayCollab[i].email.charAt(0)+`</div>
                       <div>`
              }document.getElementById("addcolab3").innerHTML=temp;
             
             $(".circle3").css('display', 'block');
           
         }
   
    
    

//   function displayArchieveNotes(displaynote){
//     const notes = displaynote;
//     const hasNotes = notes.length>0;
//    placeholder.style.display=hasNotes ? "none" : "flex";
  

//    let temp = "";
//    let note = document.getElementById("card1");

   
//             let title = element.title;
//             let description = element.description;
         

//             temp += `<div class="my-note" id="${element.id}" >
//             <div class="noteFields" onclick="openNote('${element.title}','${element.description}','${element.id}')" style="background-color:${element.color}">
//                 <div class="title-div" id="card-title">${title}</div>
//                 <div class="note-div" id="card-note">${description}</div>
//             </div>
//                  <!-------------icons---------------->
//                 <div class="btns-div" id="image-btns">
//                     <div class="note-btns"><img src="../assets/bell_icon.png" class="note-img"></img></div>
//                     <div class="note-btns"><img src="../assets/collaborate.svg" class="note-img"></div>
//                 </div>
         
//         </div>`;
        //}
//    });
//     note.innerHTML = temp;
// }

//display trash notes

// function displayTrashNotes(displaynote){
//     const notes = displaynote;
//     const hasNotes = notes.length>0;
//    placeholder.style.display=hasNotes ? "none" : "flex";
  

//    let temp = "";
//    let note = document.getElementById("card1");
   
   
//             let title = element.title;
//             let description = element.description;
         

//             temp += `<div class="my-note" id="${element.id}" >
//             <div class="noteFields" onclick="openNote('${element.title}','${element.description}','${element.id}')" style="background-color:${element.color}">
//                 <div class="title-div" id="card-title">${title}</div>
//                 <div class="note-div" id="card-note">${description}</div>
//             </div>
//                  <!-------------icons---------------->
//                 <div class="btns-div" id="image-btns">
//                     <div class="note-btns"><img src="../assets/bell_icon.png" class="note-img"></img></div>
//                     <div class="note-btns"><img src="../assets/collaborate.svg" class="note-img"></div>
//                 </div>
         
//         </div>`;
//         note.innerHTML = temp;

// }
 
