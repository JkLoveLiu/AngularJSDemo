homeApp.config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homeTemplate.html'
        })
        .state('notWrite', {
            url: '/notWrite',
            templateUrl: 'templates/pageNotWrite.html'
        })
        .state('myInfo', {
            url: '/myInfo',
            templateUrl: 'templates/myInfoTemplate.html'
        })
})
