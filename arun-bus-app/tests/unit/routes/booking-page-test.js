import { module, test } from 'qunit';
import { setupTest } from 'green-bus/tests/helpers';

module('Unit | Route | booking-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:booking-page');
    assert.ok(route);
  });
});
