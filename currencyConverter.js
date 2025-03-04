let url=`https://api.currencyapi.com/v3/latest?apikey=cur_live_sNJmb0xPgBPT57q7qub3K88CyAoMKZdCbYuR4A8T`;
let exchangeURL=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;
let resp;
let data, fromCurr, toCurr;
let countryCode, d;
let imgURL, option;
let fromVal, toVal, promiseExchange;
let listValue;
let exchange=document.querySelector("#conversionRate")
// let cors=require("cors");
let from=document.querySelector("#from");
let to=document.querySelector("#to");
// app.use(cors);
let promiseSent= async ()=>{
    console.log("Sending request...");
    resp=await fetch(url);
    console.log(resp);
    data=await resp.json();
    console.log(data.data);
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
}  
(promiseSent)();
from.addEventListener("click", (e)=>{
    fromCurr=e.target.value;
    console.log(fromCurr);
    (promiseExchange)();
});
to.addEventListener("click", (e)=>{
    toCurr=e.target.value;
    console.log(toCurr);    
    (promiseExchange)();
});
promiseExchange=async ()=>{
    promise=await fetch(`${exchangeURL}/${from.value.toLowerCase()}.json`);
    data=await promise.json();
    listValue=data[[from.value.toLowerCase()]][to.value.toLowerCase()];
    exchange.value=listValue;
} 



