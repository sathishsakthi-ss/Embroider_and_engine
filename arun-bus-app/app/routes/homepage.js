import Route from '@ember/routing/route';
import { service, inject } from '@ember/service';
import { action } from '@ember/object';

export default class HomepageRoute extends Route {
  @inject store;
  // @service('login-details') loginService;
  @service router;

  async model(params) {
    try {
      let placesArray = [];
      const places = await this.store.findAll('place').then((places) => {
        places.map(function (place) {
          placesArray.push(place.get('name'));
        });
      });
      return {
        places: placesArray,
        loginUserName: sessionStorage.getItem('current_user'),
        isOperator: sessionStorage.getItem('is_operator'),
      };
    } catch (error) {
      console.error('Error while fetching user:', error);
    }
  }
}
