function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    inputField.value = '';
    return inputFieldValueString;
}


function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}


function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


function applyDiscount(price) {
    const totalPrice = getTextElementValueById('total-price');
    const Total = getTextElementValueById('Total');
    const discountPercentage = 20;
    const discountAmount = (discountPercentage / 100) * price;
    const discountedPrice = price - discountAmount;
    const dicounted = price - discountedPrice;
    const discountElement = document.getElementById('discount-price')
    discountElement.innerText = dicounted.toFixed(2);
    Total.innerText = discountedPrice;

    return discountedPrice;
}


function resetCardEntries() {
    setTextElementValueById('total-price', '0.00');
    setTextElementValueById('Total', '0.00');

    const discountElement = document.getElementById('discount-price')
    discountElement.innerText = '0';
    const makePurchaseButton = document.getElementById('make-purchase');
    makePurchaseButton.classList.add('disabled');

    const applyButton = document.getElementById('apply-button');
    applyButton.classList.add('disabled');


    document.getElementById('calculation-entry').innerHTML = '';
}