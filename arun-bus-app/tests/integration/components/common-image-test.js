import { module, test } from 'qunit';
import { setupRenderingTest } from 'green-bus/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | common-image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CommonImage />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CommonImage>
        template block text
      </CommonImage>
    `);

    assert.dom().hasText('template block text');
  });
});
