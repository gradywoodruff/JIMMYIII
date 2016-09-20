$(document).ready(function() {

    if ("ontouchstart" in document)
    $('body').addClass('touch');

    setTimeout(function(){
        $('body').removeClass('loading');
    }, 3600);
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3600);
  
    var colors = ['#A74449', '#BDB5A8', '#AA9576', '#685656'];
    $('body').css({'background-color': '' + colors[Math.floor(Math.random() * colors.length)]});

});
