const months=[
    'jan','feb','mar','april',',may','june','july','aug','sept','oct','nov','dec'
]
const days=[
'Sunday',
    'Monday','Tuesday','Wednesday',
 'Thursday','Friday','Saturday'
]
const tDate=new Date()
const date=tDate.getDate() //dd
const month=tDate.getMonth()
const fMonth=months[month]//mm
const year=tDate.getFullYear()//yyyy
const day=tDate.getDay()
const fDay=days[day]//day
const time=tDate.getHours()//hh
const min=tDate.getMinutes()//min
const sec=tDate.getSeconds()//sec
const msec=tDate.getMilliseconds()//milli sec



const fullDateAndTime=`${fDay},${date}-${fMonth}-${year} time: ${time}:${min}:${sec}:${msec}`

document.getElementById('h').innerHTML=fullDateAndTime
document.getElementById('h').style.color='black'