const ticketSel = document.getElementById("tickets");
const ticketQty = document.getElementById("qtyInput");
const delMethod = document.querySelector("input[name='tickets']:checked");
const outputText = document.getElementById("ticketOutput");
const bookBtn = document.getElementById("bookBtn");
const NameDetails = document.getElementById("name");
const addressDetails = document.getElementById("Address");
const emailDetails = document.getElementById("email")
let ticketPrice = 0
let deliveryPrice = 0
bookBtn.addEventListener("click",bookTicket,);
function bookTicket(){
    let selectedShow = ticketSel.options[ticketSel.selectedIndex].innerText;
    let ticketTotal = parseInt(ticketQty.value);
//--------ticket cost if statement-----------------------------//
   if(ticketSel.options[ticketSel.selectedIndex].value ==="phantomOfTheOpera"){
        ticketPrice = 79;
   }else if(ticketSel.options[ticketSel.selectedIndex].value ==="hamilton"){
       ticketPrice =85;
   }else if(ticketSel.options[ticketSel.selectedIndex].value==="theLionKing"){
       ticketPrice = 67;
   }else{
       ticketPrice=83;
   }
//--------total ticket price calculation---------------------//
     let totalPrice= ticketTotal *ticketPrice;
//--------discount if statement-----------------------------//
    if(ticketTotal >=6 && ticketTotal<10){
        discount = (totalPrice/100)*10 ;
        discountApp = "10%"
    }else if(ticketTotal>=10){
        discount = (totalPrice/100)*15;
        discountApp = "15%"
    }else{
        discount = 0;
        discountApp = "No"
    }
 //---------delivery method if statement---------//
 if(document.getElementById("post").checked == true){
     deliveryPrice = 3.99;
     DeliveryMethod = "Post"
 }else if(document.getElementById("boxOffice").checked == true){
     deliveryPrice= 1.50;
     DeliveryMethod = "Box Office";
 }else{
     deliveryPrice=0;
     DeliveryMethod = "E-ticket"
 }
let totalCost = totalPrice - discount + deliveryPrice;
//----------Contact details----------------------------------//
let nameInput= NameDetails.value;
let addressInput =addressDetails.value;
let emailInput = emailDetails.value;
    outputText.innerText = `You have booked the following:

    Show: ${selectedShow}

    Ticket Qty: ${ticketTotal}

    Ticket Price: £${ticketPrice}

    Ticket cost: £${totalPrice}

    ${discountApp} Discount: £${discount.toFixed(2)}

    Delivery Method: ${DeliveryMethod} PRICE: £${deliveryPrice.toFixed(2)}

    Total Cost: £${totalCost.toFixed(2)}

    Customer Details:
    Name: ${nameInput}

    Address: ${addressInput}
    
    Email:${emailInput}
    `;}
