const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
	card.addEventListener('click', () => {
		removeActiveClasses();
		card.classList.add('card__active');
	});
});

const removeActiveClasses = () => {
	cards.forEach((card) => {
		card.classList.remove('card__active');
	});
};
