/* ===================================================================
 *parallax.rth
 * ------------------------------------------------------------------- */ 
 $(window).mousemove(function(e) {
    var change;
    var xpos=e.clientX;
    var ypos=e.clientY;
     
    var left= change*20;
    var  xpos=xpos*2;ypos=ypos*2;
     console.log(xpos)
     console.log(ypos)
     /*
    $('.animate-intro').css('top',((0+(ypos/50))+"px"));
    $('.animate-intro').css('right',(( 0+(xpos/80))+"px"));
    $('.animate-intro').css('right',(( 0+(xpos/80))+"px"));
    */
     
     $('.animate-intro').css({
         'transform' : 'translate(' + xpos +', ' + ypos + ')'
     });
  });

/*

-moz-transform: translateX(0px) translateY(0px);
-webkit-transform: translateX(0px) translateY(0px);
-o-transform: translateX(0px) translateY(0px);
-ms-transform: translateX(0px) translateY(0px);
transform: translateX(0px) translateY(0px);
*/
