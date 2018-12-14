//User js
//Slider
$('.news-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slider-top').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

//detail
$('#detail-1').click(function (e) {
  $('#hide-text-1').toggleClass('about-active');
});
$('#detail-2').click(function (e) {
  $('#hide-text-2').toggleClass('about-active');
});

var animatedToggle = 1;
$('#btn-search-desk').click(function (event) {
  event.preventDefault();
  if (animatedToggle === 1) {
    $('.navbar-nav').addClass('d-none');
    $('#search-form-desk').addClass('d-block');
    $('#search-wrapper-desk').css('width', '100%').css('margin-left', '0');
    animatedToggle = 2;
  } else {
    $('.navbar-nav').removeClass('d-none');
    $('#search-form-desk').removeClass('d-block');
    $('#search-wrapper-desk').css('width', 'unset').css('margin-left', '10px');
    animatedToggle = 1;
  }
  // $('.navbar-nav').toggleClass('d-none');
  // $('#search-form-desk').toggleClass('d-block');
  // $('.search-wrapper').css('width', '100%');
});

$('#btn-search-mob').click(function (event) {
  event.preventDefault();
  $('.navbar-nav').toggleClass('d-none');
  $('#search-form-mob').toggleClass('d-block');
});

/*================== Menu open =====================*/
$(".sidemenu-btn").on("click", function() {
  $(".wrapper").toggleClass("stop");
  $(".sidemenu").toggleClass("slidein");
  return false;
});
$(".close-menu").on("click", function() {
  $(".wrapper").removeClass("stop");
  $(".sidemenu").removeClass("slidein");
  return false;
});
$(".close_subs").on("click", function() {
  $(".alert.alert-success").addClass("nodisplay");
  return false;
});

$(".sidemenu-btn2").on("click", function() {
  $(".wrapper").toggleClass("stop");
  $(".sidemenu2").toggleClass("slidein");
  return false;
});
$(".close-menu2").on("click", function() {
  $(".wrapper").removeClass("stop");
  $(".sidemenu2").removeClass("slidein");
  return false;
});
$(".close_subs").on("click", function() {
  $(".alert.alert-success").addClass("nodisplay");
  return false;
});
$(".sidemenu2.slidein > ul > li").on("click", function() {
  $('.sidemenu2.slidein > ul > li').removeClass("active");
  $(this).addClass("active");
  return false;
});

/*================== Menu Dropdown =====================*/
$(".sidemenu ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
$(".sidemenu ul li.menu-item-has-children > a").on("click", function() {
  $(this).parent().toggleClass("active").siblings().removeClass("active");
  $(this).next("ul").slideToggle();
  $(this).parent().siblings().find("ul").slideUp();
  return false;
});

$(".sidemenu2 ul ul,.widget_nav_menu ul ul").parent().addClass("menu-item-has-children");
$(".sidemenu2 ul li.menu-item-has-children > a").on("click", function() {
  $(this).parent().toggleClass("active").siblings().removeClass("active");
  $(this).next("ul").slideToggle();
  $(this).parent().siblings().find("ul").slideUp();
  return false;
});
/*================== FancyBox =====================*/
$('.fancybox-custom-show-btn').fancybox({
  // Options will go here
});
