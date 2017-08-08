let body = document.querySelector("body");

function JSonMyWay(dropthatAPI){
  return dropthatAPI.json();
}

function recipes(givetoAPI){
  console.log(givetoAPI);
  console.log(givetoAPI.results[0].href);
  console.log(givetoAPI.results[0].thumbnail);
  console.log(givetoAPI.results[0].title);
  let section = `
  <div class="form_searchbox">
    <form>
    <input type="search" results="5" placeholder="Search Recipes">
    <input type="submit">
    </form>
  </div>
`;
  // <div class="search_results">
  //   for (let i=0; i > givetoAPI.results.length; i++){
  //     <div class="search_giverecipes">
  //     <a href="${givetoAPI.results[i].href}" target="_blank"><img src="${givetoAPI.results[i].thumbnail}" alt="${givetoAPI.results[i].title}"></a>
  //     <p>${givetoAPI.results[i].title}</p>
  //     </div>
  //   }
  // </div>
  // `;
  body.innerHTML = section;
}

function ouch(err) {
  console.log(err);
}

fetch ("http://recipepuppyproxy.herokuapp.com/api/?q=omelet")
  .then(JSonMyWay)
  .then(recipes)
  .catch(ouch);
