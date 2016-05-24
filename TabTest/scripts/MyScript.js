// This is a shortcut for $(document).ready()
$(function () {

    // This is a shortcut to bind both mouseOver and mouseOut
    $('div.slideOutTab').hover(function () {
        // Animate out when hovered, stopping all previous animations
        $(this)
            .stop(true, false)
            .animate({
                left: -16
            }, 350);
    }, function () {
        // Animate back in when not hovered, stopping all previous animations
        $(this)
            .stop(true, false)
            .animate({
                left: -350
            }, 380);
    });


});