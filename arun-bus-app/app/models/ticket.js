import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class TicketModel extends Model {
  @attr('string') date;
  @attr('number') fare;
  @belongsTo('bus', { async: false, inverse: null }) bus;
  @hasMany('passenger', { async: false, inverse: null }) passengers;
  @belongsTo('user', { async: false, inverse: 'tickets' }) user;
}
