homeApp.directive('headerDiv', function () {
    return {
        templateUrl: './templateHtml/headerDiv.html',
        replace: false,
        transclude: true
    }
})
homeApp.directive('homeContentHead',function () {
    return {
        templateUrl: './templateHtml/homeContentHead.html',
        replace: false,
        transclude: true
    }
})
homeApp.directive('homeContentBody',function () {
    return {
        templateUrl: './templateHtml/homeContentBody.html',
        replace: false,
        transclude: true
    }
})
