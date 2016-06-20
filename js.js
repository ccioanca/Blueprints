//$(document).ready(function(){
//    $(this).scrollTop(0);
//});

$(document).ready(function () {

    $(window).on('scroll', function () {
        scrollPosition = $(this).scrollTop();
        if (scrollPosition >= 10 && scrollPosition <= 300) {
            $(".navbar-custom").removeClass('nav-no-scoll');
            $(".navbar-custom").addClass('nav-scrolled');
            
            $(".links-bar").addClass('links-bar-scrolled');
            $(".ico1 ,.ico2 ,.ico3").addClass('ico-scrolled');
            $(".links-bar").css("width", "10%");
        }
        if (scrollPosition <= 10) {
            $(".navbar-custom").removeClass('nav-scrolled');
            $(".navbar-custom").addClass('nav-no-scoll');
            
            $(".links-bar").removeClass('links-bar-scrolled');
            $(".ico1 ,.ico2 ,.ico3").removeClass('ico-scrolled');
            $(".links-bar").css("width", "20%");
        }
    });

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.nav-link').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
});
