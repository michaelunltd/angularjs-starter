angular
    .module('angular-starter')
    .config(config)

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
    };

    var todoState = {
        name: 'todo',
        url: '/todo',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoController',
        controllerAs: 'todo'
    }

    $stateProvider
        .state(homeState)
        .state(todoState)
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];