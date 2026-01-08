// Menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle && navMenu) {
	menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
}

// Carrossel de fundo (duas camadas para crossfade)
const images = [
	'image.png',
	'image3.png',
	'image2.png',
	'rtk.png'
];

function imgPath(name) {
	return 'img/' + encodeURIComponent(name);
}

const slideA = document.getElementById('slideA');
const slideB = document.getElementById('slideB');
if (slideA && slideB && images.length) {
	// preload
	images.forEach(n => { const i = new Image(); i.src = imgPath(n); });

	let idx = 0;
	let curr = slideA;
	let next = slideB;

	curr.style.backgroundImage = `url(${imgPath(images[0])})`;
	curr.classList.add('visible');

	setInterval(() => {
		const nextIndex = (idx + 1) % images.length;
		next.style.backgroundImage = `url(${imgPath(images[nextIndex])})`;
		next.classList.add('visible');
		curr.classList.remove('visible');

		// swap references
		[curr, next] = [next, curr];
		idx = nextIndex;
	}, 5000);
}
