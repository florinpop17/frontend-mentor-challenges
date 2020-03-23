const form = document.getElementById('form');

form.addEventListener('submit', e => {
	e.preventDefault();

	// check for email validation
	const email = form['email'];
	const emailValue = email.value;
	const small = form.querySelector('small');

	if (!emailValue) {
		// say it's empty
		email.classList.add('error');
		small.innerText = 'Email field cannot be blank!';
		small.style.display = 'inline-block';
	} else if (!isValidEmail(emailValue)) {
		// say it's invalid
		email.classList.add('error');
		small.innerText = 'Email is invalid!';
		small.style.display = 'inline-block';
	} else {
		// submit it
		email.classList.remove('error');
		small.innerText = '';
		small.style.display = 'none';
	}
});

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
