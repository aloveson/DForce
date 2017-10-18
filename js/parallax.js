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
    $('.anim-1').parallax(5, e);
    $('.anim-2').parallax(20, e);
    $('.anim-3').parallax(-30, e);
    
});

/************************************************************************
************************************************************************/


