function calculateTip(sum: number, tip: number): number {
  return sum * tip;
}

function divideTotal(total: number, numberOfFriends: number): number {
  return total / numberOfFriends;
}

function showDividedSum(sum: number): void {
  document.getElementById('inputForm')?.classList.toggle('hide');
  document.getElementById('showSum')?.classList.toggle('hide');

  const friendSumElem = document.getElementById('friendSum');
  if (friendSumElem) friendSumElem!.innerHTML = sum + ' kr';
}

const button: HTMLElement | null = document.getElementById('calculateButton');
button?.addEventListener('click', function () {
  const sumElem = document.getElementById('sum') as HTMLInputElement;
  const tipElem = document.getElementById('tip') as HTMLInputElement;
  const friendsElem = document.getElementById(
    'numberOfFriends'
  ) as HTMLInputElement;
  const sum: number = parseInt(sumElem.value);
  const tip: number = parseInt(tipElem.value);
  const numberOfFriends: number = parseInt(friendsElem.value);

  const calculatedTip: number = calculateTip(sum, tip);
  const total: number = sum + calculatedTip;
  const sumDivided: number = divideTotal(total, numberOfFriends);

  showDividedSum(sumDivided);
});
