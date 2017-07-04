import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        toggle(e) {
            if (e.target.checked) {
                e.target.parentElement.classList.add("done");
            } else {
                e.target.parentElement.classList.remove("done");
            }
        }
    }
});
