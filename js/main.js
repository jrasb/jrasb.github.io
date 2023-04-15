console.log("main.js loaded");

const root = document.querySelector('#root-div');
const rootChildren = root.childNodes;

// about me
const aboutme = document.querySelector(`#${rootChildren.item(3).id}`);
const aboutmeChildren = aboutme.childNodes;

// contact
const contact = document.querySelector(`#${rootChildren.item(5).id}`);
const contactChildren = contact.childNodes;

// links
const links = document.querySelector(`#${rootChildren.item(7).id}`)
const linksChildren = links.childNodes;

rootChildren.item(1).addEventListener('click', () => {
    aboutme.classList.toggle('d-none');
    contact.classList.toggle('d-none');
    links.classList.toggle('d-none');
});

aboutmeChildren.item(1).addEventListener('click', () => {
    aboutmeChildren.item(3).classList.toggle('d-none');
});

contactChildren.item(1).addEventListener('click', () => {
    contactChildren.item(3).classList.toggle('d-none');
});

linksChildren.item(1).addEventListener('click', () => {
    linksChildren.item(3).classList.toggle('d-none');
});

// Disables the display on load of the page
aboutme.classList.add('d-none');
contact.classList.add('d-none');
links.classList.add('d-none');

aboutmeChildren.forEach((e,i) => {
    if (i == 3) {
        e.classList.add('d-none');
    }
});

contactChildren.forEach((e,i) => {
    if (i == 3) {
        e.classList.add('d-none');
    }
});

linksChildren.forEach((e,i) => {
    if (i == 3) {
        e.classList.add('d-none');
    }
});