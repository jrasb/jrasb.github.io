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

