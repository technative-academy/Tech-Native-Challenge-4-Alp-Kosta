const quotes = {
  dave: '“I’ve worn mine every day for months now—still looks brand new and keeps perfect time.”',
  geoffrey:
    '“Simple, stylish, and reliable. Exactly what I was looking for in an everyday watch.”',
  beatrice:
    "“It's amazing - we love it (lorem ipsum dolor sit amet, lorem ipsum dolor sit amet)”",
};

const buttons = Array.from(document.getElementsByClassName('quote__button'));
buttons.forEach((button) => {
  button.addEventListener('click', () => changeQuote(button.id));
});

function changeQuote(buttonId) {
  const quote_label = document.getElementById('user_quote');
  quote_label.innerText = quotes[buttonId];
  buttons.forEach((button) => {
    button.classList.remove('quote__button--active');
    if (button.id === buttonId) {
      button.classList.add('quote__button--active');
    }
  });
}
