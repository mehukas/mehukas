// https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// https://console.developers.google.com/iam-admin/settings/project?project=mehukas-154611
// https://console.developers.google.com/apis/api/maps_backend/overview?project=mehukas-154611&duration=P30D

function myMap() {
    var coordinates = {
      lat: 60.4167413,
      lng: 25.7726459};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: coordinates
    });
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map
    });
}

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
