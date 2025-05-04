const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess


if ((isAdmin === true || isVerifiedUser === true) && (hasSpecialPermission === true || hasTemporaryPass === true)) {
    isAccess = true
} else {
    isAccess = false
}


// your code
