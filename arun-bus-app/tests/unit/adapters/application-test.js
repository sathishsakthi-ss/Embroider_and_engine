import { module, test } from 'qunit';

import { setupTest } from 'green-bus/tests/helpers';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.ok(adapter);
  });
});
