previewApp.controller("previewController", function ($scope, $http, imagesService, dateService) {
    $scope.link = "";
    $scope.preview = null;
    $scope.list = null;
    $scope.error = "";
    $scope.posts = [];

    $scope.loadPreview = function () {
        $http({ method: "post", url: 'http://194.87.144.48/BLink/Api/Preview', data: '=' + $scope.link })
        .success(function (data) {
            if (typeof (data) !== "undefined" && data !== null) {

                imagesService.setActiveImage(data, 0);

                $scope.preview = data;
                $scope.link = "";
                $scope.error = "";
            }
        })
        .error(function (errMessage) {
            $scope.preview = null;
            $scope.link = "";
            $scope.error = errMessage;
        });
    }

    $scope.postPreview = function () {
        var sp = $scope.preview;
        $scope.posts.splice(0, 0, {
            Title: sp.Title
            , Image: imagesService.getActiveImage(sp.Images)
            , Description: sp.Description
            , Text: sp.Text
            , Url: sp.Url
            , Host: sp.Host
            , DateTime: dateService.getDateString(new Date())
        });

        $scope.preview = null;
    }

    $scope.removePreview = function (index) {
        $scope.posts.splice(index, 1);
    }

}).config(function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});