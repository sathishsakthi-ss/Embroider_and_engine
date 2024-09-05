import Service, { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginDetailsService extends Service {
  @tracked allUsers = {};
  @tracked loginneduser = {};

  setAllUsers(userArray) {
    this.allUsers = userArray;
  }

  getAllUsers() {
    return this.allUsers;
  }

  addLoginUser(user) {
    this.loginneduser = user;
  }
  getLoginUser() {
    return this.loginneduser;
  }
}
