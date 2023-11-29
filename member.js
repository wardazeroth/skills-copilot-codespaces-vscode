function skillsMember() {
    var app = angular.module('skillsMember', []);

    app.controller('skillsMemberController', function ($scope, $http) {
        $http.get("/api/SkillsMember/GetAllSkillsMember").then(function (response) {
            $scope.skillsMember = response.data;
        });
    });
}