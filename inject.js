

    
       
chrome.storage.sync.get("dateEndTime",dateEndTimeFun)

function dateEndTimeFun (data){
   
  
 
  

  chrome.storage.sync.get("ArryUrlBloker",(data)=>{
    
      if(Array.isArray(data.ArryUrlBloker)){
          var ArryUrlBloker = data.ArryUrlBloker
           for (let url of ArryUrlBloker) {
              var isBloked = (location.href == url||location.hostname == url )
              
            }
        
      }  

chrome.storage.sync.get("block",(data)=>{
             console.log(data.block)
            let isReload = localStorage.getItem("isReload")
            if((!data.block)&&(!isReload)&&(isBloked)){
              localStorage.setItem("isReload","true")
                location.reload()
              
            }else{
              localStorage.removeItem("isReload")
            }
            // while( isBloked&&data.block){

            //     alert("go back")
            //     } 
            console.log(isBloked&&data.block)
            window.onload = ()=>{
              if(isBloked&&data.block){
             let elemP = document.createElement("p")
             document.documentElement.innerHTML=""
              elemP.innerHTML = "go back"
              document.documentElement.style.background = "#765827"
              elemP.style.textAlign = "center"
              elemP.style.fontSize = "150px"
              elemP.style.color = "#E7B10A"
              elemP.style.fontFamily="sans-serif"
              document.documentElement.appendChild(elemP)
            }
            }
            
            
          })
 
  })
  if(data){
  let dateEndTime =new Date(data.dateEndTime) 
  if(dateEndTime){
let i =1 
          let nowTime = new Date()
        let seconds =  dateEndTime.getSeconds() - nowTime.getSeconds() 
        let minutes =  dateEndTime.getMinutes() - nowTime.getMinutes()
      
        
        let hours =  dateEndTime.getHours() - nowTime.getHours()
        let data =  dateEndTime.getDate() - nowTime.getHours()
        let Month =  dateEndTime.getMonth() - nowTime.getMonth()
        let Year =  dateEndTime.getFullYear() - nowTime.getFullYear()
          if(seconds<0){
              --minutes
              seconds +=60
              
          }
           if(minutes<0){
              
              minutes+=60
              --hours
          }
          if(hours<0&&data==0&&Month==0&&Year==0){
              chrome.storage.sync.set({"block":false})
              
              
              
          }
          

          i++  
      
      

  } 
}
}
chrome.storage.onChanged.addListener((changes, namespace) => {
  
  console.log(changes)
  if(changes.dateEndTime?.newValue){
    
    let data={}
    
    data.dateEndTime = changes.dateEndTime.newValue
    console.log(data)
      dateEndTimeFun(data)
  }else{

    dateEndTimeFun(false)
  }
  
  
})
// while(location.hostname == "www.facebook.com"){

// alert("go back")
// }
  

// alert("hi i am muhammed")onBeforeRequest.addListener(()=>{},{url:["https://www.facebook.com/"]},["blocking"])
// chrome.storage.onChanged.addListener((changes, namespace) => {
//   console.log(changes.dateEndTime.newValue)
//     for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
//       console.log(
//         `Storage key "${key}" in namespace "${namespace}" changed.`,
//         `Old value was "${oldValue}", new value is "${newValue}".`
//       );
//     }
//   });
  console.log("test")