import Service from '@ember/service';
import { inject } from '@ember/service';

export default class LocalStorageService extends Service {
  @inject store;

  async get() {
    const allusers = this.store.findAll('user');
    console.log(allusers);
  }
}
