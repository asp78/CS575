// JavaScript source code
var app = angular.module('ideaList', []);

app.controller('Idea_ListController', ['$scope', '$http','$filter', function ($scope, $http, $filter) {
    $http.get("http://localhost:3000/getIdeas")
        .success(function (data) {
            $scope.elements = data;
            $scope.elements = $filter('orderBy')($scope.elements, $scope.elements.submission_time, false);
        });
}]);

app.controller('CommentController', function () {
    this.comment = {};

    this.addComment = function (idea, user) {
        this.comment.author = user;
        this.comment.time = Date.now();
        this.comment.body.trim();
        idea.comments.push(this.comment);
        this.comment = {};
    };
});

app.controller('SupportController', function () {
    this.support = function (idea) {
        idea.support.push("apopov200");
    };
    this.removesupport = function (idea) {
        //idea.votes = idea.votes - 1;
    };
});

app.controller('ExampleController', ['$scope', function ($scope) {
    
}]);

app.controller('DescriptionController', ['$scope', function ($scope) {
    $scope.letterLimit = 400;
    $scope.link = "Show More";

    this.change = function (idea) {
        if ($scope.letterLimit === 400)
        {
            $scope.letterLimit = idea.description.length;
            $scope.link = "Show Less";
        } else
        {
            $scope.letterLimit = 400;
            $scope.link = "Show More";
        }
    };
}]);