let countries = document.getElementById("areas");

async function getAreas() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  let data = await response.json();
  diplayAreas(data.meals);
}

function diplayAreas(areas) {
  let allAreas = "";
  for (let i = 0; i < areas.length; i++) {
    allAreas += `
        <a href= "#" class="col-md-3 text-center" onclick="getMealsOfArea('${areas[i].strArea}')">
          <div>
            <img src="../unnamed.jpg" class="img-fluid rounded-5" alt="" />
          </div>
          <p class="text-center mt-2 text-white fs-4">${areas[i].strArea} </p>
        </a>
`;
  }
  countries.innerHTML = allAreas;
}
getAreas();

async function getMealsOfArea(country) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
  );
  let data = await response.json();
  displayMeals(data.meals);
}

function displayMeals(meals) {
  let allMeals = "";
  for (let i = 0; i < meals.length; i++) {
    allMeals += `
    
    <div class="col-sm-3">
<a href="#" class="position-relative overflow-hidden d-block rounded-2"  onclick="mealDetails(${meals[i].idMeal})">
<img
src="${meals[i].strMealThumb}"
class="img-fluid rounded-2"
alt="food"
/>
<div
class="position-absolute w-100 h-100 bg-white start-0 bg-opacity-75 d-flex align-items-center ps-2 fs-2 fw-semibold text-dark layer"
>
${meals[i].strMeal}
</div>
</a>
</div>
    `;
  }
  countries.innerHTML = allMeals;
}
async function mealDetails(id) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let data = await response.json();
  displayMeal(data.meals);
}
function displayMeal(data) {
  let meal = data;
  let wordsOfTags = meal[0].strTags;
  let detailsOfMeal = `
        <div class="col-md-4">
          <div>
            <div class="w-100">
              <img
                src="${meal[0].strMealThumb}"
                class="img-fluid rounded-2"
                alt="food"
              />
            </div>
            <p class="text-white fs-2 mt-1">${meal[0].strMeal}</p>
          </div>
        </div>
        <div class="col-md-8">
          <div class="text-white">
            <h2>Instructions</h2>
            <p>
            ${meal[0].strInstructions}
            </p>
            <p class="fs-3 fw-semibold">Area : ${meal[0].strArea}</p>
            <p class="fs-3 fw-semibold">Category : ${meal[0].strCategory}</p>
            <p class="fs-3 fw-semibold">Recipes :</p>
            <div class="d-flex flex-wrap gap-3">
              <span class="p-2 bg-info rounded-2">${meal[0].strMeasure1} ${
    meal[0].strIngredient1
  } </span>
              <span class="p-2 bg-info rounded-2">${meal[0].strMeasure2} ${
    meal[0].strIngredient2
  } </span>
              <span class="p-2 bg-info rounded-2">${meal[0].strMeasure3} ${
    meal[0].strIngredient3
  } </span>
              <span class="p-2 bg-info rounded-2">${meal[0].strMeasure4} ${
    meal[0].strIngredient4
  } </span>
              <span class="p-2 bg-info rounded-2">${meal[0].strMeasure5} ${
    meal[0].strIngredient5
  } </span>
            </div>
            <p class="fs-3 fw-semibold mt-3">Tags :</p>
            <div>
              <span class="bg-warning text-dark p-2 rounded-2">${
                wordsOfTags == null ? "Food" : wordsOfTags
              }</span>
            </div>
            <div class="buttons mt-5">
              <a href="${
                meal[0].strSource
              }" target="_blank" class="btn btn-primary text-white py-2 px-4 me-2"
                >Source</a
              >
              <a href="${
                meal[0].strYoutube
              }" target="_blank" class="btn btn-danger text-white py-2 px-4"
                >Youtube</a
              >
            </div>
          </div>
        </div>
`;
  countries.innerHTML = detailsOfMeal;
}
