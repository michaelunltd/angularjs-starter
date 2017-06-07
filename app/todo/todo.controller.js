angular
    .module('angular-starter')
    .controller('TodoController', TodoController)

function TodoController() {
    this.newTodo = '';
    this.todos = [
        "Learn AngularJS",
        "Read Strings, StringBuffer and StringBuilder",
        "AngularJS 1.x + Webpack + ES6 + Babel"
    ];

    this.addTodo = function() {
        if (this.newTodo.length != 0) {
            this.todos.push(this.newTodo)
        }
        this.newTodo = '';
    }

}