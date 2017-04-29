﻿angular.module('GalleryAwesomeApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngTouch'])
.config(function ($mdThemingProvider) {

}).run(function ($rootScope, $http) {

});

angular.module('GalleryAwesomeApp').controller('GalleryAwesomeController',
function AppController($scope, $rootScope, $mdDialog, $timeout, $window) {
    var vm = this;
    vm.Images = staticImageList;
    vm.Columns = 3;
    vm.Radius = 5;
   

});

angular.module('GalleryAwesomeApp').directive('galleryAwesome', function ($timeout, $rootScope, $parse) {
    return {
        restrict: 'EA',
        scope: {
            images: '=',
            columns:'=',
            radius:'='
        },
        controllerAs: 'vm',
        link:function ($scope,element)
        {
            $scope.$watch('columns', function () {
                updateThumbs();
            });

            $scope.$watch('radius', function () {
                updateThumbs();
            });

            function updateThumbs()
            {
                var newColWidth = parseInt((80 / parseInt($scope.columns))) - 2;
                var newStyle = "height:" + newColWidth + "vw;width:" + newColWidth + "vw;" +
                    "clip-path:clip-path: circle(" + $scope.radius + "vw at 50% 50%);" +
     "-webkit-clip-path: circle(" + $scope.radius + "vw at  50% 50%);";
                angular.forEach(document.getElementsByClassName('gallery-awesome-thumb'), function (elem) {
                    elem.setAttribute("style", newStyle);
                });
            }

        },
        controller: function ($scope, $element, $mdDialog) {
            var vm = this;
            vm.Images = $scope.images;           
            vm.ShowFull = function (ev,img) {
                $mdDialog.show({
                    
                    controller: GalleryAwesomeDialogController,
                    controllerAs:"vm",
                    templateUrl: 'gallery-awesome-dialog.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: true,
                    locals : {
                    imageUrl : img.full
                }
                });
                   
            };

            function GalleryAwesomeDialogController($scope, $mdDialog, imageUrl) {
                var vm = this;
                vm.Close = function () {
                    $mdDialog.hide();
                };
                vm.Image = imageUrl;
            };


        },
        templateUrl: 'gallery-awesome.html'
    };
});


var staticImageList = [{ full: 'images/1.png', thumb: 'thumbs/1_t.png' },
                 { full: 'images/2.png', thumb: 'thumbs/2_t.png' },
                 { full: 'images/3.png', thumb: 'thumbs/3_t.png' },
                 { full: 'images/4.png', thumb: 'thumbs/4_t.png' },
                 { full: 'images/5.png', thumb: 'thumbs/5_t.png' },
                 { full: 'images/6.png', thumb: 'thumbs/6_t.png' },
                 { full: 'images/1.png', thumb: 'thumbs/1_t.png' },
                 { full: 'images/2.png', thumb: 'thumbs/2_t.png' },
                 { full: 'images/3.png', thumb: 'thumbs/3_t.png' },
                 { full: 'images/4.png', thumb: 'thumbs/4_t.png' },
                 { full: 'images/5.png', thumb: 'thumbs/5_t.png' },
                 { full: 'images/6.png', thumb: 'thumbs/6_t.png' },
                 { full: 'images/1.png', thumb: 'thumbs/1_t.png' },
                 { full: 'images/2.png', thumb: 'thumbs/2_t.png' },
                 { full: 'images/3.png', thumb: 'thumbs/3_t.png' },
                 { full: 'images/4.png', thumb: 'thumbs/4_t.png' },
                 { full: 'images/5.png', thumb: 'thumbs/5_t.png' },
                 { full: 'images/6.png', thumb: 'thumbs/6_t.png' },
                 { full: 'images/1.png', thumb: 'thumbs/1_t.png' },
                 { full: 'images/2.png', thumb: 'thumbs/2_t.png' },
                 { full: 'images/3.png', thumb: 'thumbs/3_t.png' },
                 { full: 'images/4.png', thumb: 'thumbs/4_t.png' },
                 { full: 'images/5.png', thumb: 'thumbs/5_t.png' },
                 { full: 'images/6.png', thumb: 'thumbs/6_t.png' },
                 { full: 'images/1.png', thumb: 'thumbs/1_t.png' },
                 { full: 'images/2.png', thumb: 'thumbs/2_t.png' },
                 { full: 'images/3.png', thumb: 'thumbs/3_t.png' },
                 { full: 'images/4.png', thumb: 'thumbs/4_t.png' },
                 { full: 'images/5.png', thumb: 'thumbs/5_t.png' },
                 { full: 'images/6.png', thumb: 'thumbs/6_t.png' }
];