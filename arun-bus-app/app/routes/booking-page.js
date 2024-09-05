import Route from '@ember/routing/route';
import { inject, service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookingPageRoute extends Route {
  @inject store;
  @service router;
  // @service('login-details') loginService;
  cssId = 'popup-css';
  jsId = 'popup-js';

  activate(transition) {
    if (!document.getElementById(this.cssId)) {
      let link = document.createElement('link');
      link.id = this.cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = this.router.rootURL + 'assets/popup.css';
      document.head.appendChild(link);
    }
  }

  deactivate(transition) {
    let linkElement = document.getElementById(this.linkElementId);
    if (linkElement) {
      document.head.removeChild(linkElement);
    }
    if (
      !sessionStorage.getItem('current_user') &&
      transition.targetName != 'homepage'
    ) {
      let loginController = this.controllerFor('login');
      loginController.previousTransition = transition;
    }
  }

  async model(params) {
    try {
      let busCodeVsBus = {};
      let busOwnerVsBus = {};

      const buses = await this.store.findAll('bus').then((buses) => {
        buses.map(function (bus) {
          busCodeVsBus[bus.get('code')] = bus;
          if (busOwnerVsBus[bus.get('owner')] != undefined) {
            busOwnerVsBus[bus.get('owner')].push(bus);
          } else {
            busOwnerVsBus[bus.get('owner')] = [];
            busOwnerVsBus[bus.get('owner')].push(bus);
          }
        });
      });
      let availableBuses = {};
      let busCodeVsDateSeat = {};
      const busesDateSeat = await this.store
        .findAll('seat')
        .then((busesDateSeat) => {
          busesDateSeat.map(function (date) {
            busCodeVsDateSeat[date.get('code')] = date;
          });

          busesDateSeat.map(function (seat) {
            let busCode = seat.get('code');
            let bus = busCodeVsBus[busCode];

            let seachString =
              bus.get('from') + '-' + bus.get('to') + '-' + seat.get('date');

            if (availableBuses[seachString] != undefined) {
              bus['availableSeats'] = seat.get('availableSeats');
              availableBuses[seachString].push(bus);
            } else {
              bus['availableSeats'] = seat.get('availableSeats');
              availableBuses[seachString] = [];
              availableBuses[seachString].push(bus);
            }
          });
        });

      //   console.log(availableBuses);

      const searchString = params.from + '-' + params.to + '-' + params.date;
      availableBuses[searchString];
      let availableBusesFinal = availableBuses[searchString];
      // const loginUser = this.loginService.getLoginUser();
      // let loginUserName =
      //   Object.keys(loginUser).length > 0 ? loginUser.get('name') : null;
      // let isOperator =
      //   Object.keys(loginUser).length > 0 ? loginUser.get('operator') : false;

      let loginUserName = sessionStorage.getItem('current_user');
      let isOperator = sessionStorage.getItem('is_operator');

      if (isOperator == 'true') {
        availableBusesFinal =
          busOwnerVsBus[sessionStorage.getItem('current_user_email')];
      }

      return {
        journey: params,
        buses: availableBusesFinal,
        loginUserName: loginUserName,
        isOperator: isOperator,
      };
    } catch (error) {
      console.error('Error while fetching bus:', error);
    }
  }
}
