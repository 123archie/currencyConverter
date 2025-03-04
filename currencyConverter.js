let url=`https://api.currencyapi.com/v3/latest?apikey=cur_live_sNJmb0xPgBPT57q7qub3K88CyAoMKZdCbYuR4A8T`;
let exchangeURL=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;
let resp;
let data, fromCurr, toCurr;
let countryCode, d;
let imgURL, option;
let fromVal, toVal, promiseExchange;
let listValue;
let exchange=document.querySelector("#conversionRate");
let enteredAmt=document.querySelector("#Rupees");
let convertedAmt=document.querySelector("#Dollars");
// let cors=require("cors");
let from=document.querySelector("#from");
let to=document.querySelector("#to");
let btn=document.querySelector("#btn");
// app.use(cors);
let promiseSent= async ()=>{
    console.log("Sending request...");
    resp=await fetch(url);
    data=await resp.json();
    for(countryCode in data.data){
        // imgURL=`https://flagsapi.com/${countryCode}/flat/64.png`
        option=document.createElement("option");
        option.text=countryCode;
        from.appendChild(option);
    }for(countryCode in data.data){
        option=document.createElement("option");
        option.text=countryCode;
        to.appendChild(option);
    }
    if(from.value===to.value){
        exchange.value=1;
    }
}  
try{
    // (promiseSent)();
}catch(error){
    alert("Website down temporarily");
}
from.addEventListener("click", (e)=>{
    fromCurr=e.target.value;
    (promiseExchange)();
});
to.addEventListener("click", (e)=>{
    toCurr=e.target.value;
    (promiseExchange)();
});
promiseExchange=async ()=>{
    promise=await fetch(`${exchangeURL}/${from.value.toLowerCase()}.json`);
    data=await promise.json();
    listValue=data[[from.value.toLowerCase()]][to.value.toLowerCase()];
    exchange.value=listValue;
}
btn.addEventListener("click", ()=>{
    if(!enteredAmt.value){
        alert("Set amount.");
    }
    else{
        convertedAmt.value=enteredAmt.value*exchange.value;
    }
})



