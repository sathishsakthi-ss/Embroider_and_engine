import Component from '@ember/component';
import { service, inject } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  from: {
          description: "From",
          validators: [validator('presence', true)]
        },
  to: {
    description: "To",
    validators: [validator('presence', true)]
  },
  date: {
    description: "Date",
    validators: [validator('presence', true)]
  },
});

export default class SearchBus extends Component.extend(Validations) {
  @inject store;
  @service router;
  @service('current-search') busSearch;

  @tracked from;
  @tracked to;
  @tracked showValidations = false;

  @action
  setFromSelected(event) {
    let from = event.target.value;
    this.from = from;
    this.set('fromSelected', from);
  }

  @action
  setToSelected(event) {
    let to = event.target.value;
    this.to = to;
    this.set('toSelected', to);
  }

  @action
  saveSearchAllowBooking(event) {
    this.showValidations = true;
    event.preventDefault();
    if (this.validations.isValid) {
      this.router.transitionTo('booking-page', {
        queryParams: {
          from: this.fromSelected,
          to: this.toSelected,
          date: this.date,
        },
      });
    }
  }
}
