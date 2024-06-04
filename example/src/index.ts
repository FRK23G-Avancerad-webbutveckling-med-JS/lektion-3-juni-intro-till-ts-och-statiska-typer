let myName: string = 'Ada';
let age: number = 30;
let isHappy: boolean = true;
let hobbies: string[] = ['Math', 'Poetry'];

function getName(): string {
  // Funktionen returnerar en sträng
  return myName;
}

// lastname är en frivillig parameter i funktionen nedan och måste alltså inte få ett värdet vi
// funktionsanropet. Detta visas med ett ? efter namnet.
function checkAge(age: number, name?: string): void {
  // Void betyder att funktionen inte returnerar något värde
  if (age < 30) {
    console.log('Under trettio!');
  } else {
    console.log('Över 30');
  }
}

checkAge(25);

const headingElem: HTMLElement = document.querySelector('#name');

headingElem.innerText = `Hej ${myName}`;
