angular
    .module('angular-starter')
    .config(config)

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<p>Hello World</p>'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<p>About UI Router</p>'
    }

    $stateProvider
        .state(helloState)
        .state(aboutState)
}