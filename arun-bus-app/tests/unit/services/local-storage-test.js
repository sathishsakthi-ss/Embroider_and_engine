import { module, test } from 'qunit';
import { setupTest } from 'green-bus/tests/helpers';

module('Unit | Service | local-storage', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:local-storage');
    assert.ok(service);
  });
});
