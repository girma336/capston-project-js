import addReserve from './addReserve.js';

export const postReserve = async (id, user, start, end) => {
  const newComment = {
    item_id: id,
    username: user,
    date_start: start,
    date_end: end,
  };
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IJLQ0rG3zJEZNy3n1BHB/reservations/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newComment),
    });
  await data;
};

export const getReserve = async (id) => {
  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IJLQ0rG3zJEZNy3n1BHB/reservations?item_id=${id}`);
  const jsonData = await data.json();
  addReserve(jsonData);
  return jsonData;
};
