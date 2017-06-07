angular
    .module('angular-starter')
    .controller('HomeController', HomeController)

function HomeController() {
    this.message = "Hello world";
}