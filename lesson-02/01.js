const isAdmin = true
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = true

let isAccess


if (((isAdmin && (hasSpecialPermission || hasTemporaryPass)) ||
    (isVerifiedUser && (hasTemporaryPass || hasSpecialPermission)))) {
    isAccess = true
} else {
    isAccess = false
}


// your code
