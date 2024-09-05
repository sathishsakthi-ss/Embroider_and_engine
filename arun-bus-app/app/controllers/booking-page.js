import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';
import { service, inject } from '@ember/service';

export default class BookingPageController extends Controller {
  @service notification;
  @inject store;
  @tracked id = 2;
  queryParams = ['from', 'to', 'date'];
  @tracked popShow = 'show';
  @tracked busPopShow = 'hide';
  @tracked fare = 0;
  @tracked current_bus;
  @tracked passengers = [
    this.store.createRecord('passenger', {
      id: '1',
      name: sessionStorage.getItem('current_user'),
    }),
  ];
  @tracked showValidationsForPassengers = false;

  @service router;

  @action
  showPopup(bus) {
    let loginUserName = sessionStorage.getItem('current_user');
    if (loginUserName) {
      this.current_bus = bus;
      this.popShow = 'show';
      this.fare = bus.get('fare');
      this.router.transitionTo('booking-page.book-now');
    } else {
      this.notification.showNotification('failure', 'Login to Book Tickets');
    }
  }

  @action
  removePassenger(index) {
    if (this.passengers.length > 1) {
      this.store.unloadRecord('passenger', this.passengers.pop());
      this.set('passengers', this.passengers);
    } else {
      this.notification.showNotification(
        'failure',
        'Atleast one passenger need for booking tickets !',
      );
    }
  }

  @action closePop(){
    this.router.transitionTo('booking-page');
  }

  @action
  async bookTickets() {
    this.showValidationsForPassengers = true;
    let usersValid = true;
    this.passengers.forEach((user) => {
      if (!user.validations.isValid) {
        usersValid = false;
      }
    });

    if (usersValid) {

      // this.store.unloadAll('passenger');
      // this.store.unloadAll('ticket');

      let current_ticket = {
        id: '4',
        bus: this.current_bus,
        fare: this.passengers.length * Number.parseInt(this.current_bus.fare),
        date: this.model.journey.date,
        passengers: this.passengers,
      };
      // Wait for all passenger records to be saved
      await Promise.all(this.passengers.map((record) => record.save()));
      this.store
        .createRecord('ticket', current_ticket)
        .save()
        .then((ticket) => {
          this.notification.showNotification('success', 'Tickets Booked !');
          this.router.transitionTo('booked-tickets');
        })
        .catch((error) => {
          this.notification.showNotification(
            'failure',
            'Something went wrong !',
          );
        });
    }
  }

  @action
  addPassenger() {
    this.id = this.id + 1;
    this.passengers.push(
      this.store.createRecord('passenger', { id: this.id.toString() }),
    );
    this.set('passengers', this.passengers);
  }

  @action
  showAddBusForm() {
    this.busPopShow = 'show';
  }

  @action
  addBus(event) {
    if (this.busName) {
      this.busPopShow = 'hide';
      event.preventDefault();
    }
  }
}
