var maleAkanName = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];
var femaleAkanName = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];
var daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function read() {
  var name = document.getElementById("name").value;
  console.log(name);
  var date = parseInt(document.getElementById("date").value);
  console.log(date);
  var month = document.getElementById("month").value;
  console.log(month);
  var male = document.getElementById("male");
  console.log(male);
  var female = document.getElementById("female");
  console.log(female);

  if (date <= 0 || date >= 32) {
    alert("invalid date");
  }
  var birthday = new Date(month + "-" + date);

  let dt = birthday.getDay();
  console.log(dt);

  function getAkanName() {
    if (male.checked == true) {
      alert(
        "Hey Man you were born on a " +
          daysOfTheWeek[dt] +
          " your name in ghana would be " +
          name +
          "" +
          maleAkanName[dt]
      );
    } else if (female.checked == true) {
      alert(
        "Hello you were born on a " +
          daysOfTheWeek[dt] +
          " your name in ghana would be " +
          name +
          "" +
          femaleAkanName[dt]
      );
    } else {
      console.log("something went wrong ");
    }
  }
  getAkanName();
}
