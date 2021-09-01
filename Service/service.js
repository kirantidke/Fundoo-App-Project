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
        
        success: function (data) {
            printNoteData(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
    return res;
}

/***************POST service Note API Call *************************/

function ajaxNotePostService(myData, myURL, successMsg, errorMsg) {
    $.ajax({
        url: apiURL + myURL,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        headers: { Authorization: `${tokenData.id}` },
        data: JSON.stringify(myData),
        success: function (data) {
            console.log(data);
            showSnackBar(successMsg);
            getNote();
        },
        error: function (err) {
            showSnackBar(errorMsg);
            console.log(err);
        }
    })
}

/***************Add Note API Call ************************/

function saveNote(noteData) {
    let myURL = "notes/addNotes";
    ajaxNotePostService(noteData, myURL,"saved successfully...", "failed to save...");
    
}


//*****************update note******** */
// function updateNotes(data) {
//     let myURL = "notes/updateNotes";
//     ajaxNotePostService(data, myURL,"updated successfully...", "failed to update...");
// }
//*****************trash note******** */
// function deleteNote(data) {
//     let myURL = "notes/trashNotes";
//     ajaxNotePostService(data, myURL,"deleted successfully...", "failed to delete...");
// }
