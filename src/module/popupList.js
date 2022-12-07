import { getComment, postComment } from './commentPostGet.js';

const popupList = async (mealId) => {
  const popupContainer = document.querySelector('.home');
  const mealData = await fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const mealJson = await mealData.json();
  const data = mealJson.meals;
  const mealImg = data[0].strMealThumb;
  const name = data[0].strMeal;

  const newData = await getComment(mealId);
  let len = newData.length;
  if (len === undefined) {
    len = 0;
  }

  const description = data[0].strInstructions;
  popupContainer.innerHTML = `
    <div class="popup-home">
        <div class="popup-con">
            <div class="closeBtn">
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
                    <div class="num-com"><h2>Comment (<span id="_${mealId}">${len}</span>)</h2><div>
                    <div class="add-comment">
                        <div class="List-item">
                            <ul class="add-comment-list">
                            </ul>
                    </div>
                    </div>
                </div>
                <div class="form-new">
                    <div class="center-div">
                        <h2>Add comment</h2>
                    </div>
                    <form class="form-popup">
                        <input type="text" id="user" placeholder="name" required>
                        <br>
                        <textarea cols="30" rows="6" placeholder="comment" id="comment" required></textarea>
                        <br>
                        <button type="submit" class="submit-btn" id="${mealId}">Add Comment</button>
                    </form>
                </div>
            </div>
        </div>
    </div>   
    `;
  const closeBtn = document.querySelector('.closeBtn');
  closeBtn.addEventListener('click', () => {
    popupContainer.classList.add('hide');
    popupContainer.classList.remove('opacity-class');
  });

  const form = document.querySelector('.form-popup');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = document.getElementById('user').value;
    const comment = document.getElementById('comment').value;

    const commentLen = document.getElementById(`_${mealId}`);
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; // months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const listAdd = document.querySelector('.add-comment-list');
    listAdd.innerHTML += `
    <li>${user}  |  <span>${comment}</span>  | <span>${year}-${month}-${day}</span></li>
    `;
    let currentComment = Number(commentLen.innerHTML);
    currentComment += 1;
    commentLen.innerHTML = currentComment;

    form.reset();
    postComment(mealId, user, comment);
  });
  getComment(mealId);
};
export default popupList;