import Service, { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentSearchService extends Service {
  @tracked allBuses = {};
  @tracked currentSearch = {};

  setAllBuses(buses) {
    this.allBuses = buses;
  }

  getAllBuses() {
    return this.allBuses;
  }

  setCurrentSearch(search) {
    this.currentSearch = search;
  }
  getCurrentSearch() {
    return this.currentSearch;
  }
}
