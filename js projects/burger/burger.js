const bbqTextInput = document.querySelector('input.bbqAdd');
const bbqSubmit = document.querySelector('button.bbqSubmit');
const ulBbq = document.querySelector('.ulBbq');
const menuItems = document.querySelector('.ulMenu');
const removeCheeseBtn = document.querySelector('.removeCheeseBtn');
const addCheeseBtn = document.querySelector('.addCheeseBtn');
const removeSeedBtn = document.querySelector('.removeSeedBtn');
const addSeedBtn = document.querySelector('.addSeedBtn');



// Menu Items Add
removeCheeseBtn.addEventListener('click', () => {
  let ch = document.querySelector('.cheese');
  ch.style.display = "none";
});
addCheeseBtn.addEventListener('click', () => {
  let ch = document.querySelector('.cheese');
  ch.style.display = "block";
});

removeSeedBtn.addEventListener('click', () => {
  let sd = document.querySelector('.seeds');
  let sd2 = document.querySelector('.seeds2');
  sd.style.visibility = "hidden";
  sd2.style.visibility = "hidden";
});
addSeedBtn.addEventListener('click', () => {
  let sd = document.querySelector('.seeds');
  let sd2 = document.querySelector('.seeds2');
  sd.style.visibility = "visible";
  sd2.style.visibility = "visible";
});


//Add to Extras List
bbqSubmit.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[1];
  let liCreate = document.createElement('li');
  let btn = document.createElement('button');
  
  liCreate.textContent = bbqTextInput.value;
  ul.appendChild(liCreate);
  liCreate.appendChild(btn);
  btn.textContent = "Remove";
  bbqTextInput.value = '';
});


// Remove item
ulBbq.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});