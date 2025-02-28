let url="https://api.currencyapi.com/v3/latest?apikey=cur_live_WgjDCAuZwfVNUTrYAz4o5PjiIw0B8UppC2JSiHZ5"
let resp;
let data, fromCurr, toCurr;
let countryCode;
let imgURL, option;
let fromVal, toVal;
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
// (promiseSent)();
from.addEventListener("click", (e)=>{
    fromCurr=e.target.value;
    fromVal=data.data.
    console.log(fromVal);
});
to.addEventListener("click", (e)=>{
    toCurr=e.target.value;
    console.log(toCurr); 
    toVal=data.data.;
    console.log(toVal);
    exchange.value=toVal/fromVal;
});



