var secondsLeft = 5;
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
        $("#datepicker").datepicker({ dateFormat: 'yy-mm-dd'}).val();
    });
});

// Background NASA API - begin

function backgroundApi(background) {
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
            background.setAttribute('id', 'image');
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
    // return and rickRoll if no name or date
    if (!nameInput) {
        document.body.setAttribute("style" , "background-image:none")

        userText.innerHTML = "Hello, please enter your name and birthday next time to avoid this terrible fate.";
        rickRoll(); return;
    }
    userText.innerHTML = "Hello, " + nameInput + ", this is an image the Mars Rover took on your Birthday.." 

    //insert birthday
    let birthday = document.getElementById("datepicker").value;
    console.log(typeof(birthday));
    
    //pull from nasa api and implement birthday with parameter
    var birthdayURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=KQvSzQgyY8AfMI0hIai86n2GzdEbvv3ZK9f9SVOH&earth_date=${birthday}`
    
    fetch(birthdayURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let roverImg = data.photos[4].img_src;

        let roverInput = document.createElement("img");
        roverInput.setAttribute("src", roverImg);
        document.body.appendChild(roverInput);
        roverInput.classList.add("backgroundImage")
    })

    
});

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
            window.location.href = './empty.html';
        }
    
            // Calls function to create and append image
    
    }, 1000);
}

// function to show NASA Image of the Day when pressed.
function show() {
    document.getElementById('image').style.display = "block";
    document.getElementById('btnId').style.display = "none";
};

function hide() {
    document.getElementById('image').style.display = "none";
};

// window.onSpotifyWebPlaybackSDKReady = () => {
//     const token = 'BQAGi3kW8dpka9855QksoFCm1sE4bGOW24TSKbpP_PjFZag6LRqs6lnkJkFXbHdQ3ylLX_6s1T_8lGMqeSJwFR_YkYNTdk3kN8pKbPFGHJw09LyONV9BMCCtxFeiuAqr2yzMZMfMC9JcNznx2qqunWMyD9vbz8koMmtEeDs_3jlV2Oi4VvhSWLwFc0bxZsbX7k8';
//     const player = new Spotify.Player({
//         name: 'Web Playback SDK Quick Start Player',
//         getOAuthToken: cb => { cb(token); },
//         volume: 0.5
//     });

//     // Ready
//     player.addListener('ready', ({ device_id }) => {
//         console.log('Ready with Device ID', device_id);
//     });

//     // Not Ready
//     player.addListener('not_ready', ({ device_id }) => {
//         console.log('Device ID has gone offline', device_id);
//     });

//     player.addListener('initialization_error', ({ message }) => {
//         console.error(message);
//     });

//     player.addListener('authentication_error', ({ message }) => {
//         console.error(message);
//     });

//     player.addListener('account_error', ({ message }) => {
//         console.error(message);
//     });

//     // document.getElementById('togglePlay').onclick = function() {
//     // player.togglePlay();
//     // };

//     player.connect();
// };

const play = ({
    spotify_uri,
    playerInstance: {
      _options: {
        getOAuthToken
      }
    }
  }) => {
    getOAuthToken(access_token => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: 'PUT',
        body: JSON.stringify({ uris: [spotify_uri] }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        },
      });
    });
  };
  
  play({
    playerInstance: new Spotify.Player({ name: "..." }),
    spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
  });