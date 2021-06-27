homeApp.directive('headerDiv', function () {
    return {
        templateUrl: './directiveTemplate/headerDiv.html',
        replace: false,
        transclude: true
    }
})
homeApp.directive('homeContentHead',function () {
    return {
        templateUrl: './directiveTemplate/homeContentHead.html',
        replace: false,
        transclude: true
    }
})
homeApp.directive('homeContentBody',function () {
    return {
        templateUrl: './directiveTemplate/homeContentBody.html',
        replace: false,
        transclude: true
    }
})
