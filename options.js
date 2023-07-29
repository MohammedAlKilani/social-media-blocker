var saveButton = $("#saveButton")

var hours = $("#hours")
var minutes = $("#minutes")
var amOrBm =$("#amOrBm")

for (let i = 1; i <= 12; i++) {
    const option = jQuery("<option>")

    option.html(i) 
    hours.append(option)

}
for (let i = 5; i < 60; i += 5) {
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
   console.log(dateEndTime)
    chrome.storage.sync.set({ "dateEndTime":`${dateEndTime}`})
})