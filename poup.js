
 let clocDown = document.getElementById("clocDown")
 clocDown.style.width ="fitcontent"
 chrome.storage.sync.get("block",(data)=>{
    console.log(data)

 if(data.block){
chrome.storage.sync.get("dateEndTime",function(data){
   
  let dateEndTime =new Date(data.dateEndTime) 
 console.log(dateEndTime.getFullYear()- new Date().getFullYear()==1||dateEndTime.getDate()- new Date().getDate()==1 || dateEndTime.getMonth()- new Date().getMonth()==1)
  let add24 =0
if(dateEndTime.getFullYear()- new Date().getFullYear()==1||dateEndTime.getDate()- new Date().getDate()==1 || dateEndTime.getMonth()- new Date().getMonth()==1){
    add24=24
}

 

  if(dateEndTime){

let i =1 
     let stopInterval  = setInterval(()=>{ 
          let nowTime = new Date()
        let seconds =  dateEndTime.getSeconds() - nowTime.getSeconds() 
        let minutes =  dateEndTime.getMinutes() - nowTime.getMinutes()
      
        
        let hours =  dateEndTime.getHours()+add24 - nowTime.getHours()
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
              clearInterval(stopInterval)
              clocDown.innerHTML = "you can connect to social media block is over"
              
          }else{
               
              // chrome.storage.sync.set({"block":true})
              clocDown.innerHTML = `${hours } : ${minutes } : ${seconds}`
          }
          

          i++  
      },1000)
      

  }
 
  })
 }else{
    clocDown.innerHTML = "you can connect to social media block is over" 
 }
     
   
 
})

$("input[type=time]").on("change",()=>{
 let  dateEndTime =new Date(new Date().toDateString()+" "+$("input[type=time]").val()) 
 if((dateEndTime- new Date())<0){
  let day = new Date().getDate()
  dateEndTime.setDate(++day)
 }
 console.log(dateEndTime) 
  chrome.storage.sync.set({"block":true})
  chrome.storage.sync.set({ "dateEndTime":`${dateEndTime}`})
  // close()
})