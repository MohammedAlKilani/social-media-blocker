var saveButton = $("#saveButton")

var hours = $("#hours")
var minutes = $("#minutes")
var amOrBm =$("#amOrBm")
var addUrl =$("#addUrl")
var urlBlokTextBox =$("#urlBlokTextBox")
var ArryUrlBloker = []
chrome.storage.sync.get("ArryUrlBloker",(data)=>{
    console.log(Array.isArray(data.ArryUrlBloker))
    if(Array.isArray(data.ArryUrlBloker)){
        ArryUrlBloker = data.ArryUrlBloker
        for (let url of ArryUrlBloker) {
            pushInlestUrl(url)
        }
    }
})

for (let i = 1; i <= 12; i++) {
    const option = jQuery("<option>")

    option.html(i) 
    hours.append(option)

}
for (let i = 0; i < 60; i += 5) {
    const option = jQuery("<option>")

    option.html(i)
    minutes.append(option)

}
saveButton.on("click", () => {
    
    let dateEndTime = new Date()
    let hour = hours.val()
    if(amOrBm.val()=="Bm"){
        hour =parseInt(hours.val())+12
    }

    dateEndTime.setHours(hour)
    dateEndTime.setMinutes(minutes.val())

   if((dateEndTime- new Date())<0){
    let day = new Date().getDate()
    dateEndTime.setDate(++day)
    
   }
    chrome.storage.sync.set({"block":true})
    chrome.storage.sync.set({ "dateEndTime":`${dateEndTime}`})
})
addUrl.on("click",()=>{

    chrome.storage.sync.get("ArryUrlBloker",(data)=>{
        var urlBlokText = urlBlokTextBox.val()||""
        if(Array.isArray(data.ArryUrlBloker)){
            ArryUrlBloker = data.ArryUrlBloker
        }else{
            ArryUrlBloker=[]
        } 
        let testhref     = /^https:\/\/www.[a-z1-9]{5,}(\.com|\.net|\.eg|\.io|\.org)\/.*/i   
        let testhostname = /^www.?[a-z1-9]{5,}(\.com|\.net|\.eg|\.io|\.org)$/
        if(testhref.test(urlBlokText)||testhostname.test(urlBlokText)){
           
        let isFindUrl = ArryUrlBloker.find((url)=>{
              return  url==urlBlokText
        })
        if(!isFindUrl){
            ArryUrlBloker.push(urlBlokText)
        chrome.storage.sync.set({ "ArryUrlBloker":ArryUrlBloker})
        pushInlestUrl(urlBlokText)
        }
        }
        
    })  
     
})
function pushInlestUrl(url){
     var  liUrl  =   jQuery("<li>").addClass("alert list-group-item list-group-item-primary alert-dismissible fade show").html(`${url}`).attr({"role":"alert"})
        $("#lestUrl").append(liUrl) 
      var closeButton = jQuery("<button>").attr({"aria-label":"Close","type":"button","data-bs-dismiss":"alert"}).addClass("btn-close")
      liUrl.append(closeButton)
      closeButton.on("click",()=>{
        chrome.storage.sync.get("ArryUrlBloker",(data)=>{
          let newArryUrlBloker =   data.ArryUrlBloker.filter((url)=>{
                return (liUrl.text()!=url)
            })
            console.log(newArryUrlBloker)
            chrome.storage.sync.set({ "ArryUrlBloker":newArryUrlBloker}) 
        })
      })
    }
        
   