angular
    .module('angular-starter')
    .controller('AppController', AppController)

function AppController() {
    this.number = 1;

    this.increment = function() {
        this.number += 1;
    }

    this.decrement = function() {
        if (this.number != 1) {
            this.number -= 1;
        }
        else {
            alert("No zero value for version.");
        }
    }
}