import Model, { attr, belongsTo } from '@ember-data/model';

export default class BusModel extends Model {
  @attr('string') code;
  @attr('string') name;
  @attr('string') from;
  @attr('string') to;
  @belongsTo('user', { async: true, inverse: null }) owner;
  @attr('string') startTime;
  @attr('string') endTime;
  @attr('number') fare;
}
