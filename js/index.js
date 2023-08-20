document.getElementById('apply-button').addEventListener('click', function () {
    const applyValue = getInputFieldValueById('coupun-code');
    const totalPrice = getTextElementValueById('total-price');
    const Total = getTextElementValueById('Total');
    const makePurchaseButton = document.getElementById('apply-button');
    
    if (totalPrice >= 200) {
        if (applyValue === "SELL200") {
            if (totalPrice >= 200) {
                finalPrice = applyDiscount(totalPrice);
                setTextElementValueById('Total', finalPrice);
            } else {
                finalPrice = totalPrice;
            }
        } else {
            alert('Invalid Coupon Code');
            Total = '';
        }
        
    } else {
        alert("Coupon only avalable shoping above 200 tk")
    }

});


document.getElementById('make-purchase').addEventListener('click', function () {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseFloat(totalPriceElement.innerText);


    if (totalPrice > 0) {
        resetCardEntries();
        my_modal_1.showModal();
    } else {
        alert("Please Select a item")
    }

});


function calulate(CardName, CardPrice) {
    const previousTotalPrice = getTextElementValueById('total-price');
    const nameEntry = document.getElementById('calculation-entry');
    const makePurchaseButton = document.getElementById('make-purchase');
    const textElement = document.getElementById("total-price");

    const newTotalPrice = previousTotalPrice + CardPrice;
    const twoDecimalTotal = newTotalPrice.toFixed(2);

    const Serial = nameEntry.childElementCount;
    const p = document.createElement('p');
    
    p.classList.add('my-4');
    p.innerHTML = `${Serial + 1}. ${CardName}`;
    nameEntry.appendChild(p);

    makePurchaseButton.classList.remove('disabled');
    textElement.innerText = twoDecimalTotal;

}


function appyButton() {
    const totalPrice = getTextElementValueById('total-price');
    const applyButton = document.getElementById('apply-button');
    if (totalPrice >= 200) {
        applyButton.classList.remove('disabled');
    }
}


const cardElements = document.querySelectorAll('.card');


cardElements.forEach(card => {
    card.addEventListener('click', function () {
        const cardName = card.querySelector('h2').innerText;
        const cardPriceElement = card.querySelector('.card-price');
        const cardPrice = parseFloat(cardPriceElement.innerText);
        calulate(cardName, cardPrice)
        
        appyButton();

    });
});
