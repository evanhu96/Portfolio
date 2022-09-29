var resultsEl = $("#submitBtn");
// JQuery UI Caller
$(document).ready(function () {
    let displayTimeEl = $('#currentDay');
    function displayTime() {
        var timeNow = moment().format('YYYY MMM DD, [at] hh:mm:ss a');
        displayTimeEl.text(timeNow);
    }
    setInterval(displayTime, 1000);
    // JQuery Date picker widget function
    $(function () {
        $("#datepicker").datepicker();
    });
});

// Background NASA API 

function backgroundApi() {
    var requestUrl = "https://api.nasa.gov/planetary/apod?api_key=KQvSzQgyY8AfMI0hIai86n2GzdEbvv3ZK9f9SVOH"

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var NasaPhoto = data['url'];
            console.log(NasaPhoto);
            var background = document.createElement("img");
            background.setAttribute('src', NasaPhoto);
            document.body.appendChild(background);
            background.classList.add("backgroundImage");

        });
};
backgroundApi();

// end Background Nasa API\

// begin form submit button

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function nasaApi(event) {

    event.preventDefault();
    let nameInput = document.getElementById("nameInput").value;
    
    //vars for birthday input and name input

    let landingForm = document.querySelector(".container");
    landingForm.classList.add("hide")
    let backgroundImage = document.querySelector(".backgroundImage");
    backgroundImage.classList.add("hide")
    

    //insert user name
    let userText = document.createElement("h1");
    document.body.appendChild(userText);
    userText.innerHTML = "Hello, " + nameInput + ", this is what the night sky looked like on your Birthday..."

});


    //insert birthday
    let birthday = document.getElementById("datepicker").value;
    console.log(birthday);

    //pull from nasa api and implement birthday with parameter
    var birthdayURL = "https://api.nasa.gov/planetary/apod?api_key=KQvSzQgyY8AfMI0hIai86n2GzdEbvv3ZK9f9SVOH&date=2022-09-26"   
    
    fetch(birthdayURL)
        .then(function(response){
            return(response.json())
        })
        .then(function(data){
            console.log(data);
        })

