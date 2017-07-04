import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTodo(e) {
            e.preventDefault();

            if (!this.newTodoTitle) {
                return;
            }

            this.model.todoList.pushObject({
                title: this.newTodoTitle,
                isComplete: false
            });
        },
        handleInput(e) {
            this.newTodoTitle = e.target.value;
        },
        deleteTodo(e) {

            var textInInput = e.target.previousElementSibling.textContent;

            for (var i = 0; i < this.model.todoList.length; i++) {

                if (textInInput === this.model.todoList[i].title) {
                    this.model.todoList.removeAt(i, 1);
                }
            }
        }
    }
});
