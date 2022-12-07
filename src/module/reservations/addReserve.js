const addReserve = async (data) => {
  if (data !== undefined) {
    const commentAdd = document.querySelector('.add-comment-list');
    data.forEach((element) => {
      commentAdd.innerHTML += `
        <li>${element.date_start}  -  <span>${element.date_end}</span>  by : <span>${element.username}</span></li>
      `;
    });
  }
};

export default addReserve;