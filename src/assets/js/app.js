$(document).ready(function() {

  // Init WOW
  new WOW().init();

  //  Toggle Menu
  $('#toggle-menu').on('click', function() {
    $(this).toggleClass('active')
    // $('.app-header-navigation').toggleClass('active')
    // $('.app-nav').toggleClass('active')
  })
})
