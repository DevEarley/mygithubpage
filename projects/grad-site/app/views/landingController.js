angular.module('GradSite').controller('LandingController', ['$scope', '$rootScope', '$location','StudentDataService',
    function ($scope, $rootScope, $location, StudentDataService) {
        var vm = this; window.scrollTo(0, 0);
        vm.studentNames = StudentDataService.getStudentNames();
    }]);