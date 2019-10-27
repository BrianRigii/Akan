function read(){
    var name= document.getElementById("name").value
    console.log(name)
    var date = parseInt(document.getElementById("date").value);
    console.log(date);

if (date <=0 || date>=32 ){
    alert("invalid date")
    
}
}