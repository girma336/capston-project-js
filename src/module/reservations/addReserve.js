const addReserve = async (data) => {
  if (data !== undefined) {
    const reserveAdd = document.querySelector('.add-comment-list-r');
    data.forEach((element) => {
      reserveAdd.innerHTML += `
        <li>${element.date_start}  -  <span>${element.date_end}</span>  by : <span>${element.username}</span></li>
      `;
    });
  }
};

export default addReserve;