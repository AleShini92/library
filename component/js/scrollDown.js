let containerSearch = document.querySelector('.container__search');
let h1 = document.querySelector('h1');

window.onscroll = function() {scrollFunction()};

export function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    //containerSearch.className = ('Scroll__top');
    containerSearch.style.position = 'fixed';
    containerSearch.style.top = '0'
    containerSearch.style.width = '100%';
    containerSearch.style.transition = '.1s ease-in-out'
    h1.style.fontSize = '20px'
  } else {
    containerSearch.style.position = "relative";
    containerSearch.style.top = "100px";
    containerSearch.style.width = '100%';
    h1.style.fontSize = '2em';
  }
}

export default scrollFunction;