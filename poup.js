console.log("test pop")
var test = document.getElementById("add")
test.addEventListener("change",(e)=>{
    chrome.storage.sync.set({"elem":e.target.value})
})
