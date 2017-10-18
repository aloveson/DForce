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
