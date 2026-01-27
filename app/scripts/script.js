//Animation on scroll
$(window).on('scroll', function () {
    var fadeSkills = $(".fadeSkills").offset().top
    var fadeExperience = $(".fadeExperience").offset().top
    var y_scroll = window.pageYOffset;

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

