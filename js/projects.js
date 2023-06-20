console.log('---\tprojects.js\t---');

const bashAnimation = document.querySelector('.typed');
const projects = document.querySelector("#project-section");

projects.classList.add('d-none');

bashAnimation.addEventListener('animationend', (e) => {
    projects.classList.remove('d-none');
})