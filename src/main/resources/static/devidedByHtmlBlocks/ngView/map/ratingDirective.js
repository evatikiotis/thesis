(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('ratingStars', ratingStars);

    /*
    * Directive
    */
    ratingStars.$inject = [];

    function ratingStars() {
        var directive = {
            require: '?ngModel',
            restrict: 'E',
            template: ''
            + '<div ng-class="{ hover: vm.mutable, mutable: vm.mutable }">'
            + '<span ng-if="vm.ratingsPosition === \'left\'" class="ratings-left">({{vm.ratings}})</span>'
            + [1, 2, 3, 4, 5].map(function(num) {
                return '<i ng-mouseover="vm.mouseover(' + num + ')" '
                    + 'ng-mouseout="vm.mouseout()" '
                    + 'ng-click="vm.click()" '
                    + 'ng-class="vm.getClass(' + num + ')" '
                    + 'class="star hover material-icons"></i>';
            }).join('')
            + '<span ng-if="vm.ratingsPosition === \'right\'" class="ratings-right">({{vm.ratings}})</span>'
            + '</div>',
            scope: {
                ratings: '<',
                averageRating: '<',
                ratingsPosition: '@'
            },
            link: link,
            controller: angular.noop,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function link(scope, element, attrs, ngModel) {
            var vm = scope.vm;
            var myRating = null;

            // Bind data
            vm.mutable = false;

            // Bind functions
            vm.getClass = getClass;
            vm.mouseover = mouseover;
            vm.mouseout = mouseout;
            vm.click = click;

            // Initialise
            init();

            /*
            * Private functions
            */
            function init() {
                vm.mutable = !!ngModel;

                if (ngModel) {
                    ngModel.$render = function() {
                        myRating = ngModel.$viewValue;
                    };
                }
            }

            /*
            * Public functions
            */
            function getClass(num) {
                return {
                    on: vm.averageRating >= num || myRating >= num,
                    'on-half': vm.averageRating > myRating && vm.averageRating < num && vm.averageRating >= num - .75,
                    my: myRating >= num
                };
            }

            function mouseover(rating) {
                if (ngModel) {
                    myRating = rating;
                }
            }

            function mouseout() {
                if (ngModel) {
                    myRating = ngModel.$viewValue;
                }
            }

            function click() {
                if (ngModel) {
                    ngModel.$setViewValue(myRating);
                }
            }
        }
    }
})();

/*
 *  Angular LoadScript
 *
 *  Let angular load and execute lazy javascript from partials!
 *
 *  This module is the result of  this issue: "1.2.0rc1 regression: script tags not loaded via ngInclude"
 *  Issue url: https://github.com/angular/angular.js/issues/3756
 *
 *  As of Angular 1.2.0 the ngInclude scripts does not permit execution of javascript from included partials.
 *  This little module execute code inside script tags with "javascript-lazy" attribute after partial loading,
 *  thus re-enabling this feature.
 *
 *  ( please have a look at the issue comments, this angular feature was never planned nor included properly,
 *  was only a drawback of using jQuery for partial inclusion )
 *
 *  This angular module have been created by @subudeepak(https://github.com/subudeepak) based on the code posted by @endorama (https://github.com/endorama)
 *  (based upon the code
 *  posted by @olostan (https://github.com/olostan) )
 *
 *  Simply add this file, load ngLoadScript module as application dependency and use type="text/javascript-lazy"
 *  as type for script you which to load lazily in partials.
 *
 * License: 2013 - released to the Public Domain.
 */

/*global angular */
(function (ng) {
    'use strict';

    var app = angular.module('myApp');

    app.directive('script', function() {
        return {
            restrict: 'E',
            scope: false,
            link: function(scope, elem, attr)
            {
                if (attr.type==='text/javascript-lazy')
                {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    var src = elem.attr('src');
                    if(src!==undefined)
                    {
                        s.src = src;
                    }
                    else
                    {
                        var code = elem.text();
                        s.text = code;
                    }
                    document.head.appendChild(s);
                    elem.remove();
                }
            }
        };
    });

}(angular));