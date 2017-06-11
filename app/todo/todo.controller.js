angular
    .module('angular-starter')
    .controller('TodoController', TodoController)

function TodoController() {
    this.task = '';

    this.todos = [
        {
            task: 'Learn Angular v1.x',
            isCompleted: false,
            isEditing: false
        },
        {
            task: 'Kotlin for Android Development',
            isCompleted: false,
            isEditing: false
        }
    ]

    this.onCompletedClick = function(todo) {
        todo.isCompleted = !todo.isCompleted;
    }

    this.addTask = function() {
        if (this.task) {
            var newTask = {
                task: this.task,
                isCompleted: false,
                isEditing: false
            }
            this.todos.push(newTask);
            this.task = '';
        }
    }

    this.onDeleteTask = function(todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }

    this.onEditClick = function(todo) {
        todo.isEditing = true;
    }

    this.onEditCancelClick = function(todo) {
        todo.isEditing = false;
    }

    this.updateTask = function(todo) {
        todo.task = todo.updatedTask;
        todo.isEditing = false;
    }
}