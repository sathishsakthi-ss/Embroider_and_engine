import Component from '@ember/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';


import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: {
            description : "Email Address",
            validators :[validator('presence', true), validator('format', { type: 'email' })]
          },
  password: {
    description : "Password",
    validators:[
    validator('presence', true),
    validator('length', {
      min: 6,
      message: 'Password must be at least 6 characters long',
    }),
  ]},
});

export default class LoginFormAddonComponent extends Component.extend(Validations) {
    @tracked showValidations = false;

  @action
  submitForm(event) {
    event.preventDefault();
    this.showValidations = true;
    if (this.validations.isValid) {
      this.attrs.onSubmit.value({
        email: this.email,
        password: this.password,
      });
    }
  }

  @action
  focusOut() {
    this.showValidations = true;
  }
}
