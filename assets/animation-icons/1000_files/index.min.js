(function ($) {
    'use strict';

    // animate objects when scroll in view
    function animate_object(obj) {
        var scrollBottom = $(window).scrollTop() + $(window).height() - 250;

        if ( !(obj.length > 0 && scrollBottom >= obj.offset().top && !obj.hasClass('unbind-animate')) ) {
            return false;
        }

        obj.find('.js-bottom-spawn').each(function () {
            $(this).animate({bottom: 0, opacity: 1}, 1000, 'easeInOutCubic');
        });
        obj.find('.js-top-spawn').each(function () {
            $(this).animate({top: 0, opacity: 1}, 1000, 'easeInOutCubic');
        });
        obj.find('.js-left-spawn').each(function () {
            $(this).animate({left: 0, opacity: 1}, 1500, 'easeInOutCubic');
        });
        obj.find('.js-right-spawn').each(function () {
            $(this).animate({right: 0, opacity: 1}, 1500, 'easeInOutCubic');
        });
        obj.find('.js-bounce-spawn').each(function () {
            $(this).animate({opacity: 1}, 1000, 'easeInOutCubic');
        });
        obj.addClass('unbind-animate');
    }

    $(document).ready(function () {
        $(window).on('load ready scroll', function () {
            const marketsSection = $('.js-markets');
            if (marketsSection.length) {
                animate_object(marketsSection);
            }

            const investSection = $('.js-invest');
            if (investSection.length) {
                animate_object(investSection);
            }

            const choiceSection = $('.js-choice');
            if (choiceSection.length) {
                animate_object(choiceSection);
            }

            const trySection = $('.js-lf-try');
            if (trySection.length) {
                animate_object(trySection);
            }

            const copySection = $('.js-copy');
            if (copySection.length) {
                animate_object(copySection);
            }

            const platformsSection = $('.js-platforms');
            if (platformsSection.length) {
                animate_object(platformsSection);
            }

            const educationSection = $('.js-education');
            if (educationSection.length) {
                animate_object(educationSection);
            }

            const safeSection = $('.js-safe');
            if (safeSection.length) {
                animate_object(safeSection);
            }
        });
    });

    function bind_object(obj) {
        var scrollBottom = $(window).scrollTop() + $(window).height();

        if ( !(obj.length > 0 && scrollBottom >= obj.offset().top && !obj.hasClass('unbind')) ) {
            return false;
        }

        obj.find('.js-count').each(function () {


            Number.prototype.countDecimals = function () {
                if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
                return this.toString().split(".")[1].length || 0;
            }

            var number  = Number($(this).text());
            function isInteger(num) {
                return (num ^ 0) === num;
            }

            const countDecimalsNumber =  number.countDecimals();
            console.log(countDecimalsNumber);

            $(this).prop('Counter', 0).animate({Counter: number}, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(now.toFixed(countDecimalsNumber));
                }
            });
        });

        obj.addClass('unbind');
    }

    $(document).ready(function () {
        $(window).on('scroll load ready', function () {
            bind_object($('.js-indicators'));
        });
    });
})(window.jQuery);
