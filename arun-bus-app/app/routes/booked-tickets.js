import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import { service, inject } from '@ember/service';

export default class BookedTicketsRoute extends Route {
  @service router;
  @inject store;

  beforeModel(transition) {
    if (sessionStorage.getItem('is_operator') == 'true') {
      alert(
        'Sorry, you are not allowed to view this page. You will be redirected to Homepage !',
      );
      //transition.abort();
    }
  }

  async model() {
    let bookedTickets = [];
    await this.store.findRecord('ticket', '1').then((tickets) => {
      // tickets.map(function (ticket) {
      //   bookedTickets.push(ticket);
      // });
    });

    var tickets = [
      {
        from: 'Coimbatore',
        to: 'Chennai',
        passengers: 'Arun, Harish',
        date: '21-03-2024',
        travels: 'Vel travels',
      },
      {
        from: 'Chennai',
        to: 'Coimbatore',
        passengers: 'Arun',
        date: '18-03-2024',
        travels: 'Marvel travels',
      },
      {
        from: 'Chennai',
        to: 'Erode',
        passengers: 'Arun, Kalai',
        date: '01-03-2023',
        travels: 'Vel travels',
      },
    ];
    return {
      tickets: tickets,
      loginUserName: sessionStorage.getItem('current_user'),
      isOperator: sessionStorage.getItem('is_operator'),
      bookedTickets : bookedTickets
    };
  }
}
