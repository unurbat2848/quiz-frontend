// sign-up form

$(document).ready(function() {

  $("#sign_up_link").click(function() {
    $(this).closest("#signin_form").addClass("d-none");

    $("#sign_up_link").closest("#signin_form").closest(".sign_wrapper").find("#signup_form").removeClass("d-none");
  });
 
  $("#sign_in_link").click(function() {
    $(this).closest("#signup_form").addClass("d-none");

    $("#sign_in_link").closest("#signup_form").closest(".sign_wrapper").find("#signin_form").removeClass("d-none");
  });
 
});

// owl-carousel
$('.carousel_slider').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:1
      },
  }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
$('.que-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.que-btn-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$('.card-btn-grp .card-btn-next').on('click', function(){

  if($(".carousel_slider .owl-stage").data('last') === "submit")
  {
      console.log("success!");
  }

});