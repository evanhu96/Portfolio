var resultsEl = $("#submitBtn");


$(document).ready(function() {
    let displayTimeEl = $('#currentDay');
    function displayTime() {
        var timeNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
        displayTimeEl.text(timeNow);
    }
    setInterval(displayTime, 1000);

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


// end Background Nasa API
function results (){

    console.log('here');
    var nameEl = document.querySelector("#name");
    var dateEl = document.querySelector("#date");
    var h1El = document.querySelector("#h1");
    var buttonEl = document.querySelector('.button');
    var name = nameEl.value.trim();
    if(!name){ alert('Please enter your name');return;};
    // if(!date){ alert('Please enter your date of birth');return;};
    localStorage.setItem('name',name)
    // var date = dateEl.value.trim();
    h1El.textContent = 'WOW!! ' + name  + ' Amazinq Birthday';
    buttonEl.setAttribute('id', 'resultsBtn');
    buttonEl.setAttribute('href', './results.html');
    console.log(buttonEl.getAttribute('href'));
    $('.input').remove();
    $('#currentDay').remove();
    buttonEl.textContent = 'See The Night you were born' ;
    // Clear page add new button or error message for empty field.

}


resultsEl.on('click', results)
backgroundApi();