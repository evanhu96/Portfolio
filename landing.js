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

            var background = document.querySelector('body').style.background

            
        })
}

backgroundApi();