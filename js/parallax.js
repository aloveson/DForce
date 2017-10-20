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
    $('.anim-0').parallax(40, e);
    $('.anim-1').parallax(35, e);
    $('.anim-2').parallax(30, e);
    $('.anim-3').parallax(25, e);
    $('.anim-4').parallax(20, e);
    $('.anim-5').parallax(15, e);
    $('.anim-6').parallax(14, e);
    $('.anim-7').parallax(13, e);
    $('.anim-8').parallax(10, e);
    $('.anim-9').parallax(9, e);
    $('.anim-10').parallax(8.5, e);
    $('.anim-11').parallax(8, e);
    $('.anim-12').parallax(7.5, e);
    $('.anim-13').parallax(7, e);
    $('.anim-14').parallax(6.5, e);

});

/************************************************************************
************************************************************************/
