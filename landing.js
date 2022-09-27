$(document).ready(function() {
    $( function() {
        $( "#datepicker" ).datepicker();
        } );
})

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
            console.log(data['url'])
        })
}

backgroundApi();