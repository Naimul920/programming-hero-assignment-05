function scrollTicketSection() {
    const getTicketSection = document.getElementById('ticketSection');
    getTicketSection.scrollIntoView();
}
const test='hello';
const buttonContainer = document.getElementById('buttonContainer');
buttonContainer.addEventListener('click', event => {
console.log(buttonContainer.childNodes[1].classList.contains('clickedItem'));
    if(event.target.classList.contains('myButton') === true && event.target.classList.contains('clickedItem') === false ){
        const clickedButton = event.target.innerText;
        selectTicket(clickedButton);
    }
    // console.log();
    // Check if a button was clicked
    // if (event.target && event.target.classList.contains('myButton')) {
    //     // Get the clicked button
    //     const clickedButton = event.target;

    //     // Perform an action based on the clicked button
    //     const buttonId = clickedButton.getAttribute('data-id');
    //     alert(`Button ${buttonId} was clicked!`);

    //     // You can also access other properties like text content
    //     console.log(`Button text: ${clickedButton.textContent}`);
    // }
});
// function selectTicket(elementId) {
//     let elementIdStore = [];
//     const hasId =elementIdStore.includes(elementId);
//     console.log(hasId);
//     elementIdStore.push(elementId);
//     console.log(elementIdStore);
//     // if(elementIdStore.includes(elementId)===false){
//     //     elementIdStore.push(elementId);
//     //     console.log('item push');
//     // }else{
//     //     console.log('item already exist');
//     // }
// }


// console.log(myBtn);
// const myBtn= document.querySelectorAll(".my-button");
// console.log(myBtn);


// myBtn.addEventListener('click', function(event){
//     console.log('btn click');
// } )

// document.getElementById("A1").addEventListener('click', function (event){
//     console.log(event);
// })

function selectTicket(elementId) {

    const selectedSet = document.getElementById(elementId);
    selectedSet.style.backgroundColor = 'green';
    selectedSet.style.color = 'white';
    selectedSet.classList.add('clickedItem');
    const totalSitElement = document.getElementById('totalSit');
    const totalSitString = totalSitElement.innerText;
    const totalSitNumber = parseInt(totalSitString);
    const totalSitAfterSelect = totalSitNumber - 1;
    totalSitElement.innerText = totalSitAfterSelect;
    const numberOfSelectSit = document.getElementById('numberOfSelectSit');
    const totalSelectSitElement = parseInt(numberOfSelectSit.innerText);
    const totalSelectSit = totalSelectSitElement + 1;
    numberOfSelectSit.innerText = totalSelectSit;
    const ticketPrice = 550;
    const ticketDetails = document.getElementById('ticket-details');
    const div = document.createElement('div');
    div.classList.add('flex', 'flex-row', 'justify-between');
    ticketDetails.appendChild(div);
    const p = document.createElement('p');
    p.classList.add("font-inter", "font-normal", "text-sm");
    const p2 = document.createElement('p');
    p2.classList.add('font-inter', 'font-normal', 'text-sm');
    const p3 = document.createElement('p');
    p3.classList.add('font-inter', 'font-normal', 'text-sm');
    p.innerText = selectedSet.innerText;
    p2.innerText = 'Economoy';
    p3.innerText = ticketPrice;
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    const totalPriceElement = document.getElementById('total-price');
    const totalPriceElementNumber = parseInt(totalPriceElement.innerText);
    const totalPrice = totalPriceElementNumber + ticketPrice;
    totalPriceElement.innerText = totalPrice;
    
}