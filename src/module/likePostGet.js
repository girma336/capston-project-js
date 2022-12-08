export const postLike = async (id) => {
  const newComment = {
    item_id: id,
  };
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IJLQ0rG3zJEZNy3n1BHB/likes',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newComment),
    });
  await data;
};

export const getLike = async () => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IJLQ0rG3zJEZNy3n1BHB/likes');
  const jsonData = await data.json();
  return jsonData;
};

export const getLikeForEach = async (mealId) => {
  const liked = await getLike();
  let like = 0;
  liked.forEach((element) => {
    if (Number(element.item_id) === Number(mealId)) {
      like = element.likes;
    }
  });

  return like;
};
