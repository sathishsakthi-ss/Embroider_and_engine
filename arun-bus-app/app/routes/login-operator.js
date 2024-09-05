import Route from '@ember/routing/route';
import { inject, service } from '@ember/service';

export default class LoginOperatorRoute extends Route {
  @service('login-details') loginService;
  @inject store;

  async model() {
    const users = await this.store.findAll('user');
    let usersArray = {};
    users.map(function (user) {
      usersArray[user.get('email')] = user;
    });
    this.loginService.setAllUsers(usersArray);
  }
}
