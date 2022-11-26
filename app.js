let joke = document.querySelector('#joke')
let update = document.querySelector('#update');
$.getJSON("https://api.chucknorris.io/jokes/random", function(data) {
    joke.textContent = data.value;
})


update.addEventListener('click', function(){
    $.getJSON("https://api.chucknorris.io/jokes/random", function(data) {
    joke.textContent = data.value;
})
})


