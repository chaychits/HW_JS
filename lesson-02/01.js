const isAdmin = "Да"
const isVerifiedUser = "Да"
const hasSpecialPermission = "Да"
const hasTemporaryPass = "Да"

let isAccess

let user = prompt("What is your name?");
// let verification = prompt("Do you have verification?");
let permission = prompt("Do you have permissions?");
// let pass = prompt("Do you have pass?");

if((user === isAdmin || user === isVerifiedUser) && (permission === hasSpecialPermission && permission === hasTemporaryPass )){
    isAccess = true;
}
else{
    isAccess = false;
}


// your code
