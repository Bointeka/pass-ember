import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | select row toggle', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{select-row-toggle}}`);

    // Template block usage:
    this.render(hbs`
      {{#select-row-toggle}}
        template block text
      {{/select-row-toggle}}
    `);

    assert.ok(true);
  });
});