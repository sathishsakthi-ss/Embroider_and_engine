import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },

    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.get('/places', (schema, request) => {
    return schema.places.all();
  });

  this.get('/buses', (schema, request) => {
    return schema.buses.all();
  });

  this.get('/seats', (schema, request) => {
    return schema.seats.all();
  });

  this.get('/users', (schema, request) => {
    if (request.queryParams) {
      return schema.users.findBy(request.queryParams);
    }

    return schema.users.all();
  });

  this.get('/users/:id/tickets', (schema, request) => {
    let user = schema.users.find(request.params.id);
    return user.tickets;
  });

  this.get('/users/:id/buses', (schema, request) => {
    let user = schema.users.find(request.params.id);
    return user.buses;
  });

  this.post('/users', (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    let user = attrs.data.attributes;
    return schema.users.create(user);
  });

  this.post('/passengers', (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    let passenger = attrs.data.attributes;
    return schema.passengers.create(passenger);
  });

  this.get('/tickets', (schema, request) => {
    if (request.queryParams) {
      return schema.tickets.findBy(request.queryParams);
    }
    return schema.tickets.all();
  });

  this.get('/tickets/:id');

  this.post('/tickets', (schema, request) => {
    debugger
    const attrs = JSON.parse(request.requestBody);
    delete attrs.data.id;
    return schema.tickets.create(attrs.data);
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */
}
