/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  Pass the function an array as it's only argument.
  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.
  
*/

const menu = data => {
  const burger = document.createElement('div')
  const toppings = document.createElement('ul')

  burger.classList.add('menu')
  burger.appendChild(toppings)

  const menuItems = data.map(item => {
    const eachItem = document.createElement('li')
    eachItem.textContent = item
    return eachItem
  })

  for (let menuItem of menuItems) {
    toppings.appendChild(menuItem)
  }

  document.querySelector('.menu-button').addEventListener('click', () => {
    burger.classList.toggle('menu--open')
  })

  return burger
}

document.querySelector('.header').appendChild(menu(menuItems))


































































// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
// menu.classList.toggle('menu--open');
// console.log(toggleMenu)
// }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', ()=> toggleMenu());

