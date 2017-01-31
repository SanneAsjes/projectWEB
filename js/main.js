// BRON: http://codepen.io/joostf/pen/bwrryR

/* 1. selecteer elementen met document.querySelector */
var section = document.querySelector('.heart-shape'); // first section element
var button = document.querySelector('section > article > div');

var dance = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
	section.classList.toggle('heart-filled')
}

/* 2. voeg een event toe aan een element */
button.addEventListener('click', dance);
