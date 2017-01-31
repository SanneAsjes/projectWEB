// BRON: http://codepen.io/joostf/pen/bwrryR


var form = document.querySelector('form');
var submit = document.querySelector('form>fieldset>input:nth-of-type(3)');

var geslaagd = function () {
	form.classList.toggle('joepie')
}

submit.addEventListener('click', geslaagd);
