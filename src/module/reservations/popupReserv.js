import fetch from 'cross-fetch';
import { getReserve, postReserve } from './reserveGetPost.js';

const popupReserve = async (mealId) => {
  const popupContainer = document.querySelector('.home-reserve');
  const mealData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const mealJson = await mealData.json();
  const data = mealJson.meals;
  const mealImg = data[0].strMealThumb;
  const name = data[0].strMeal;

  const newData = await getReserve(mealId);
  let len = newData.length;
  if (len === undefined) {
    len = 0;
  }

  const description = data[0].strInstructions;
  popupContainer.innerHTML = `
      <div class="popup-home">
          <div class="popup-con">
              <div class="closeBtn claseBtn-r">
                  <i class="fa fa-close"></i>
              </div>
              <div class="absolute-pop">
                  <div class="popup-img">
                      <img class="movie-banner-img"
                          src="${mealImg}"
                          alt="${name} Banner" />
                  </div>
                  <div class="name-popup">
                      <p>${name}</p>
                  </div>
                  <div class="description">
                      <p>${description}</p>
                  </div>
                  <div class="count-com">
                      <div class="num-com"><h2>Reservation (<span id="__${mealId}">${len}</span>)</h2><div>
                      <div class="add-comment">
                          <div class="List-item">
                              <ul class="add-comment-list-r">
                              </ul>
                      </div>
                      </div>
                  </div>
                  <div class="form-new">
                      <div class="center-div">
                          <h2>Add Reservation</h2>
                      </div>
                      <form class="form-popup-r">
                          <input type="text" id="user-name" placeholder="name" required>
                          <br>
                          <input type="text" id="start_date" placeholder="start date 2022-11-11" required>
                          <br>
                          <input type="text" id="end_date" placeholder="end date 2022-11-24" required>
                          <br>
                          <button type="submit" class="submit-btn" id="${mealId}">Add Reserve</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>   
      `;

  const closeBtn = document.querySelector('.claseBtn-r');
  closeBtn.addEventListener('click', () => {
    popupContainer.classList.add('hide');
    popupContainer.classList.remove('opacity-class');
  });

  const form = document.querySelector('.form-popup-r');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = document.getElementById('user-name').value;
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;
    const startDataOne = new Date(startDate);
    const endDateOne = new Date(endDate);

    const monthEnd = endDateOne.getUTCMonth() + 1;
    const dayEnd = endDateOne.getUTCDate();
    const yearEnd = endDateOne.getUTCFullYear();

    const monthStart = startDataOne.getUTCMonth() + 1;
    const dayStart = startDataOne.getUTCDate();
    const yearStart = startDataOne.getUTCFullYear();

    const start = `${yearStart}/${monthStart}/${dayStart}`;

    const end = `${yearEnd}/${monthEnd}/${dayEnd}`;

    const reserveLen = document.getElementById(`__${mealId}`);
    const listAdd = document.querySelector('.add-comment-list-r');
    listAdd.innerHTML += `
    <li>${start}  -  <span>${end}</span> by : <span>${user}</span></li>
    `;
    let currentComment = Number(reserveLen.innerHTML);
    currentComment += 1;
    reserveLen.innerHTML = currentComment;
    form.reset();
    postReserve(mealId, user, start, end);
  });
  getReserve(mealId);
};

export default popupReserve;