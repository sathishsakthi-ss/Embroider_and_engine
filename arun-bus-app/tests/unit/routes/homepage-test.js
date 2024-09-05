import { module, test } from 'qunit';
import { setupTest } from 'green-bus/tests/helpers';

module('Unit | Route | homepage', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:homepage');
    assert.ok(route);
  });
});
