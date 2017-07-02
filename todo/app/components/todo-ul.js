import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showTask(task) {
      alert(task.name);
    }
  }
});
