import itemConter from '../module/itemCounter.js';

describe('Add test for Item Counter', () => {
  it("Search with query 'c' is equal to 47", async () => {
    const data = await itemConter('c');
    expect(data.meals.length).toEqual(47);
  });
  it("Search with query 'b' is equal to 33", async () => {
    const data = await itemConter('b');
    expect(data.meals.length).toEqual(33);
  });

  it("Search with query 'a' is not equal to 6", async () => {
    const data = await itemConter('a');
    expect(data.meals.length).not.toEqual(6);
  });
});