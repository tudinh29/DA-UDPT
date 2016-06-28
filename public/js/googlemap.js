$("#coor_k").val(Math.random() + 12);
$("#coor_B").val(Math.random() + 107);
var mapOptions = {
    center: new google.maps.LatLng(10.9948481, 107.083363),
    zoom:8
};
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
