import BaseValidator from 'ember-cp-validations/validators/base';
import { service, inject } from '@ember/service';

export default class UniqueUsername extends BaseValidator {
  @service store;

  validate(value, options, model, attribute) {
    return this.store
      .queryRecord('user', { email: value })
      .then((user) => {
        if (user && user.email === value) {
          let message = 'The email already exists.';
          return message;
        } else {
          return true;
        }
      })
      .catch((error) => {
        return true;
      });
  }
}

// const UniqueUsername = BaseValidator.extend({
//   store: Ember.inject.service(),

//   validate(value, options, model, attribute) {
//     return this.get('store').findRecord('user', value).then((user) => {
//       if(user && user.email === value) {
//         let message = "The username '${value}' already exists.";
//         return message;
//       } else {
//         return true;
//       }
//     })
//   }
// });

// UniqueUsername.reopenClass({
//   /**
//    * Define attribute specific dependent keys for your validator
//    *
//    * [
//    * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
//    * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
//    * ]
//    *
//    * @param {String}  attribute   The attribute being evaluated
//    * @param {Unknown} options     Options passed into your validator
//    * @return {Array}
//    */
//   getDependentsFor(/* attribute, options */) {
//     return [];
//   },
// });

// export default UniqueUsername;
