const projects = [
	{
		name: 'four-card-feature-section-master',
		youtube:
			'https://www.youtube.com/watch?v=PcSUEo0P0GU&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=2&t=0s'
	},
	{
		name: 'base-apparel-coming-soon-master',
		youtube:
			'https://www.youtube.com/watch?v=8A7-0gsbHA0&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=3&t=0s'
	},
	{
		name: 'signup-form-master',
		youtube:
			'https://www.youtube.com/watch?v=bFOuUypjkSM&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=4&t=0s'
	},
	{
		name: 'single-price-grid-component-master',
		youtube:
			'https://www.youtube.com/watch?v=pbsvhVPFHX0&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=5&t=0s'
	},
	{
		name: 'ping-coming-soon-page-master',
		youtube:
			'https://www.youtube.com/watch?v=kvsmBV19Sz0&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=6&t=0s'
	},
	{
		name: 'huddle-landing-page',
		youtube:
			'https://www.youtube.com/watch?v=wnb-BfjR-oo&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=7&t=0s'
	},
	{
		name: 'huddle-simple-landing',
		youtube:
			'https://www.youtube.com/watch?v=ObrYwPRyeqc&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=8&t=0s'
	},
	{
		name: 'fylo-landing-page',
		youtube:
			'https://www.youtube.com/watch?v=a9-Ro9rc7E4&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=9&t=0s'
	},
	{
		name: 'insure-landing-page',
		youtube:
			'https://www.youtube.com/watch?v=9HVKR_hK0nY&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=10&t=0s'
	},
	{
		name: 'pricing-toggle-component',
		youtube:
			'https://www.youtube.com/watch?v=NBkD-O7f4Bs&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s'
	},
	{
		name: 'tracking-info',
		youtube:
			'https://www.youtube.com/watch?v=71HM728Mul4&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s'
	},
	{
		name: 'clipboard-landing-page',
		youtube:
			'https://www.youtube.com/watch?v=aZeKU7xoT0w&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s'
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, youtube }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${youtube}" class="youtube">
				<i class="fab fa-youtube"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
