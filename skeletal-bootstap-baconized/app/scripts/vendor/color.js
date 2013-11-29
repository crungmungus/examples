(function( $ ){
  $.fn.getPalette = function( options ) {  

    var settings = $.extend( {
      paletteId : '932683',
    }, options);

    return this.each(function() {        
      var url = 'http://www.colourlovers.com/api/palettes/' + settings.paletteId;

      $.getJSON(url,  { 
        format: 'json'
      });
    });

  };
})( jQuery );
