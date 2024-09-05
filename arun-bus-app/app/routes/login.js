import Route from '@ember/routing/route';
import { inject, service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import User from '../models/user';

export default class LoginRoute extends Route {
  // @service('login-details') loginService;
  @inject store;
  @service router;

  beforeModel() {
    if (sessionStorage.getItem('current_user')) {
      this.currentUser = sessionStorage.getItem('current');
    }
    this.store.unloadAll('user');
  }

  async model(params) {
    var container = this.container;
    var operatorChecked =
      params.isOperatorPage && params.isOperatorPage == 'true'
        ? 'checked'
        : null;

    return {
      isOperatorPage: params.isOperatorPage,
      operatorChecked: operatorChecked,
      signup_model: this.store.createRecord('user', {
        id: '-1',
        operator: params.isOperatorPage && params.isOperatorPage == 'true' ? true : false,
      }),
    };
  }
}
