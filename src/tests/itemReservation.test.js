import reserveCount from '../module/reservations/itemReservation.js';

describe('Test reservation count', () => {
  it('Search with id= 52813 and their length equal to 2', async () => {
    const data = await reserveCount('52893');
    // console.log(data)
    expect(data.length).toEqual(1);
  });
  it('Search with id= 52813 and their length not equal to 5', async () => {
    const data = await reserveCount('53049');
    // console.log(data)
    expect(data.length).not.toEqual(5);
  });
  it('Search with id= 52813 and their length equal to 3', async () => {
    const data = await reserveCount('53050');
    // console.log(data)
    expect(data.length).toEqual(3);
  });
});