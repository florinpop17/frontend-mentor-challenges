const hamburger = document.getElementById('hamburger');
const { body } = document;

hamburger.addEventListener('click', e => {
	body.classList.toggle('show-nav');
});
