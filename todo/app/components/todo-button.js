import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showButton() {
      alert(document.querySelector('.add-task').value);
      problems.pushObject({name: document.querySelector('.add-task').value})
    }
  }
});
