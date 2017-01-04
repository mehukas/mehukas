function activateButton(button) {
  $(button).addClass('active').siblings().removeClass('active');
}


function switchLanguage(button, language) {
  document.documentElement.lang = language;
  activateButton(button)  
  
}

$(function() {
  $("#appleLogo").click(function() {
    $("#btn_about").addClass('active').siblings().removeClass('active');
  });
  $("#mehukas").click(function() {
    $("#btn_about").addClass('active').siblings().removeClass('active');
  });
  $("#btn_about").click(function() {
    activateButton(this);
  });
  $("#btn_prices").click(function() {
    activateButton(this);
  });
  $("#btn_contact").click(function() {
    activateButton(this);
  });

  $("#btn_finnish").click(function() {
    switchLanguage(this, "FI-fi");
  });
  $("#btn_swedish").click(function() {
    switchLanguage(this, "SV-fi");
  });
  $("#btn_english").click(function() {
    switchLanguage(this, "EN-fi");
  });
});

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(60.4157266, 25.7952,598),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

function initMap() {
        var uluru = {lat: 60.4157266, lng: 25.7952,598};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }