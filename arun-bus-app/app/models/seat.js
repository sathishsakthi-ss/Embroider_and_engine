import Model, { attr } from '@ember-data/model';

export default class SeatModel extends Model {
  @attr('string') code;
  @attr('string') date;
  @attr('number') availableSeats;
}
