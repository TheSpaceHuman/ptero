//User js
//Slider
$('.responsive').slick({
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
//detail
/*$('#detail-1').toggle(function (e) {
  $('p.text.light').toggleClass('text-blur-light')
});
$('#detail-2').toggle(function (e) {
  $('ul.circle-orange').toggleClass('text-blur-dark')
});*/

$("#detail-1").click(function(){
  $(".text-blur-dark::after").css("display", "none");
});
$("#detail-2").click(function(){
  $(".text-blur-light").css("display", "none");
});