const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

function generateName(){

    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    let gender = document.querySelector('input[name="gender"]:checked');

    if(!day || !month || !year || !gender){
        alert("Please fill in all fields.");
        return;
    }

    if(day < 1 || day > 31){
        alert("Invalid day.");
        return;
    }

    if(month < 1 || month > 12){
        alert("Invalid month.");
        return;
    }

    // Use JavaScript Date object
    let date = new Date(year, month - 1, day);
    let dayNumber = date.getDay();

    let akanName;

    if(gender.value === "male"){
        akanName = maleNames[dayNumber];
    }else{
        akanName = femaleNames[dayNumber];
    }

    document.getElementById("result").innerHTML =
        `You were born on <strong>${days[dayNumber]}</strong>.<br>Your Akan name is <strong>${akanName}</strong>.`;
}
