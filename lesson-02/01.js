const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess


if (!isAdmin && (hasSpecialPermission || !hasTemporaryPass)) {
    isAccess = true
} if else {
    (isVerifiedUser && (!hasTemporaryPass || hasSpecialPermission)){
    isAccess = true
    }
    else {
    isAccess = false
}


// your code
