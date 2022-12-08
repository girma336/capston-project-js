import fetch from 'cross-fetch';

const getComment = async (id) => {
  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IJLQ0rG3zJEZNy3n1BHB/comments?item_id=${id}`);
  const jsonData = await data.json();
  return jsonData;
};

export default getComment;