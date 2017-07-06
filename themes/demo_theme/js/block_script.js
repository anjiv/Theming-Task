// (function($) {

//   $(document).ready(function(){

//     var allPanels = $('.accordion > dd').hide();

//     $('.accordion > dt > a').click(function() {

//       allPanels.slideUp();
//       if(!$(this).hasClass('open')){
//       // remove class from each element
//       $('.open').removeClass('open');
//       // add class to current element
//       $(this).addClass('open');
//       // show the new element.
//       $(this).parent().next().slideDown();
//     } else {
//       // reset states and remove all.
//       $('.open').removeClass('open');
//     }
//     return false;
//   });
//   });
// })(jQuery);

(function($) {
$(document).ready(function() {
    $("#accordion").accordion();
});})(jQuery);
