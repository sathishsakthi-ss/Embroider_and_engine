import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class SeatSerializer extends JSONAPISerializer {
  keyForAttribute(key) {
    return key;
  }
}
