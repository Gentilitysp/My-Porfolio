// popup window

// const details = [
//   {
//     name: 'Multi School Stories',
//     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry',
//     image: 'img/a.jpg',
//     technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
//     live: 'https://whoistolu.github.io/personal-portfolio/',
//     source: 'https://github.com/Whoistolu/personal-portfolio',
//   },
//   {
//     name: 'Multi School Stories',
//     description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
//     image: 'img/e.jpg',
//     technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
//     live: 'https://whoistolu.github.io/personal-portfolio/',
//     source: 'https://github.com/Whoistolu/personal-portfolio',
//   },
//   {
//     name: 'Multi School Stories',
//     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry and typesetting industry. Lorem Ipsum has been the industry',
//     image: 'img/b.jpg',
//     technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
//     live: 'https://whoistolu.github.io/personal-portfolio/',
//     source: 'https://github.com/Whoistolu/personal-portfolio',
//   },
//   {
//     name: 'Multi School Stories',
//     description: 'To popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia fnfifdfdifhfio fjnkfvkfvfkjfdf jkfndfkdfklgfjkdfnkkjkl jkdfsk',
//     image: 'img/a.jpg',
//     technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
//     live: 'https://whoistolu.github.io/personal-portfolio/',
//     source: 'https://github.com/Whoistolu/personal-portfolio',
//   },
//   {
//     name: 'Multi School Stories',
//     description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a kjbdfkjfvjfvjfvjjo jnffnjvjnvm jgxcgmnklbnfkf ofgngd;fnfkfsip kpgsngfnfjokjf fspkl',
//     image: 'img/c.jpg',
//     technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
//     live: 'https://whoistolu.github.io/personal-portfolio/',
//     source: 'https://github.com/Whoistolu/personal-portfolio',
//   },
//   {
//     name: 'Multi School Stories',
//     description: 'khfjfjfusjfj nvnvsdjdv jdnbvsd jdsjdsklddnd ksvbfkfjf jdnjkfjf kdjdkdfjjk lnbnfklfnffn jbdndbdnkdddjdd dblkjsjksklss dfhfjfhfsfsh jfndfjdnffnnfnfklslsljkfjff jfnfjfjnfnfn fnfjfjfjvmfbvv   v vnnvnnvnvnvnvnv vnvnvjdnknxj jfdp[fpffnfmfkfj nvfjfjffjfjjfjff jgjkgjkgjkgkj',
//     image: 'img/f.jpg',
//     technologies: ['ruby', 'css', 'javascript', 'bootsrap'],
//     live: 'https://whoistolu.github.io/personal-portfolio/',
//     source: 'https://github.com/Whoistolu/personal-portfolio',
//   },
// ];

// const SeeProjectButton = document.querySelectorAll('.project-button2');
// SeeProjectButton.forEach((item, i) => {
//   item.addEventListener('click', () => {
//     const windowPop = document.querySelector('#modal');
//     windowPop.style.display = 'block';
//     const projectDetail = details[i];
//     const heading = document.querySelector('.heading h2');
//     heading.textContent = projectDetail.name;
//     const paragraph = document.querySelector('.img-p-button .description');
//     paragraph.textContent = projectDetail.description;
//     const picture = document.querySelector('.img-p-button .image');
//     picture.src = projectDetail.image;
//     const languages = document.querySelectorAll('.languages .bttn');
//     languages.forEach((li, s) => {
//       li.textContent = projectDetail.technologies[s];
//     });
//     const live = windowPop.querySelectorAll('.first-button')[0];
//     live.href = projectDetail.live;
//     const source = windowPop.querySelectorAll('.first-button')[1];
//     source.href = projectDetail.source;
//   });
// });

// const SeeCardButton = document.querySelectorAll('.click-card');
// SeeCardButton.forEach((item, i) => {
//   item.addEventListener('click', () => {
//     const windowPop = document.querySelector('#modal');
//     windowPop.style.display = 'block';
//     const projectDetail = details[i];
//     const heading = document.querySelector('.heading h2');
//     heading.textContent = projectDetail.name;
//     const paragraph = document.querySelector('.img-p-button .description');
//     paragraph.textContent = projectDetail.description;
//     const picture = document.querySelector('.img-p-button .image');
//     picture.src = projectDetail.image;
//     const languages = document.querySelectorAll('.languages .bttn');
//     languages.forEach((li, s) => {
//       li.textContent = projectDetail.technologies[s];
//     });
//     const live = windowPop.querySelectorAll('.first-button')[0];
//     live.href = projectDetail.live;
//     const source = windowPop.querySelectorAll('.first-button')[1];
//     source.href = projectDetail.source;
//   });
// });
// const closeProjectButton = document.querySelector('.close');
// closeProjectButton.addEventListener('click', () => {
//   const windowPop = document.querySelector('#modal');
//   windowPop.style.display = 'none';
// });