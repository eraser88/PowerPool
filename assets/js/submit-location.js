$(document).ready(function () {
    mapsAutoComplete();
    initFireBase();
});

function mapsAutoComplete() {
    var initialize = function () {
        var source = document.getElementById("source");
        var destination = document.getElementById("destination");
        new google.maps.places.Autocomplete(source);
        new google.maps.places.Autocomplete(destination);
    };
    google.maps.event.addDomListener(window, 'load', initialize);
}

function initFireBase() {
    var myDataRef = new Firebase('https://carpool.firebaseIO.com/');
    $('#submit').on("click", function () {
        myDataRef.push({source: $('#source').val(), destination: $('#destination').val()});
    });
    myDataRef.on('child_added', function (snapshot) {
        var location = snapshot.val();
        $('<div/>').text(location.destination).prepend($('<em/>').text(location.source + ' -----> ')).appendTo($('#messagesDiv'));
    });
}