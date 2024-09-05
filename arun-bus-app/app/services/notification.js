import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NotificationService extends Service {
  @tracked message = '';
  @tracked type = '';
  @tracked isVisible = false;

  @action
  showNotification(type, message) {
    this.type = type;
    this.message = message;
    this.isVisible = true;

    setTimeout(() => this.hideNotification(), 3000);
  }

  @action
  hideNotification() {
    this.isVisible = false;
  }
}
