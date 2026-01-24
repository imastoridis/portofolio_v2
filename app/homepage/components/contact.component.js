'use strict';

angular.module('myApp.homepage')
    .component('contactComponent', {
        templateUrl: 'homepage/components/contact.html',
        controller: ['$scope', 'ENV', function ($scope, ENV) {
            var ctrl = this;

            // Initialize data
            ctrl.formData = {};
            ctrl.isSending = false;
            ctrl.statusMessage = ""

            ctrl.sendEmail = function () {
                ctrl.isSending = true;

                emailjs.send(ENV.emailjs_service_id, ENV.emailjs_template_id, ctrl.formData)
                    .then(function () {
                        ctrl.statusMessage = "Message envoyé avec succès!";
                        ctrl.formData = {};
                        $scope.$apply();
                    }, function (error) {
                        ctrl.statusMessage = "Erreur: " + JSON.stringify(error);
                    })
                    .finally(function () {
                        ctrl.isSending = false;
                        $scope.$apply();
                    });
            };
        }]
    });