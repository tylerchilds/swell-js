(function ( $ ) {
 
    $.fn.swell = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            offset: "0",
            direction: "top",
            duration: 200,
            easing: "linear",
            animation: "slide",
            shownCallback: null,
            hiddenCallback: null
        }, options );
        
        this.each(function() {
            $(this).unbind('mouseover').unbind('mouseout');
            var boxOver = {};
            var lid = $(this).children('.sw-lid');
            var well = $(this).children('.sw-well');

            if(settings.animation == "slide"){

                switch(settings.direction){
                    case 'left':
                        boxOver[settings.direction] = '-'+( lid.outerWidth() - settings.offset )+'px';
                        boxOver['right'] = ( lid.outerWidth() - settings.offset )+'px';

                        break;
                    case 'right':
                        boxOver[settings.direction] = '-'+( lid.outerWidth() - settings.offset )+'px';
                        boxOver['left'] = ( lid.outerWidth() - settings.offset )+'px';

                        break;
                    case 'bottom':
                        boxOver[settings.direction] = '-'+( lid.outerHeight() - settings.offset )+'px';
                        boxOver['top'] = ( lid.outerHeight() - settings.offset )+'px';

                        break;
                    case 'top':
                    default: 
                        boxOver[settings.direction] = '-'+( lid.outerHeight() - settings.offset )+'px';
                        boxOver['bottom'] = ( lid.outerHeight() - settings.offset )+'px';

                        break;
                }

                $(this).mouseover(function(){
                    lid.clearQueue().animate(boxOver, settings.duration, settings.easing, function(){
                        if(settings.shownCallback !== null)
                            settings.shownCallback.call(this);
                    });
                }).mouseout(function(){
                    lid.clearQueue().animate({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },settings.duration, settings.easing, function(){
                        if(settings.hiddenCallback !== null)
                            settings.hiddenCallback.call(this);
                    });
                });
            } else if (settings.animation == "flip") {
                $(this)
                    .addClass('sw-flip')
                    .attr('style', 
                        '-webkit-transition: ' + settings.easing + ' ' + settings.duration + 'ms;' +
                        '-moz-transition: ' + settings.easing + ' ' + settings.duration + 'ms;' +
                        'transition: ' + settings.easing + ' ' + settings.duration + 'ms;')
                    .wrap('<div class="sw-flip-wrapper"></div>');

                switch(settings.direction){
                    case 'left':
                        $(this).addClass('sw-left');
                        break;
                    case 'right':
                        $(this).addClass('sw-right');
                        break;
                    case 'bottom':
                        $(this).addClass('sw-bottom');
                        break;
                    case 'top':
                    default: 
                        $(this).addClass('sw-top');
                        break;
                }

            } else if (settings.animation == "fade") {
                boxOver['opacity'] = 0;

                $(this).mouseover(function(){
                    lid.clearQueue().animate(boxOver, settings.duration, settings.easing, function(){
                        if(settings.shownCallback !== null)
                            settings.shownCallback.call(this);
                    });
                }).mouseout(function(){
                    lid.clearQueue().animate({
                        opacity: 1
                    },settings.duration, settings.easing, function(){
                        if(settings.hiddenCallback !== null)
                            settings.hiddenCallback.call(this);
                    });
                });
            }
        });
        
        return this;
    };
 
}( jQuery ));