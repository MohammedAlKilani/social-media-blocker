
 let clocDown = document.getElementById("clocDown")
 clocDown.style.width ="50px"
 setInterval(()=>{chrome.storage.sync.get("clocDown",(data)=>{
    
   clocDown.innerHTML = data.clocDown
 
 })},1000)