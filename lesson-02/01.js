const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess

let user = prompt("What is your name?");
// let verification = prompt("Do you have verification?");
let permission = prompt("Do you have permissions?");
// let pass = prompt("Do you have pass?");

if((user === !isAdmin && (permission === hasSpecialPermission || permission === !hasTemporaryPass )) || (user === isVerifiedUser && (permission === hasSpecialPermission || !permission === hasTemporaryPass ))){
    isAccess = true
}
else{
    isAccess = false
}


// your code
