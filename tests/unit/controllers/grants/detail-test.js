import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:grants/detail', 'Unit | Controller | grants/detail', {
  // Specify the other units that are required for this test.
  needs: ['service:currentUser']
});

// Replace this with your real tests.
test('it exists', function (assert) {
  let controller = this.subject();
  assert.ok(controller);
});
