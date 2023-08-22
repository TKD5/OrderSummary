
function myMessage() {
    document.getElementById('js-title').innerHTML = 'Thank you for your Payment!!'
    document.querySelector('.description').innerHTML = '';
}

function previousMessage() {
    document.getElementById('js-title').innerHTML = 'Order Summary';
    document.querySelector('.description').innerHTML = "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
}
