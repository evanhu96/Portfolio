// Function to call JQuery and call the moment.js method
$(document).ready(function() {
    let displayTimeEl = $('#currentDay');
    function displayTime() {
        var timeNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
        displayTimeEl.text(timeNow);
    }
    setInterval(displayTime, 1000);
// JQuery Date picker widget function
    $(function() {
        $( "#datepicker" ).datepicker();
    });
});

//Background NASA API 

function backgroundApi(){
    var requestUrl = "https://api.nasa.gov/planetary/apod?api_key=KQvSzQgyY8AfMI0hIai86n2GzdEbvv3ZK9f9SVOH"

    fetch(requestUrl)
        .then (function (response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            var NasaPhoto = data['url'];
            console.log(NasaPhoto);
            var background = document.createElement("img");
            background.setAttribute('src', NasaPhoto);
            document.body.appendChild(background);
            background.classList.add("backgroundImage");
            
        })
}

backgroundApi();

// end Background Nasa API

// Function to handle submit form
var submitFormEl = document.querySelector('#form-submit')

function handleFormSubmit(event) {
    event.preventDefault();

    var formInputVal = document.querySelector('#form-input').value;
    var birthInputVal = document.querySelector('#birth-input').value;

    if (!formInputVal) {
        console.error('Please Enter Your Name');
        return;
    } else if (!birthInputVal) {
        console.error('Please enter Valid Birthdate');
        return;
    }
    
    var queryString = './submit.result.html?q=' + formInputVal + '&birth=' + birthInputVal;

    location.assign(queryString);
}

submitFormEl = addEventListener('submit', handleFormSubmit);

// end submit form