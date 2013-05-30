function initialize() {
    var source = $('#source').val();
    var destination = $('#destination').val();
    new google.maps.places.Autocomplete(source);
    new google.maps.places.Autocomplete(destination);
}
google.maps.event.addDomListener(window, 'load', initialize);
var myDataRef = new Firebase('https://carpool.firebaseIO.com/');

$(document).ready(function () {
    $('#submit').on("click", function () {
        myDataRef.push({source: $('#source').val(), destination: $('#destination').val()});
    });
});
myDataRef.on('child_added', function (snapshot) {
    var location = snapshot.val();
    $('<div/>').text(location.destination).prepend($('<em/>').text(location.source + ' -----> ')).appendTo($('#messagesDiv'));
});

