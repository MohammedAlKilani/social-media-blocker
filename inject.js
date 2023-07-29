
 chrome.storage.sync.get("block",function(data){
    console.log(data.block)
    if(data.block){
       while(location.hostname == "www.facebook.com"){

        alert("go back")
        }  

       }  

chrome.storage.sync.get("dateEndTime",function(data){
   
    let dateEndTime =new Date(data.dateEndTime) 
   
    

   

    if(dateEndTime){
 let i =1 
        setInterval(()=>{ 
            let nowTime = new Date()
          let seconds =  dateEndTime.getSeconds() - nowTime.getSeconds() 
          let minutes =  dateEndTime.getMinutes() - nowTime.getMinutes()
        
          
          let hours =  dateEndTime.getHours() - nowTime.getHours()
            if(seconds<0){
                --minutes
                seconds +=60
                
            }
             if(minutes<0){
                
                minutes +=60
                --hours
            }
            if(hours<0){
                chrome.storage.sync.set({"block":false})
                chrome.storage.sync.set({"clocDown":"you can connect to social media block is over"})
                
            }else{
                 
                chrome.storage.sync.set({"block":true})
                chrome.storage.sync.set({"clocDown":`${hours } : ${minutes } : ${seconds}`})
            }
            

            i++  
        },1000)
        

    }
   
    })
   
   

})



// while(location.hostname == "www.facebook.com"){

// alert("go back")
// }
  

// alert("hi i am muhammed")onBeforeRequest.addListener(()=>{},{url:["https://www.facebook.com/"]},["blocking"])