// console.log(location.hostname == "www.facebook.com")
 chrome.storage.sync.get("elem",function(test){
    console.log(test.elem - new Date().getHours() <=0)
    if((test.elem - new Date().getHours()) >0){
       while(location.hostname == "www.facebook.com"){

        alert("go back")
        }  
    }
   

})


// while(location.hostname == "www.facebook.com"){

// alert("go back")
// }
  

// alert("hi i am muhammed")onBeforeRequest.addListener(()=>{},{url:["https://www.facebook.com/"]},["blocking"])