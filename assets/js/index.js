$(document).ready(function(){

  var count = 0;

  $("#footer-arrow").click(function(){
    if (count == 0) {
      $(".wrap").animate({top: -110}, 425);
      $('.page-container').animate({bottom: 200}, 425);
      //$("#footer-arrow").attr('transform', 'translate(0 0) rotate(180)');
      //$("#footer-arrow").animate({svgTransform: 'translate(0 0) rotate(180)'});
      count = 1;
    }
    else if (count == 1) {
      $(".wrap").animate({top: 0}, 425);
      $('.page-container').animate({bottom: 0}, 425);
      //$("#footer-arrow").attr('transform', 'translate(0 0) rotate(180)');
      //$("#footer-arrow").animate({svgTransform: 'translate(0 0) rotate(180)'});
      count = 0;
    }
  });

});
