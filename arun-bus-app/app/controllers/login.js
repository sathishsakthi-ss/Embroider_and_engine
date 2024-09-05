import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service, inject } from '@ember/service';
import { action } from '@ember/object';

export default class LoginController extends Controller {
  queryParams = ['isOperatorPage'];
  @service router;
  @service notification;
  @service store;
  @tracked signUpvalidate;
  @tracked signUpvalidate;
  @tracked usersArray = {};

  @action
  async login(input) {
    const username = input.email;
    const password = input.password;

    if (username && password) {
      let currentUser = {};
      const places = await this.store
        .queryRecord('user', { email: username })
        .then((user) => {
          currentUser = user;

          if (currentUser.get('password') === password) {
            let name = currentUser.get('name');
            let isOperator = currentUser.get('operator');

            sessionStorage.setItem('current_user', name);
            sessionStorage.setItem(
              'current_user_email',
              currentUser.get('email'),
            );
            sessionStorage.setItem('is_operator', isOperator);
            this.store.unloadRecord(this.model.model);
            if (isOperator == 'true') {
              this.router.transitionTo('booking-page');
            } else {
              this.redirectTo();
            }
            this.notification.showNotification('success', 'Login successfull!');
          } else {
            this.notification.showNotification(
              'failure',
              'Password is incorrect !',
            );
          }
        })
        .catch((error) => {
          console.log(error);
          this.notification.showNotification('failure', 'Invalid Username !');
        });
    }
  }

  get isFormValid() {
    return this.model.signup_model.validations.isValid;
  }

  @action
  async signup(event) {
    this.signUpvalidate = true;
    event.preventDefault();
    if (this.isFormValid) {
      let currentUser = {
        id: '10',
        name: this.model.signup_model.get('name'),
        email: this.model.signup_model.get('email'),
        password: this.model.signup_model.get('password'),
        operator: this.model.signup_model.get('operator'),
      };
      this.store.unloadRecord(this.model.signup_model);
      const newUser = this.store.createRecord('user', currentUser);
      newUser
        .save()
        .then((resp) => {
          this.notification.showNotification(
            'success',
            'Singup successfull, Welcome ' + newUser.get('name') + ' !',
          );
          this.router.transitionTo('homepage');
        })
        .catch((error) => {
          console.log(error);
          this.notification.showNotification(
            'failure',
            'Something went wrong, please try later !',
          );
        });
    }
  }

  redirectTo() {
    let previousTransition = this.previousTransition;
    if (previousTransition) {
      this.router.transitionTo(previousTransition.from.name, {
        queryParams: previousTransition.from.queryParams,
      });
    } else {
      this.router.transitionTo('homepage');
    }
  }

  @action
  processSignup(event) {
    event.preventDefault();
    this.signUpvalidate = true;
  }
   
}
