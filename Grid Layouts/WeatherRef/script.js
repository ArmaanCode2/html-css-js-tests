let locBtn = document.querySelector('.locationBtn');
let input = document.querySelector('.inpByText');
let alertCon = document.querySelector('.alertContent');
let alertSec = document.querySelector('.alertSec');
let value = 0;
var alertText = false

input.addEventListener("keyup" , e =>{
    if(e.key == "Enter"){
        if(input.value != ""){
            request(input.value)
        }else{
            alertText = "The text input is empty";
            alertCon.innerHTML = alertText;
            alertSec.classList.remove('disnone');
            alertCon.style.background = '#F8D7DA';
        }
    }
})

function request(city){
    alertText = "Getting Weather details...";
    alertCon.innerHTML = alertText;
    alertSec.classList.remove('disnone');
    alertCon.style.background = 'lightgreen';
    fetch(`http://api.weatherapi.com/v1/current.json?key=8366237814cd4072a7e201444221901&q=${city}`)
    .then(response => response.json())
    .then(result => {
        alertSec.classList.add('disnone');
        document.querySelector('.container').classList.add('disnone')
        showResult(result)
    })
}

function showResult(result){
    const d = new Date();
    const date  = d.getDate();
    const month = d.getMonth();
    let monthText = "";
    switch (month) {
        case 1:
            monthText = "Jan";
            break;
        case 2:
            monthText = "Feb";
            break;
        case 3:
            monthText = "Mar";
            break;
        case 4:
            monthText = "Apr";
            break;
        case 5:
            monthText = "May";
            break;
        case 6:
            monthText = "Jun";
            break;
        case 7:
            monthText = "July";
            break;
        case 8:
            monthText = "Aug";
            break;
        case 9:
            monthText = "Sep";
            break;
        case 10:
            monthText = "Oct";
            break;
        case 11:
            monthText = "Nov";
            break;
        case 12:
            monthText = "Dec";
            break;
        default:
            monthText = "";
            break;
    }
    let ico = document.querySelector('.imgSec .image img').src = result.current.condition.icon;
    document.querySelector('.secondSec').classList.remove('disnone')
    document.querySelector('.temp').innerHTML = result.current.temp_c + "°";
    document.querySelector('.about').innerHTML = result.current.condition.text;
    document.querySelector('.city').innerHTML = result.location.name + "," + result.location.country;
    console.log(result)
    console.log(date + "," + monthText)
    document.querySelector('.dateSec .date').innerHTML = date + "  " + monthText;
}