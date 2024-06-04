"use strict";
function calculateTip(sum, tip) {
    return sum * tip;
}
function divideTotal(total, numberOfFriends) {
    return total / numberOfFriends;
}
function showDividedSum(sum) {
    var _a, _b;
    (_a = document.getElementById('inputForm')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hide');
    (_b = document.getElementById('showSum')) === null || _b === void 0 ? void 0 : _b.classList.toggle('hide');
    const friendSumElem = document.getElementById('friendSum');
    if (friendSumElem)
        friendSumElem.innerHTML = sum + ' kr';
}
const button = document.getElementById('calculateButton');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    const sumElem = document.getElementById('sum');
    const tipElem = document.getElementById('tip');
    const friendsElem = document.getElementById('numberOfFriends');
    const sum = parseInt(sumElem.value);
    const tip = parseInt(tipElem.value);
    const numberOfFriends = parseInt(friendsElem.value);
    const calculatedTip = calculateTip(sum, tip);
    const total = sum + calculatedTip;
    const sumDivided = divideTotal(total, numberOfFriends);
    showDividedSum(sumDivided);
});
