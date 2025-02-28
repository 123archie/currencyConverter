let url="https://api.currencyapi.com/v3/latest?apikey=cur_live_WgjDCAuZwfVNUTrYAz4o5PjiIw0B8UppC2JSiHZ5"
let resp;
let data;
let from=document.querySelector("#from")
let promiseSent= async ()=>{
    console.log("Sending request...");
    resp=await fetch(url);
    console.log(resp);
    data=await resp.json();
    
}  
// (promiseSent)();
