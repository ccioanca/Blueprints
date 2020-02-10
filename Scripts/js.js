//$(document).ready(function(){
//    $(this).scrollTop(0);
//});

$(document).ready(function () {

    
    // theme switcher prototype
    $('#theme-btn').click(function(){
        if($('#theme').data('theme') == 'dark'){
            $('#theme').attr('href','Styles/css/minified/light-theme.min.css');
            $('#theme').data('theme', 'light');
        }
        else{
            $('#theme').attr('href','Styles/css/minified/dark-theme.min.css');
            $('#theme').data('theme', 'dark');
        }
    });
});
