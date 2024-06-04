let myName = 'Ada';
let age = 30;
let isHappy = true;
let hobbies = ['Math', 'Poetry'];
function getName() {
    // Funktionen returnerar en sträng
    return myName;
}
// lastname är en frivillig parameter i funktionen nedan och måste alltså inte få ett värdet vi
// funktionsanropet. Detta visas med ett ? efter namnet.
function checkAge(age, name) {
    // Void betyder att funktionen inte returnerar något värde
    if (age < 30) {
        console.log('Under trettio!');
    }
    else {
        console.log('Över 30');
    }
}
checkAge(25);
const headingElem = document.querySelector('#name');
headingElem.innerText = `Hej ${myName}`;
