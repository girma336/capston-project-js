const popupList = async (mealId) => {
  const popupContainer = document.querySelector('.home');
  const mealData = await fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const mealJson = await mealData.json();
  const data = mealJson.meals;
  const mealImg = data[0].strMealThumb;
  const name = data[0].strMeal;

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
  });
};

export default popupList;