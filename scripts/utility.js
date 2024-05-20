function clickedSelectButton(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500','text-white');
    const busTotalSeat = document.getElementById('bus-total-seat');

    const busTotalSeatNumber = parseInt(busTotalSeat.innerText);
    const restSeatNumber = busTotalSeatNumber - 1;
    busTotalSeat.innerText = restSeatNumber;

    const totalSelectSeatElement = document.getElementById('total-select-seat');
    const totalSelectSeatNumber =  parseInt(totalSelectSeatElement.innerText);
    const totalSelectSeat = totalSelectSeatNumber + 1;
    totalSelectSeatElement.innerText = totalSelectSeat;

    const ticketDetails = document.getElementById('ticket-details');
    const ticketPriceElement = document.getElementById('ticket-price');
    const ticketPriceNumber = parseInt(ticketPriceElement.innerText);
    const div = document.createElement('div');
    div.classList.add('flex', 'flex-row', 'justify-between');
    ticketDetails.appendChild(div);
    const p = document.createElement('p');
    p.classList.add("font-inter", "font-normal", "text-sm");
    const p2 = document.createElement('p');
    p2.classList.add('font-inter', 'font-normal', 'text-sm');
    const p3 = document.createElement('p');
    p3.classList.add('font-inter', 'font-normal', 'text-sm');
    p.innerText = element.innerText;
    p2.innerText = 'Economoy';
    p3.innerText = ticketPriceNumber;
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    const totalPriceElement = document.getElementById('total-price');
    const totalPriceNumber = parseInt(totalPriceElement.innerText);
    const totalPrice = totalPriceNumber + ticketPriceNumber;
    totalPriceElement.innerText = totalPrice;
    const grandTotalPriceElement = document.getElementById('grand-total-price');
    const grandTotalPriceNumber  = parseInt(grandTotalPriceElement.innerText);
    const grandTotalPrice = grandTotalPriceNumber + ticketPriceNumber;
    grandTotalPriceElement.innerText = grandTotalPrice;
}

function clickedUnSelectButton(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-green-500','text-white');
    // const ticketDetails = document.getElementById('ticket-details');
    // console.log(ticketDetails.childNodes);
    // // ticketDetails.firstChild.remove();
    // ticketDetails.removen(ticketDetails.firstChild);
    // console.log(ticketDetails);
    // while (ticketDetails.firstChild) { 
    //     element.firstChild.remove(); 
    // }
}