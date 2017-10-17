/* ===================================================================
 *parallax.rth
 * ------------------------------------------------------------------- */
$.fn.parallax = function (resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2, {
        x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
        y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
    });

};
$(document).mousemove(function (e) {
    $('.col-twelve').parallax(5, e);
    $('#bg01').parallax(20, e);
    $('#bg02').parallax(-30, e);
    $('#bg03').parallax(30, e);
});





//
// $(window).mousemove(function(e) {
//    var change;
//    var xpos=e.clientX;
//    var ypos=e.clientY;
//     
//    var left= change*20;
//    var  xpos=xpos*2;ypos=ypos*2;
//     console.log(xpos);
//     console.log(ypos);
//     /*
//    $('.animate-intro').css('top',((0+(ypos/50))+"px"));
//    $('.animate-intro').css('right',(( 0+(xpos/80))+"px"));
//    $('.animate-intro').css('right',(( 0+(xpos/80))+"px"));
//    */
//     /*
//     $('.animate-intro').css({
//         'transform' : 'translate(' + xpos +', ' + ypos + ')'
//     });
//     */
//     $('.animate-intro').css('-webkit-transform',  'translateX(' + xpos+ 'px)');
//     $('.animate-intro').css('-webkit-transform',  'translateY(' + ypos+ 'px)');
//  });

/*

-moz-transform: translateX(0px) translateY(0px);
-webkit-transform: translateX(0px) translateY(0px);
-o-transform: translateX(0px) translateY(0px);
-ms-transform: translateX(0px) translateY(0px);
transform: translateX(0px) translateY(0px);
*/