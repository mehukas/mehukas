function activate_button(button) {
  $(button).addClass('active').siblings().removeClass('active');
}


function switch_language(button, language) {
  document.documentElement.lang = language;
  activate_button(button)  
  
}

$(function() {
  $("#appleLogo").click(function() {
    $("#btn_about").addClass('active').siblings().removeClass('active');
  });
  $("#mehukas").click(function() {
    $("#btn_about").addClass('active').siblings().removeClass('active');
  });
  $("#btn_about").click(function() {
    activate_button(this);
  });
  $("#btn_prices").click(function() {
    activate_button(this);
  });
  $("#btn_contact").click(function() {
    activate_button(this);
  });

  $("#btn_finnish").click(function() {
    switch_language(this, "FI-fi");
  });
  $("#btn_swedish").click(function() {
    switch_language(this, "SV-fi");
  });
  $("#btn_english").click(function() {
    switch_language(this, "EN-fi");
  });
});
