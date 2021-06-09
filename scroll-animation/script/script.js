const boxes = document.querySelectorAll('.box'); // Put all the box into Node-List

window.addEventListener('scroll', checkBoxes); // Launch an event when scroll on screen. When that happen, Function checkBoxes run.

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top; // Check where in viewport is the top for the box. MDN Element.getBoundingClientReact.

    boxTop < triggerBottom
      ? box.classList.add('show')
      : box.classList.remove('show');
  })
}