function scrollTicketSection() {
    const getTicketSection = document.getElementById('ticketSection');
    getTicketSection.scrollIntoView();
}
let clickItemId = [];
document.getElementById('buttonContainer').addEventListener('click', function(event) {
    const clickedButtonId =event.target.innerText;
    if(event.target.classList.contains('myButton') === true){
        if(clickItemId.includes(clickedButtonId) === true){
            clickedUnSelectButton(clickedButtonId);
            const itemIndex = clickItemId.indexOf(clickedButtonId);
            clickItemId.splice(itemIndex, 1);
        }
        else {
             if(clickItemId.length <= 3){
                clickedSelectButton(clickedButtonId);
                clickItemId.push(clickedButtonId);
             }else{
                alert('You can select maximum 4 ticket');
             } 
        }
    }
})

document.getElementById('coupon-input').addEventListener('keyup', function(event){
    const couponInputValue = event.target.value
    const couponElementNew15 = document.getElementById('NEW15');
    const couponTextNew15 = couponElementNew15.innerText;
    const couponElementCouple20 = document.getElementById('couple-20');
    const couponTextCouple20 =  couponElementCouple20.innerText;
    // console.log(couponText);
    // console.log(couponInputValue);

    if(couponInputValue === couponTextNew15 || couponInputValue === couponTextCouple20){
        const btnApply = document.getElementById('btn-apply');
        btnApply.removeAttribute('disabled');
        

        // console.log(grandTotalPrice);

    }else{
        // console.log('***************')
        const btnApply = document.getElementById('btn-apply');
        btnApply.setAttribute('disabled', false);
    }
})

document.getElementById('btn-apply').addEventListener('click', function(event){
    const couponInputElement = document.getElementById('coupon-input');
    const couponInputValue = couponInputElement.value;
    const couponElementNew15 = document.getElementById('NEW15');
    const couponTextNew15 = couponElementNew15.innerText;
    const couponElementCouple20 = document.getElementById('couple-20');
    const couponTextCouple20 =  couponElementCouple20.innerText;
    if(couponInputValue === couponTextNew15){
        const grandTotalPriceElement = document.getElementById('grand-total-price');
        const grandTotalPriceNumber  = parseInt(grandTotalPriceElement.innerText);
        const grandTotalPrice = (grandTotalPriceNumber * 15)/100 ;
        grandTotalPriceElement.innerText = grandTotalPriceNumber - grandTotalPrice;
        const discountContainerElement = document.getElementById('discount-container');
        discountContainerElement.classList.add('hidden');
        const totalDiscountContainer =  document.getElementById('total-discount-container');
        totalDiscountContainer.classList.add('flex', 'flex-row', 'justify-between', 'py-5');
        const p =document.createElement('p');
        p.classList.add('text-sm','font-inter', 'font-medium');
        p.innerText="Discount";
        const p2 =document.createElement('p');
        p2.classList.add('text-sm','font-inter', 'font-medium');
        p2.innerText= '-' + grandTotalPrice;
        totalDiscountContainer.appendChild(p);
        totalDiscountContainer.appendChild(p2);

    }else if(couponInputValue === couponTextCouple20){
        const grandTotalPriceElement = document.getElementById('grand-total-price');
        const grandTotalPriceNumber  = parseInt(grandTotalPriceElement.innerText);
        const grandTotalPrice = (grandTotalPriceNumber * 20)/100 ;
        grandTotalPriceElement.innerText = grandTotalPriceNumber - grandTotalPrice;
        const discountContainerElement = document.getElementById('discount-container');
        discountContainerElement.classList.add('hidden');
        const totalDiscountContainer =  document.getElementById('total-discount-container');
        totalDiscountContainer.classList.add('flex', 'flex-row', 'justify-between', 'py-5');
        const p =document.createElement('p');
        p.classList.add('text-sm','font-inter', 'font-medium');
        p.innerText="Discount";
        const p2 =document.createElement('p');
        p2.classList.add('text-sm','font-inter', 'font-medium');
        p2.innerText= '-' + grandTotalPrice;
        totalDiscountContainer.appendChild(p);
        totalDiscountContainer.appendChild(p2);
        // document.getElementById('discount-container').classList.add('hidden');

    }
});
