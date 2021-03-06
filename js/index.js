// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = { 
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  let pep = document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  let mushroom=document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  let pepper=document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
  let sauce=document.querySelectorAll('.sauce-white').forEach(oneSauce => {
  if (state.whiteSauce) {
    oneSauce.style.visibility = 'hidden';
  } else {
    oneSauce.style.visibility = 'visible';
  }
}); // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  let cheese=document.querySelectorAll('.cheese').forEach(oneCheese => {
    if (state.glutenFreeCrust) {
      oneCheese.style.visibility = 'hidden';
    } else {
      oneCheese.style.visibility = 'visible';
    }
  });
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add("active");
  }
  else if(!state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add("active");
  }
  else if(!state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add("active");
  }
  else if(!state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.remove("active");
  }
  if (!state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add("active");
  }
  else if(state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.remove("active");
  }
  if (!state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add("active");
  }
  else if(state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.remove("active");
  }// Iteration 3: add/remove the class "active" of each `<button class="btn">`
};

function renderPrice() {
  let pepperoniclass= document.querySelector('.pepli');
  let mushroomclass= document.querySelector('.mushli');
  let greenPeppersclass= document.querySelector('.greenpeppsli');
  let whiteSauceclass= document.querySelector('.whitesau');
  let glutens = document.querySelector('.glutens');
  let counter = 21;

  if (state.pepperoni) {
    pepperoniclass.innerHTML= '$1 pepperoni'; 
    counter-=1;
    counter+=1;
  }
  else if (!state.pepperoni) {
    pepperoniclass.innerHTML = '';
    counter-=1;
  }
  if (state.mushrooms) {
   mushroomclass.innerHTML= '$1 mushrooms'; 
   counter-=1;
   counter+=1;
  }
  else if (!state.mushrooms) {
    mushroomclass.innerHTML = '';
    counter-=1;
  }
  if (state.greenPeppers) {
    greenPeppersclass.innerHTML= '$1 green peppers'; 
    counter-=1;
    counter+=1;
   }
   else if (!state.greenPeppers) {
    greenPeppersclass.innerHTML = '';
    counter-=1;
   }
   if (!state.whiteSauce) {
    whiteSauceclass.innerHTML= '$3 white sauce'; 
    counter-=3;
    counter+=3;
   }
   else if (state.whiteSauce) {
    whiteSauceclass.innerHTML = '';
    counter-=3;
   }
   if (!state.glutenFreeCrust) {
    glutens.innerHTML= '$5 gluten-free crust'; 
    counter-=5;
    counter+=5;
   }
   else if (state.glutenFreeCrust) {
    glutens.innerHTML = '';
    counter-=5;
   }
   let sum= document.querySelector('.totalsumclass');
   sum.innerHTML= `$${counter}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});