/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)

const isAdmin = "Да"
const isVerifiedUser = "Да"
const hasSpecialPermission = "Да"
const hasTemporaryPass = "Да"

let isAccess

let user = prompt("What is your name?");
let verification = prompt("Do you have verification?");
let permission = prompt("Do you have permissions?");
let pass = prompt("Do you have pass?");

if((user === isAdmin || verification === isVerifiedUser) && permission === hasSpecialPermission && pass === hasTemporaryPass ){
    isAccess = true;
}
else{
    isAccess = false;
    }


// your code



