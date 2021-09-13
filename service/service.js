const apiURL = 'http://fundoonotes.incubation.bridgelabz.com/api/';
const headerConfig = {headers: { 'Authorization': `${localStorage.getItem('token')}`,  'contentType': 'application/json; charset=utf-8',}}
/**************************GET Service Note API Call ********************************/
// window.addEventListener("DOMContentLoaded", (event) => { 
//     getNote();
// })

var tokenData = JSON.parse(localStorage.getItem("userData"));
function getNote() {
    console.log(headerConfig)
    let myURL = "notes/getNotesList";

    let res = $.ajax({

        url: apiURL + myURL,
        type: 'GET',
   
        dataType: 'json',
        headers: {
            'Authorization': `${localStorage.getItem('token')}`
        },
        contentType: 'application/json; charset=utf-8',
        
        success: function (res) {
            console.log(res)
            // printNoteData(data);
            commonNotes(res.data.data,"getnote")
            
        },
        error: function (err) {
            console.log(err);
        }
    })
    return res;
}

/***************POST service Note API Call *************************/

function ajaxNotePostService(myData, myURL, successMsg, errorMsg) {
    //var data;
    return $.ajax({
        url: apiURL + myURL,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        headers: { Authorization: `${localStorage.getItem('token')}` },
        data: JSON.stringify(myData),
        success: function (res) {
            //data = res;
            //callback.call(data)
            showSnackBar(successMsg);
            //getNote();
        
        },
        error: function (err) {
         //data=err;
            showSnackBar(errorMsg);
            console.log(err);
        }
    });
    //return data;//returns data from ajax request
    
}

/***************Add Note API Call ************************/

 function saveNote(noteData) {
    let myURL = "notes/addNotes";
    // console.log(data)
    ajaxNotePostService(noteData, myURL,"saved successfully...", "failed to save...")
    .then(data =>{
        console.log(data)
        // console.log(data);
        //showSnackBar(successMsg);
        getNote();
    })
    .catch(error =>{
        console.log(error)
    })
//    console.log(call);
}


//*****************update note******** */
function update(data) {
    let myURL = "notes/updateNotes";
    ajaxNotePostService(data, myURL,"updated successfully...", "failed to update...")
    .then(data =>{
        console.log(data)
        // console.log(data);
        //showSnackBar(successMsg);
        getNote();
    })
    .catch(error =>{
        console.log(error)
    })
}
//*****************trash note******** */
function deleteNote(data) {
    let myURL = "notes/trashNotes";
    ajaxNotePostService(data, myURL,"deleted successfully...", "failed to delete...")
    .then(data =>{
        console.log(data)
        // console.log(data);
        //showSnackBar(successMsg);
        getNote();
    })
    .catch(error =>{
        console.log(error)
    })
}
function addColor(data){
    let myURL = "notes/changesColorNotes";
    ajaxNotePostService(data, myURL,"color changed successfully...", "failed to change...")
    .then(data =>{
        console.log(data)
        // console.log(data);
        //showSnackBar(successMsg);
        getNote();
    })
    .catch(error =>{
        console.log(error)
    }) 
}
// function search(data){
//     myURL="user/searchUserList";
//     ajaxNotePostService(data, myURL,"color changed successfully...", "failed to change...")
// }
