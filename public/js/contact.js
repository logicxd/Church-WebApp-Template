function initMap() {
    var uluru = { lat: 37.775149, lng: -122.419286 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(function () {
    $('.menu-item-contact').addClass('active');
    $('.menu-item-about').addClass('active');
});