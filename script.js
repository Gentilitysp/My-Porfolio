// Declaring the mobile-menu

const mobileMenuDiv = document.querySelector('#mobile-menu');
mobileMenuDiv.className = 'mobile-menu-hidden';
let anchorTag = document.createElement('a');
anchorTag.setAttribute('href', '/');
anchorTag.style.display = 'flex';
anchorTag.style.justifyContent = 'flex-end';
anchorTag.style.marginBottom = '10%';
anchorTag.style.marginRight = '10%';
const closingIcon = document.createElement('IMG');

// Declaring cloing icon

closingIcon.setAttribute('src', 'imgs/Icon.png');
closingIcon.setAttribute('alt', 'icon image');
closingIcon.id = 'close-button';
anchorTag.appendChild(closingIcon);
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'Portfolio';
anchorTag.setAttribute('href', '#actual-work-section');
anchorTag.className = 'menu-links';
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'About';
anchorTag.setAttribute('href', '#menu-about');
anchorTag.className = 'menu-links';
mobileMenuDiv.appendChild(anchorTag);
anchorTag = document.createElement('a');
anchorTag.textContent = 'Contact';
anchorTag.setAttribute('href', '#menu-contact');
anchorTag.className = 'menu-links';
mobileMenuDiv.appendChild(anchorTag);
const menuButton = document.querySelector('#menu-button');

// Declaring functions for the toggling
