$(document).ready(function() {
  // carousel images index
  var index = 0;

  // setters
  var setImage = function(sliderDiv, images, index) {
    return sliderDiv.find('.first_image').attr('src', images[index]);
  }
  var setCaption = function(sliderDiv, captions, index) {
    return sliderDiv.find('.caption').html(captions[index]);
  }

  var moveCarousel = function(images, direction, sliderDiv, captions) {
    if ( direction === "next" ) {
      index++;
    } else {
      index--;
    }

    // resets index to keep carousel moving forward and backward
    if( index >=  images.length ){
      index = 0;
    } else if( index < 0 ) {
      index = images.length-1;
    }

    // set content
    setImage(sliderDiv, images, index);
    setCaption(sliderDiv, captions, index);
  }

  $.fn.carousel = function() {
    $(this).each(function() {
      var sliderDiv = $(this).closest('.slider'); 
      var images = $(this).data('images');
      var captions = $(this).data('captions');
      var directions = $(this).find('img.direction');

      // set the initial image for each container
      var initialImage = $(this).find('.first_image').attr('src', images[0]); 

      // set the initial caption for each container
      var initialCaption = $(this).find('.caption').html(captions[0]); 
      
      directions.each(function() {
        $(this).on('click',function() {            
            var direction = $(this).data('direction'); //cache the arrow that was clicked
            moveCarousel(images, direction, sliderDiv, captions);
        });
      });
    }); 
  }
});