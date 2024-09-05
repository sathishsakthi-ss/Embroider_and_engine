import Model, { attr } from '@ember-data/model';

export default class PlaceModel extends Model {
  @attr('string') name;
}
