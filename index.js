const hourE1=document.querySelector(".hour")
const minuteE1=document.querySelector('.minute')
const second1=document.querySelector('.second')
function upclock(){
const currentdate=new Date()
setTimeout(upclock,1000)
const hour=currentdate.getHours()
const minute=currentdate.getMinutes()
const second=currentdate.getSeconds()
hourdeg=(hour/12)*360
hourE1.style.transform=`rotate(${hourdeg}deg)`
minutedeg=(minute/60)*360
minuteE1.style.transform=`rotate(${minutedeg}deg)`
seconddeg=(second/60)*360
second1.style.transform=`rotate(${seconddeg}deg)`

}
upclock()