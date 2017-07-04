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

      if (textInInput == this.model.todoList.title) {
        this.model.todoList.removeAt(i,1);
    }
  }
      console.log(this.model.todoList[new Object.title]);
    },
    handleInput(e) {
      this.newTodoTitle = e.target.value;
    }
  }
});
