/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under MIT (https://spdx.org/licenses/MIT)
 */

// Tooltip Init
$(function() {
    $("[data-toggle='tooltip']").tooltip();
});

// make all images responsive
$(function() {
	$("img").addClass("img-responsive center-block");
});

// responsive tables
$(document).ready(function() {
	$("table").wrap("<div class='table-responsive'></div>");
	$("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                        $(".search__field").css('color', 'gray');

                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                        $('.fa-search').addClass('search__icon');
                        $('.fa-search').removeClass('search__icon_second');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').addClass('is-visible');
                    $('.fa-search').removeClass('search__icon');
                    $('.fa-search').addClass('search__icon_second');
                    $(".search__field").css('color', 'black');

                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-fixed');
                        $(".search__field").css('color', 'white');
                    }
                }
                this.previousTop = currentTop;
            });
    }
});
