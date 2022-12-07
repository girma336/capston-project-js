const itemConter = async (letter) => {
  const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  const jsonData = await respons.json();
  return jsonData;
};

module.exports = itemConter;