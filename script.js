const mobileMenuDiv = document.querySelector('#mobile-menu');
mobileMenuDiv.className = 'mobile-menu-hidden';
let anchorTag = document.createElement('a');
anchorTag.setAttribute('href', '/');
anchorTag.style.display = 'flex';
anchorTag.style.justifyContent = 'flex-end';
anchorTag.style.marginBottom = '10%';
anchorTag.style.marginRight = '10%';
const closingIcon = document.createElement('IMG');
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
function display() {
  const targetedDiv = document.querySelector('.mobile-menu-hidden');
  targetedDiv.classList.add('show');
  menuButton.style.display = 'none';
}

menuButton.addEventListener('click', display);
const closeButton = document.querySelector('#close-button');
function closePop() {
  const targetedDiv2 = document.querySelector('.mobile-menu-hidden');
  targetedDiv2.classList.remove('show');
  menuButton.style.display = 'block';
}

closeButton.addEventListener('click', closePop);
const anchorTagLinks = document.querySelectorAll('.menu-links');
anchorTagLinks.forEach((link) => {
  link.addEventListener('click', closePop);
});

// popup window

const details = [
  {
    name: 'Multi School Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './imgs/ten.png',
    technologies: ['ruby on rails', 'css', 'javascript', 'bootsrap'],
    live: 'https://gentilitysp.github.io/My-Porfolio/',
    source: 'https://github.com/Gentilitysp/My-Porfolio',
  },
  {
    name: 'Multi School Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'imgs/a.jpg',
    technologies: ['ruby on rails', 'css', 'javascript', 'bootsrap'],
    live: 'https://gentilitysp.github.io/My-Porfolio/',
    source: 'https://github.com/Gentilitysp/My-Porfolio',
  },
  {
    name: 'Multi School Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry',
    image: 'imgs/b.jpg',
    technologies: ['ruby on rails', 'css', 'javascript', 'bootsrap'],
    live: 'https://gentilitysp.github.io/My-Porfolio/',
    source: 'https://github.com/Gentilitysp/My-Porfolio',
  },
  {
    name: 'Multi School Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'imgs/e.jpg',
    technologies: ['ruby on rails', 'css', 'javascript', 'bootsrap'],
    live: 'https://gentilitysp.github.io/My-Porfolio/',
    source: 'https://github.com/Gentilitysp/My-Porfolio',
  },
  {
    name: 'Multi School Stories',
    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a kjbdfkjfvjfvjfvjjo jnffnjvjnvm jgxcgmnklbnfkf ofgngd;fnfkfsip kpgsngfnfjokjf fspkl',
    image: 'imgs/c.jpg',
    technologies: ['ruby on rails', 'css', 'javascript', 'bootsrap'],
    live: 'https://gentilitysp.github.io/My-Porfolio/',
    source: 'https://github.com/Gentilitysp/My-Porfolio',
  },
  {
    name: 'Multi School Stories',
    description: 'khfjfjfusjfj nvnvsdjdv jdnbvsd jdsjdsklddnd ksvbfkfjf jdnjkfjf kdjdkdfjjk lnbnfklfnffn jbdndbdnkdddjdd dblkjsjksklss dfhfjfhfsfsh jfndfjdnffnnfnfklslsljkfjff jfnfjfjnfnfn fnfjfjfjvmfbvv   v vnnvnnvnvnvnvnv vnvnvjdnknxj jfdp[fpffnfmfkfj nvfjfjffjfjjfjff jgjkgjkgjkgkj',
    image: 'imgs/f.jpg',
    technologies: ['ruby on rails', 'css', 'javascript', 'bootsrap'],
    live: 'https://gentilitysp.github.io/My-Porfolio/',
    source: 'https://github.com/Gentilitysp/My-Porfolio',
  },
];

const SeeProjectButton = document.querySelectorAll('.project-button2');
SeeProjectButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('#modal');
    windowPop.style.display = 'block';
    const projectDetail = details[i];
    const heading = document.querySelector('.heading h2');
    heading.textContent = projectDetail.name;
    const paragraph = document.querySelector('.img-p-button .description');
    paragraph.textContent = projectDetail.description;
    const picture = document.querySelector('.img-p-button .image');
    picture.src = projectDetail.image;
    const languages = document.querySelectorAll('.languages .bttn');
    languages.forEach((li, s) => {
      li.textContent = projectDetail.technologies[s];
    });
    const live = windowPop.querySelectorAll('.first-button')[0];
    live.href = projectDetail.live;
    const source = windowPop.querySelectorAll('.first-button')[1];
    source.href = projectDetail.source;
  });
});
const SeeCardButton = document.querySelectorAll('.click-card');
SeeCardButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('#modal');
    windowPop.style.display = 'block';
    const projectDetail = details[i];
    const heading = document.querySelector('.heading h2');
    heading.textContent = projectDetail.name;
    const paragraph = document.querySelector('.img-p-button .description');
    paragraph.textContent = projectDetail.description;
    const picture = document.querySelector('.img-p-button .image');
    picture.src = projectDetail.image;
    const languages = document.querySelectorAll('.languages .bttn');
    languages.forEach((li, s) => {
      li.textContent = projectDetail.technologies[s];
    });
    const live = windowPop.querySelectorAll('.first-button')[0];
    live.href = projectDetail.live;
    const source = windowPop.querySelectorAll('.first-button')[1];
    source.href = projectDetail.source;
  });
});
const closeProjectButton = document.querySelector('.close');
closeProjectButton.addEventListener('click', () => {
  const windowPop = document.querySelector('#modal');
  windowPop.style.display = 'none';
});
