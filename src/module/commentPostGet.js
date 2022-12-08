import fetch from 'cross-fetch';
import addComment from './addComment.js';

export const postComment = async (id, user, comment) => {
  const newComment = {
    item_id: id,
    username: user,
    comment,
  };
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IJLQ0rG3zJEZNy3n1BHB/comments/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newComment),
    });
  await data;
};

export const getComment = async (id) => {
  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IJLQ0rG3zJEZNy3n1BHB/comments?item_id=${id}`);
  const jsonData = await data.json();
  addComment(jsonData);
  return jsonData;
};
