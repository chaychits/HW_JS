const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess

let user = isAdmin
let verification = isVerifiedUser
let permission = hasSpecialPermission
let pass = hasTemporaryPass

if((user === false || verification === true) && (permission === true && pass === false) ){
    isAccess = true;
}
else{
    isAccess = false;
}


// your code
