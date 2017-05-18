$(function() {
    // this code taken from CSS Tricks at
    // css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php
    // with some modifications
    // first, selectors for iframes (and a div) referring to:
    // youtube, vimeo, facebook and spotify... and
    // second, replaces the selector that defines $fluidEl with .wrapper instead of .body or figure which
    // are both alternatively used in the original source
    // A third change I shied away from was adding 'img' to the list of selectors that
    // define the array of $allVideos --- partly because of the semantic dissonance of adding an animated .gif to a list called $allVideos

    var $allVideos = $(
        "div[data-href*='//www.facebook.com/'], " +
        "iframe[src*='//www.facebook.com/plugins/'], " +
        "iframe[src*='//embed.spotify.com'], " +
        "iframe[src*='//player.vimeo.com'], " +
        "iframe[src*='//www.youtube.com'], " +
        "object, embed"
        ),
    $fluidEl = $(".wrapper");
        $allVideos.each(function() {
          $(this)
            // jQuery .data does not work on object/embed elements
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');
        });
        $(window).resize(function() {
          var newWidth = $fluidEl.width();
          $allVideos.each(function() {
            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.attr('data-aspectRatio'));
          });
        }).resize();
});
