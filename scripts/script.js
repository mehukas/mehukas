/*
$("#nav_languages > btn_swedish").click(function() {
  alert('swedish clicked');
});

$('#nav_languages > btn_swedish a')[0].click(function() {
  alert('swedish2 clicked');
});

$("about").click(function() {
  alert('about clicked');
});

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

$('#nav_languages').on('click', 'li', function() {
  alert('clicked');
});

function() {
  alert('hello!');
}


// http://johnwargo.com/miscellaneous/bootstrap-complete-navbar-example-application.html
//define the onclick event for the menu

$(".menuLink").on('click', function (e) {

//Set active menu item

//first remove active status for the currently selected

//menu item

$(this).parent().parent().find('.active').removeClass('active');

$('.nav').find('.active').removeClass('active');

//Then set the current menu item to acive

$(this).parent().addClass('active');

//Disable the link action, so nothing else happens when

//the menu is selected

e.preventDefault(); // stops link from loading

//Hide all existing page content

$('.content').hide();

//Then show the content for the current selected menu item

//get the href and use it find which div to show

$($(this).attr('href')).show();

});

*/

function activate_button(button) {
  $(button).addClass('active').siblings().removeClass('active');
}


function switch_language(button, language) {
  document.documentElement.lang = language;
  activate_button(button)  
  //$('.content').hide();
  
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
