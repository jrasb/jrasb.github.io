console.log('---\tabout.js\t---');

const bashAnimation = document.querySelector('.typed');

const content = document.querySelector('.content');
const pre = document.querySelector('pre');

pre.innerHTML = 
`colours:
    white:\t<span class="bash-white">#d3d7cf</span>
    black:\t<span class="bash-black">#000000</span>
    green:\t<span class="bash-green">#4e9a06</span>
    blue:\t<span class="bash-blue">#729fcf</span>
name: 'Portfolio'
description:
    This portfolio shows what i am capable of after one year of the software 
    developer course at the ROC Mondriaan school.
    Made using bootstrap 5 and vanilla JS.
    Inspired by the bash terminal, and colour scheme from the windows CMD.
`

content.classList.add('d-none');

bashAnimation.addEventListener('animationend', e => {
    content.classList.remove('d-none');
})