function read(){
    var name= document.getElementById("name").value
    console.log(name)
    var date = parseInt(document.getElementById("date").value);
    console.log(date);
    var month= document.getElementById("month").value
    console.log(month)

if (date <=0 || date>=32 ){
    alert("invalid date")
    
}
var birthday = new Date (month +"-"+date)


let dt = birthday.getDay();
console.log(dt)


}