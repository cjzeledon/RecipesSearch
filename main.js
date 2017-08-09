let body = document.querySelector("body");
let recipe_section = document.querySelector("section");

// create eventlistener for submit button
// function that runs on event happening takes the text for the input box
// puts that text into the url for the fetch

// search_load(find){
//   findValue = document.querySelector("input[type=submit]");
//   console.log("value");
// }

function JSonMyWay(dropthatAPI){
  return dropthatAPI.json();
}

function recipes(givetoAPI){
console.log(givetoAPI);

  let something = '';

  for (let i=0; i < givetoAPI.results.length; i++){

    let backupImage = `<img src="http://via.placeholder.com/140x100"></a>`;
    if (givetoAPI.results[i].thumbnail === ''){
      let missingPhoto = `
          <div class="search_giverecipes">
          <figure>
          <a href="${givetoAPI.results[i].href}" target="_blank">
          ${backupImage}
          <figcaption>${givetoAPI.results[i].title}</figcaption>
          <figure>
          </div>
          `;


      something += missingPhoto;
    } else {
    let section = `
        <div class="search_giverecipes">
        <figure>
        <a href="${givetoAPI.results[i].href}" target="_blank">
        <img src="${givetoAPI.results[i].thumbnail}"> </a>
        <figcaption>${givetoAPI.results[i].title}</figcaption>
        <figure>
        </div>
        `;

        // for (z = 0; z < givetoAPI.results.length; z++){
          // let backupImage = `<img src="http://via.placeholder.com/140x100">`;
          // if (givetoAPI.results[z].thumbnail === null){
          //   givetoAPI.results[z].thumbnail = backupImage;
          // }
          // section += backupImage;
        // }
    something += section;
  }
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
