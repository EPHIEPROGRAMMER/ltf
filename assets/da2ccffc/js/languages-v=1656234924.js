'use strict';

(function ($) {
    if ( typeof $ !== 'function' ) {
        return false;
    }
    
    var animationSpeed = 300;

    $(function () {
        $('.languages-list > .title').on('click', toggleList());
    });

    function toggleList () {
        var $block = $(this).parent();
        var $ul    = $block.find('> ul');

        if ( $ul.length > 0 ) {
            $ul.stop(true);

            if ( $ul.is(':hidden') ) {
                $block.addClass('opened');
                $ul.slideDown(animationSpeed);
            } else {
                $ul.slideUp(animationSpeed, function () {
                    $block.removeClass('opened');
                });
            }
        }
    }
    
    return true;
})(window.jQuery);
