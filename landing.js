var secondsLeft = 6;

$(document).ready(function () {
    let displayTimeEl = $('#currentDay');
    function displayTime() {
        var timeNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
        displayTimeEl.text(timeNow);
    }
    setInterval(displayTime, 1000);

    $(function () {
        $("#datepicker").datepicker();
    });
});

//Background NASA API 

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

        })
}

backgroundApi();

// end Background Nasa API\

// begin form submit button

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function nasaApi(event) {

    event.preventDefault();
    let nameInput = document.getElementById("nameInput").value;


    let landingForm = document.querySelector(".container");
    landingForm.classList.add("hide")
    let backgroundImage = document.querySelector(".backgroundImage");
    backgroundImage.classList.add("hide")

    //insert user text 
    let userText = document.createElement("h1");
    document.body.appendChild(userText);
    // return and rickRoll if no name or date
    if (!nameInput) {
        userText.innerHTML = "Hello, please enter your name and birthday next time to avoid this terrible fate.";
        rickRoll(); return;
    }
    userText.innerHTML = "Hello, " + nameInput + ", this is what the night sky looked like on your Birthday..."

})



function rickRoll() {
    // Sets interval in variable
    let timer = document.createElement("h1");
    // center
    timer.setAttribute("style", "font-size: 50px; font-weight: bold; text-align:center; ");
    document.body.appendChild(timer);
    var timerInterval = setInterval(function () {
        secondsLeft--;
        console.log(secondsLeft);
        if (secondsLeft > 0) { timer.textContent = secondsLeft };
        if ((secondsLeft <= 0)) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timer.textContent = '';
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }

        // Calls function to create and append image

    }, 1000);
}
