var male = ["Kevo","Brian"]
var female = ["Susan","Jackie"]
var daysOfTheWeek= ["Mon","Tue"]

function read(){
    var month = document.getElementById("Month").value
    var year = parseint(document.getElementById("Month").value)
    var date = parseInt(document.getElementById("date").value)
    var male = document.getElementById("male")
    var female = document.getElementById("female")

    if  (date<=0 || date>=32){
        alert("invalid Date")
    }
    var birthday = new date (year+"/"+month+"/"+date)

    var dt = birthday.getDay()

    if (male.checked== true){
        alert("you were born  on "+daysOfTheWeek[dt]+ "your akan name is "+male[dt])
    }
    else if (female.checked==true){
        alert("you were born  on "+daysOfTheWeek[dt]+ "your akan name is "+female[dt])
    }
    
}