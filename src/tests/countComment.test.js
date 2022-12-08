import getComment from '../module/countComment.js';

describe('Test comment counter', () => {
  it('search with given id 52893 ie equal to 3', async () => {
    const data = await getComment('52893');
    expect(data.length).toEqual(3);
  });
  it('search with given id 53050 ie equal to 4', async () => {
    const data = await getComment('53050');
    expect(data.length).toEqual(4);
  });
  it('search with given id 53050 is not equal to 10', async () => {
    const data = await getComment('52893');
    expect(data.length).not.toEqual(10);
  });
});