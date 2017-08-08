let body = document.querySelector("body");
let recipe_section = document.querySelector("section");

function JSonMyWay(dropthatAPI){
  return dropthatAPI.json();
}

function recipes(givetoAPI){
  console.log(givetoAPI);
  console.log(givetoAPI.results[0].href);
  console.log(givetoAPI.results[0].thumbnail);
  console.log(givetoAPI.results[0].title);

let something = '';

  for (let i=0; i < givetoAPI.results.length; i++){
    let section = `
    <div class="search_results">
        <div class="search_giverecipes">
        <a href="${givetoAPI.results[i].href}" target="_blank"><img src="${givetoAPI.results[i].thumbnail}"></a>
        <p>${givetoAPI.results[i].title}</p>
        </div>
    </div>
    `;
      if (givetoAPI.results[i].thumbnail === " "){
        section = `
        <img src="http://via.placeholder.com/140x100">
        `;
        something;
      }
something += section;
  }

recipe_section.innerHTML = something;
}

function ouch(err) {
  console.log(err);
}

fetch ("http://recipepuppyproxy.herokuapp.com/api/?q=omelet")
  .then(JSonMyWay)
  .then(recipes)
  .catch(ouch);
