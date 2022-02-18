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
        console.log(result);
    })
}