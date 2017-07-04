import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggle(e) {
      if (e.target.checked) {
        e.target.nextElementSibling.classList.add("done");
      }
      else {
        e.target.nextElementSibling.classList.remove("done");
      }
    }
  }
});
