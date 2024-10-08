import { module, test } from 'qunit';

import { setupTest } from 'green-bus/tests/helpers';

module('Unit | Serializer | place', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('place');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('place', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
