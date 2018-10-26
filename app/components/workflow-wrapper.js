import Component from '@ember/component';

export default Component.extend({
  currentUser: Ember.inject.service('current-user'),
  store: Ember.inject.service('store'),
  step: 1,
  maxStep: 1,
  isValidated: Ember.A(),
  doiInfo: [],
  includeNIHDeposit: true,
  init() {
    this._super(...arguments);
    this.set('filesTemp', Ember.A());
  },
  userIsPreparer: Ember.computed(
    'currentUser.user',
    'model.newSubmission',
    function () {
      return this.get('model.newSubmission.preparers')
        .map(x => x.id)
        .includes(this.get('currentUser.user.id') ||
            (this.get('submitterEmail') && this.get('submitterName')));
    }
  ),
  userIsSubmitter: Ember.computed(
    'currentUser.user',
    'model.newSubmission',
    function () {
      return (
        this.get('model.newSubmission.submitter') ===
        this.get('currentUser.user')
      );
    }
  ),
  actions: {
    toggleNIHDeposit(bool) {
      this.set('includeNIHDeposit', bool);
    },
    next() {
      this.incrementProperty('step');
      if (this.get('maxStep') < this.get('step')) {
        this.set('maxStep', this.get('step'));
      }
    },
    back() { this.decrementProperty('step'); },
    submit() { this.sendAction('submit'); },

    validate() {
      const tempValidateArray = [];
      this.set('isValidated', []);
      Object.keys(this.get('model.newSubmission').toJSON()).forEach((property) => {
        // TODO:  Add more logic here for better validation
        if (this.get('model.newSubmission').get(property) !== undefined) {
          tempValidateArray[property] = true;
        } else {
          tempValidateArray[property] = false;
        }
      });
      this.set('isValidated', tempValidateArray);
    }
  }
});
