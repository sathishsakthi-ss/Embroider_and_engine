import { module, test } from 'qunit';

import { setupTest } from 'green-bus/tests/helpers';

module('Unit | Model | seat', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('seat', {});
    assert.ok(model);
  });
});
