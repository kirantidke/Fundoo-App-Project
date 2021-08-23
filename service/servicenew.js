
const apiURL = 'http://fundoonotes.incubation.bridgelabz.com/api/';

/*----------------------------------------------- Common Method For All Post Operations ----------------------------------------------------------*/

function ajaxPostService(myData, myURL, successMsg, errorMsg, myLocation = "#") {
    console.log("In Server...");
    console.log(myData);
    $.ajax({
        url: apiURL + myURL,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        data: JSON.stringify(myData),
        success: function (data) {
            console.log(data);
            showSnackBar(successMsg);
            // localStorage.clear();
            localStorage.setItem("userData", JSON.stringify(data));
            setTimeout(function () { window.location.href = myLocation; }, 1000);
        },
        error: function (err) {
            showSnackBar(errorMsg)
            console.log(err);
        }
    })
}
/*----------------------------------------------- User Register API Call ----------------------------------------------------------*/

function postData(userData) {
    let myURL = 'user/userSignUp';
    ajaxPostService(userData, myURL, "User registered sucessfully", "Already registered with given email", "../HTML/sign_in.html");
}

/*----------------------------------------------- Login API Call ----------------------------------------------------------*/

function loginUser(loginData) {
    let myURL = 'user/login';
    ajaxPostService(loginData, myURL, "Login sucessfully", "Please provide valid credentials...", "../pages/dashboardnew.html");
}

/*----------------------------------------------- Reset Password API Call ----------------------------------------------------------*/

function resetPassword(emailData) {
    let myURL = 'user/reset';
    ajaxPostService(emailData, myURL, "Reset link sent sucessfully", "Email address not registered...");
}

/*********************************************** GET Service Note API Call Here ************************************************/
$(document).ready(() => {
    getNote();
})

var tokenData = JSON.parse(localStorage.getItem("userData"));
function getNote() {
    let myURL = "notes/getNotesList";
    $.ajax({
        url: apiURL + myURL,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        headers: { Authorization: `${tokenData.id}` },
        success: function (data) {
            printNoteData(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

/*********************************************** POST service Note API Call ************************************************/

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

/*********************************************** Add Note API Call ************************************************/

function saveNote(noteData) {
    let myURL = "notes/addNotes";
    ajaxNotePostService(noteData, myURL, "saved successful...", "failed to save...");
}

/*********************************************** Update Note API Call ************************************************/
function updateNotes() {
    let myURL = "notes/updateNotes";
    
}
/*********************************************** Trash Note API Call ************************************************/
function trashNotes() {
    let myURL = "notes/trashNotes";
    ajaxNotePostService()
}
