import EmberRouter from '@embroider/router';
import config from 'green-bus/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('homepage', { path: '' });
  this.route('booked-tickets');
  this.route('booking-page', function () {
    this.route('book-now');
  });
  this.route('homepage');
  this.route('login-operator');
  this.route('login');
  this.route('page-not-found');
  this.mount('report');
});
