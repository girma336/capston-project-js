const addComment = async (data) => {
  if (data !== undefined) {
    const commentAdd = document.querySelector('.add-comment-list');
    data.forEach((element) => {
      commentAdd.innerHTML += `
      <li>${element.username}  |  <span>${element.comment}</span>  | <span>${element.creation_date}</span></li>
    `;
    });
  }
};

export default addComment;