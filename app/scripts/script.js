var json = {
    "fadeInLeft": [
        $('#front-end'),
        $('#cms'),
        $('#environnement')
    ],
    "fadeInRight": [
        $('#back-end'),
        $('#web-design')
    ],
    "fadeInUp": [
        $('#one'),
        $('#two'),
        $('#three'),
        $('#four'),
        $('#five'),
        $('#six')
    ]
};
/*
function checkVisible( $elem ) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $elem.offset().top;
    var elemHalfHeight = $elem.height()/2;
    var elemBottom = elemTop + elemHalfHeight;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() { 
    for( let key in json ) {
        let elements = json[key];
        
        for( let $el of elements ) {
            if( checkVisible( $el ) ) {
                $el.addClass( key + ' animated' );
                $el.removeClass("hidden");
            }
        }
    };
});*/

//Animation on scroll
$(window).on('scroll', function () {
    var fadeSkills = $(".fadeSkills").offset().top
    var fadeExperience = $(".fadeExperience").offset().top
    // console.log(fadeExperience)
    var y_scroll = window.pageYOffset;
    //console.log(y_scroll)
    var scroll_competences = fadeSkills / 1.6;
    var scroll_experience = fadeExperience / 1.16;

    if (y_scroll > scroll_competences) {
        $(".front-end").addClass('fadeInRight animated')
        $(".front-end").removeClass("hidden");

        $(".back-end").addClass('fadeInLeft animated')
        $(".back-end").removeClass("hidden");

        $(".cms").addClass('fadeInRight animated')
        $(".cms").removeClass("hidden");

        $(".web-design").addClass('fadeInRight animated')
        $(".web-design").removeClass("hidden");

        $(".environnement").addClass('fadeInLeft animated')
        $(".environnement").removeClass("hidden");

    }

    if (y_scroll > scroll_experience) {
        $(".six").addClass('fadeInUp animated')
        $(".six").removeClass("hidden");

        $(".five").addClass('fadeInUp animated')
        $(".five").removeClass("hidden");

        $(".four").addClass('fadeInUp animated')
        $(".four").removeClass("hidden");

        $(".three").addClass('fadeInUp animated')
        $(".three").removeClass("hidden");

        $(".two").addClass('fadeInUp animated')
        $(".two").removeClass("hidden");

        $(".one").addClass('fadeInUp animated')
        $(".one").removeClass("hidden");

    }

});

$(".c-item.icon").hover(function () {
    $(this).addClass("animated bounce");
}, function () {
    $(this).removeClass("animated bounce");
}
);

$('#menu-buttons').click(function () {
    if ($('#menu').is(":visible")) {
        $('#hamburger').show();
        $('#menu, #cross').hide();
    } else {
        $('#hamburger').hide();
        $('#menu, #cross').show();
    }
});

$('#mobile-nav a').click(function () {
    $('#menu, #cross').hide();
    $('#hamburger').show();
});