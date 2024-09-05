import { module, test } from 'qunit';
import { setupRenderingTest } from 'green-bus/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | booking-popup', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BookingPopup />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <BookingPopup>
        template block text
      </BookingPopup>
    `);

    assert.dom().hasText('template block text');
  });
});
