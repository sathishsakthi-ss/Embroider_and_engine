import Component from '@ember/component';
import { service } from '@ember/service';

export default class NotificationMessageComponent extends Component {
  @service notification;

  get message() {
    return this.notification.message;
  }

  get type() {
    return this.notification.type;
  }

  get isVisible() {
    return this.notification.isVisible;
  }
}
