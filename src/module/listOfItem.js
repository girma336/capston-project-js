import popupList from './popupList.js';
import { getLikeForEach, postLike } from './likePostGet.js';

const listItemHome = async () => {
  const mealData = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
  const mealJson = await mealData.json();
  const data = mealJson.meals;

  const totalMeal = document.getElementById('totalMeals');
  totalMeal.insertAdjacentHTML('afterend', `(${data.length})`);
  const mainContainer = document.querySelector('.main-Container');
  for (let i = 0; i < data.length; i += 1) {
    const mealImg = data[i].strMealThumb;
    let name = data[i].strMeal;
    const mealId = data[i].idMeal;

    let likeNum = 0;
    getLikeForEach(mealId).then((num) => {
      likeNum = num;
      if (name.length > 15) name = `${name.substring(0, 15)}...`;
      mainContainer.innerHTML += `
        <div class="main-container-sup">
            <div class="img-conta">
                <img class="movie-banner-img"
                    src="${mealImg}"
                    alt="${name} Banner" />
            </div>
            <div class="name-like">
               <div class="meal-name">
                  <p>${name}</p>
                </div>
                <div class="meal-like">
                    <i id="${mealId}" class="liked_btn fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="num-like">
                <p><span id="_${mealId}">${likeNum}</span>  likes</p>
            </div>
        <div class="comment-rese">
            <button class="commentBtn" id="${mealId}">comment</button>
        </div>

        </div>`;

      const likeBtn = document.querySelectorAll('.liked_btn');
      likeBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          btn.classList.toggle('fa-regular');
          btn.classList.toggle('fa-solid');
          if (btn.classList.contains('fa-solid')) {
            const likes = document.getElementById(`_${e.target.id}`);
            let currentLike = Number(likes.innerHTML);
            currentLike += 1;
            likes.innerHTML = currentLike;
            postLike(e.target.id);
          } else {
            const likes = document.getElementById(`_${e.target.id}`);
            let currentLike = Number(likes.innerHTML);
            currentLike -= 1;
            likes.innerHTML = currentLike;
          }
        });
      });
    })
      .then(() => {
        const commentBtn = document.querySelectorAll('.commentBtn');
        const popupContainer = document.querySelector('.home');
        commentBtn.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            popupList(e.target.id);
            popupContainer.classList.remove('hide');
            popupContainer.classList.add('opacity-class');
          });
        });
      });
  }
};

export default listItemHome;