function rickApi() {
    var requestUrl = "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=33b732913ecd4b68"

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var rickSong = data['url'];
            console.log(rickSong);
            var rolld = document.createElement("audio");
            rolld.setAttribute('src', rickSong);
            rolld.setAttribute('id', 'rr');
            document.body.appendChild(rolld);
            rolld.classList.add("backgroundImage");
        });
}; 
rickApi();
console.log('hey');