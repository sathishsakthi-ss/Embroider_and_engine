import Component from '@ember/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ProfileComponent extends Component {
  @service router;
  @service notification;

  @action
  logout() {
    sessionStorage.removeItem('is_operator');
    sessionStorage.removeItem('current_user');
    sessionStorage.removeItem('current_user_email');

    this.set('username', null);
    this.set('is_operator', null);
    this.router.transitionTo('homepage');

    this.notification.showNotification('success', 'Logout successfully!');
  }
}
