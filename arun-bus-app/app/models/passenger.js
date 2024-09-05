import Model, { attr } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: {
    description: 'Name',
    validators: [validator('presence', true)],
  },
  age: {
    description: 'Age',
    validators: [validator('presence', true)],
  },
});

export default class PassengerModel extends Model.extend(Validations) {
  @attr('string') name;
  @attr('string') age;
}
