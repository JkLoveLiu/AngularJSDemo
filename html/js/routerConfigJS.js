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
        .state('myInfo_account', {
            url: '/myInfo_account',
            templateUrl: 'templates/myInfoAccountTemplate.html'
        })
        .state('IONotes', {
            url: '/IONotes',
            templateUrl: 'templates/IONotesTemplate.html'
        })
})
