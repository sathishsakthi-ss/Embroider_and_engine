export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.create('place', { name: 'Chennai' });
  server.create('place', { name: 'Madurai' });
  server.create('place', { name: 'Coimbatore' });

  server.create('user', {
    id: 1,
    name: 'Arun',
    email: 'arun@abc.com',
    password: 'Arun@123',
    operator: false,
  });

  server.create('user', {
    id: 2,
    name: 'Ruban',
    email: 'ruban@abc.com',
    password: 'Ruban@123',
    operator: false,
  });

  const ownerUser = server.create('user', {
    id: 3,
    name: 'Harish',
    email: 'harish@abc.com',
    password: 'Harish@123',
    operator: true,
  });

  const bus1 = server.create('bus', {
    code: 'abc1',
    name: 'Sundara Travels',
    from: 'Chennai',
    fare: '799',
    to: 'Coimbatore',
    owner: ownerUser,
    startTime: '23:10',
    endTime: '04:10',
  });

  const bus2 = server.create('bus', {
    code: 'abc2',
    name: 'Marvel Travels',
    from: 'Chennai',
    fare: '899',
    to: 'Coimbatore',
    owner: ownerUser,
    startTime: '23:10',
    endTime: '04:10',
  });

  const bus3 = server.create('bus', {
    code: 'abc3',
    name: 'Navi Travels',
    from: 'Chennai',
    to: 'Madurai',
    fare: '999',
    owner: ownerUser,
    startTime: '23:10',
    endTime: '04:10',
  });

  server.create('seat', {
    code: 'abc1',
    date: '2024-04-29',
    availableSeats: 12,
  });

  server.create('seat', {
    code: 'abc1',
    date: '2024-04-30',
    availableSeats: 5,
  });

  server.create('seat', {
    code: 'abc2',
    date: '2024-04-29',
    availableSeats: 8,
  });

  server.create('seat', {
    code: 'abc2',
    date: '2024-04-30',
    availableSeats: 11,
  });

  server.create('seat', {
    code: 'abc3',
    date: '2024-04-29',
    availableSeats: 2,
  });

  server.create('seat', {
    code: 'abc3',
    date: '2024-04-30',
    availableSeats: 5,
  });

  ownerUser.buses = [bus1, bus2, bus3];
  // server.createList('post', 10);

  const passenger1 = server.create('passenger', {
    name: 'Arun',
    age: 22,
  });

  const passenger2 = server.create('passenger', {
    name: 'Ruban',
    age: 23,
  });

  server.create('ticket', {
    date: '29-04-2024',
    fare: '1400',
    bus: bus1,
    passengers: [passenger1, passenger2],
    user: ownerUser,
  });
}
