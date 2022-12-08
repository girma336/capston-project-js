import fetch from 'cross-fetch';

const reserveCount = async (id) => {
  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IJLQ0rG3zJEZNy3n1BHB/reservations?item_id=${id}`);
  const jsonData = await data.json();
  return jsonData;
};

export default reserveCount;