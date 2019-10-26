$(document).ready(function() {
		
  $('#slideshow').cycle({ 
fx: 'fade',
pause: 0, 
speed: "1000", //Time to fade into the next image [in milliseconds]
timeout: "2000", //Time spent on image [in milliseconds]
      before: blur_it
  });

      function blur_it() {

          width=$('#slideshow').width()+'px';
          height=$('#slideshow').height()+'px';

      }        

});