const listItemHome = async () => {
  const mealData = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
  const mealJson = await mealData.json();
  const data = mealJson.meals;

  const mainContainer = document.querySelector('.main-Container');
  for (let i = 0; i < data.length; i += 1) {
    const mealImg = data[i].strMealThumb;
    let name = data[i].strMeal;
    const mealId = data[i].idMeal;

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
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div class="num-like">
                <p><span id="_${mealId}}">${7}</span>  likes</p>
            </div>
        <div class="comment-rese">
            <button class="commentBtn" id="${mealId}">comment</button>
        </div>

        </div>`;
  }
};

export default listItemHome;