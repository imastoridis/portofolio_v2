'use strict';

angular.module('myApp.homepage')
  .component('competenceComponent', {
    templateUrl: 'homepage/components/competence.html',
    controller: function () {
      $(".c-item.icon").hover(function () {
        $(this).addClass("animated bounce");
      }, function () {
        $(this).removeClass("animated bounce");
      }
      );
    }
  });