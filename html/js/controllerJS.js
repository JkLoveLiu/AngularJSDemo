homeApp.controller('homeCtrl', function ($scope, $http, $interval, $timeout) {
    $scope.headerSoInputClick = function () {
        console.log('??????????')
    }
    $scope.myActiveSlide = 0;
    // 是否选中
    $scope.classHome = {
        "aIsSelect": true
    }
    $scope.pageSelect = function (ele) {
        $scope.classHome = {
            "aIsSelect": false
        }
        $scope.classLicai = {
            "aIsSelect": false
        }
        $scope.classLife = {
            "aIsSelect": false
        }
        $scope.classMyInfo = {
            "aIsSelect": false
        }
        switch (ele) {
            case 'classHome':
                $scope.classHome = {
                    "aIsSelect": true
                }
                break;
            case 'classLicai':
                $scope.classLicai = {
                    "aIsSelect": true
                }
                break;
            case 'classLife':
                $scope.classLife = {
                    "aIsSelect": true
                }
                break;
            case 'classMyInfo':
                $scope.classMyInfo = {
                    "aIsSelect": true
                }
                break;
        }
    }
    // 获取新闻页
    $http({
        method: 'GET',
        url: '../data/data.json'
    }).then(function successCallback(res) {
        $scope.dataNews = res.data.news;
        $scope.exchangeRateUSD = res.data.exchangeRate.USD;
        $scope.exchangeRateAU = res.data.exchangeRate.AU;
    }, function errorCallback(response) {
        console.log(response)
    });
    // 手写轮播图
    $scope.homeInterval = $interval(function () {
        $scope.news_content_move = {
            "transform": "translateY(-46px)",
            "transition": "1s"
        }
        $timeout(function () {
            $scope.dataNews.push($scope.dataNews[0])
            $scope.dataNews.splice(0, 1)
            $scope.news_content_move = {
                "transform": "translateY(0)"
            }
        }, 1500)
    }, 3000)

    $scope.notPage = function (name) {
        $scope.pageName = name;
    }
    $scope.myInfoClick = function () {
        // 版本信息获取appVersion
        $http({
            method: 'GET',
            url: '../data/data.json'
        }).then(function successCallback(res) {
            $scope.appVersion = res.data.appVersion;
        }, function errorCallback(response) {
            console.log(response)
        });
    }
    $scope.footerHideFn = function (){
        $scope.footerHide = {
            "display": "none"
        }
    }
    $scope.myInfoAccountBack = function () {
        $scope.footerHide = {
            "display": "block"
        }
    }




})
