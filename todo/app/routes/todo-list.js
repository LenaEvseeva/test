import Ember from 'ember';

var problems = [{
  name: 'Text1',
}, {
  name: 'Text2',
}, {
name: 'Text3',
}];
export default Ember.Route.extend({
  model() {
    return problems;
  }
});
