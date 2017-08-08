let section = document.querySelector("section");

function JSonMyWay(dropthatAPI){
  let results = dropthatAPI.json();
  return results;
}

function recipes(dropthatAPI){
  console.log(dropthatAPI);

  let wrapper = `
  <h1>Can you See Me?</h1>

  `;
  section.innerHTML = wrapper;
}

function ouch(err) {
  console.log("Ouch! I'm not working right!");
  console.log(err);
}

fetch ("http://recipepuppyproxy.herokuapp.com/api/?q=omelet")
  .then(JSonMyWay)
  .then(recipes)
  .catch(ouch);
