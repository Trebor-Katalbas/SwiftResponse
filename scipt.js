const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuContainer = document.querySelector('#menu-container');
const menuItems = document.querySelector('#menu-items');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('toggle');

  if (hamburgerIcon.classList.contains('toggle')) {
    const newItem1 = document.createElement('a');
    newItem1.textContent = 'Links';
    newItem1.href = '#';
    menuItems.appendChild(newItem1);

    const newItem2 = document.createElement('a');
    newItem2.textContent = 'Login';
    newItem2.href = 'signin/srin.html';
    menuItems.appendChild(newItem2);

    // Add more items as needed

    menuContainer.classList.add('show');
  } else {
    // Clear the menu items when the icon is toggled off
    menuItems.innerHTML = '';
    menuContainer.classList.remove('show');
  }
});
