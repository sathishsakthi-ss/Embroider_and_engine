import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class BusSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return key;
  }
}
