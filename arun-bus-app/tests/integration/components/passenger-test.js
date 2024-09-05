import { module, test } from 'qunit';
import { setupRenderingTest } from 'green-bus/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | passenger', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Passenger />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Passenger>
        template block text
      </Passenger>
    `);

    assert.dom().hasText('template block text');
  });
});
