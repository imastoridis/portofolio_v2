'use strict';

angular.module('myApp.homepage')
    .component('navComponent', {
        templateUrl: 'homepage/components/nav.html',
        controller: function () {
            $('#menu-buttons').click(function () {
                console.log('click');
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
        }
    });