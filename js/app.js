(function(angular) {
    'use strict';

    var app = angular.module('Teaching', ['ngRoute']);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/page/:page', {
                templateUrl: 'content.html',
                controller: 'CourseController'
            }).otherwise({
                redirectTo: '/page/1'
            });
        }]);

    app.controller('CourseController', ['$scope','$routeParams', function($scope,$routeParams) {
        $scope.setTemplate = function(template,group) {
            $scope.template = 'content/'+ template +'.html';
            $scope.openGroup = group;
        };

        if ($routeParams.page == 'undefined')
            $scope.template = 'content/1.html';
        else
            $scope.template = 'content/'+ $routeParams.page +'.html';

        $scope.openGroup = 1;

        $scope.menu = [
            {
                "url": 1,
                "title": "Group 1",
                "sub": {
                    "1": {
                        "title": "Sub 1",
                        "url": 1,
                        "top": 1
                    },
                    "2": {
                        "title": "Sub 2",
                        "url": 2,
                        "top": 1
                    }
                }
            },
            {
                "url": 3,
                "title": "Group 2",
                "sub": {
                    "1": {
                        "title": "Sub 3",
                        "url": 4,
                        "top": 3
                    },
                    "2": {
                        "title": "Sub 4",
                        "url": 5,
                        "top": 3
                    },
                    "3": {
                        "title": "Sub 5",
                        "url": 6,
                        "top": 3
                    },
                    "4": {
                        "title": "Sub 6",
                        "url": 7,
                        "top": 3
                    }
                }
            },
            {
                "url": 8,
                "title": "Group 3",
                "sub": {
                    "1": {
                        "title": "Sub 7",
                        "url": 8,
                        "top": 8
                    },
                    "2": {
                        "title": "Sub 8",
                        "url": 9,
                        "top": 8
                    },
                    "3": {
                        "title": "Sub 9",
                        "url": 10,
                        "top": 8
                    },
                    "4": {
                        "title": "Sub 10",
                        "url": 11,
                        "top": 8
                    }
                }
            },
            {
                "url": 12,
                "title": "Group 4",
                "sub": {
                    "1": {
                        "title": "Sub 11",
                        "url": 13,
                        "top": 12
                    },
                    "2": {
                        "title": "Sub 12",
                        "url": 14,
                        "top": 12
                    },
                    "3": {
                        "title": "Sub 13",
                        "url": 15,
                        "top": 12
                    }
                }
            }
        ];
    }]);

})(window.angular);