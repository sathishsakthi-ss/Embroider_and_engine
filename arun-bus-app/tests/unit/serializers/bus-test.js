import { module, test } from 'qunit';

import { setupTest } from 'green-bus/tests/helpers';

module('Unit | Serializer | bus', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('bus');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('bus', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
