import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';
import { service } from '@ember/service';
// import popupObject from 'green-bus-app/common-js/popup';
export default class BookingPopupComponent extends Component {
  @action
  closePopup() {
    // this.set('show', 'hide');

  }
}
