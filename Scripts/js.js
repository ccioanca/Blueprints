//$(document).ready(function(){
//    $(this).scrollTop(0);
//});

var theme = localStorage.getItem('theme');
var dark_theme = 'Styles/css/minified/dark-theme.min.css';
var light_theme = 'Styles/css/minified/light-theme.min.css';

if((window.matchMedia("(prefers-color-scheme: dark)").matches || window.matchMedia("(prefers-color-scheme: no-preference)").matches) && theme == undefined){
    theme = 'dark';
    $('#theme').attr('href', dark_theme);
}
else if(window.matchMedia("(prefers-color-scheme: light)").matches && theme == undefined){
    theme = 'light';
    $('#theme').attr('href', light_theme);
}

if(theme == 'dark')
    $('#theme').attr('href', dark_theme);
else
    $('#theme').attr('href', light_theme);


$(document).ready(function () {

    
    // theme switcher prototype
    // $('#theme-btn').click(function(){
    //     if($('#theme').data('theme') == 'dark'){
    //         $('#theme').attr('href','Styles/css/minified/light-theme.min.css');
    //         $('#theme').data('theme', 'light');
    //         $('.far.fa-lightbulb').show();
    //         $('.fas.fa-lightbulb').hide();
    //     }
    //     else{
    //         $('#theme').attr('href','Styles/css/minified/dark-theme.min.css');
    //         $('#theme').data('theme', 'dark');
    //         $('.far.fa-lightbulb').hide();
    //         $('.fas.fa-lightbulb').show();
    //     }
    // });

    $('#theme-btn').click(function(){
        //we can check for cookie if one is set.


        if(theme == 'dark'){
            theme = 'light';
            //light
            $('#theme').attr('href', light_theme);
            localStorage.setItem("theme", 'light');
        }
        else{
            theme = 'dark';
            //dark
            $('#theme').attr('href', dark_theme);
            localStorage.setItem("theme", 'dark');
        }



    });
});
