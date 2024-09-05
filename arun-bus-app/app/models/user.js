import Model, { attr, hasMany } from '@ember-data/model';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  password: {
    description: 'Password',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 6,
        message: 'Password must be at least 6 characters long',
      }),
    ],
  },
  name: {
    description: 'Name',
    validators: [validator('presence', true)],
  },
  email: {
    description: 'Email',
    validators: [
      validator('presence', true),
      validator('format', { type: 'email' }),
      validator('unique-username', {}),
    ],
  },
  operator: {
    description: 'Operator',
    validators: [],
  },
  bus: {
    description: 'Operator',
    validators: [],
  },
  tickets: {
    description: 'Operator',
    validators: [],
  },
});

export default class UserModel extends Model.extend(Validations) {
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;
  @attr('boolean', { defaultValue: false }) operator;
  @hasMany('bus', { async: false, inverse: null }) buses;
  @hasMany('ticket', { async: false, inverse: null }) tickets;
}
