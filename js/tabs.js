const tabsTexts = {
  labelfirst: '<strong>Rolex<strong> A crown for every achievement.',
  labelsecond:
    '“Simple, stylish, and reliable. Exactly what I was looking for in an everyday watch.”',
  beatrice:
    "“It's amazing - we love it (lorem ipsum dolor sit amet, lorem ipsum dolor sit amet)”",
};

const tabsElements = Array.from(
  document.getElementsByClassName('btn__button__button'),
);
const myImage = document.querySelector('.tabs-frame-image');

tabsElements.forEach((btn) => {
  btn.addEventListener('click', () => changeTabs(btn));
});

function changeTabs(btn) {
  let expression = btn.className;
  console.log(expression);
  changeTabsActivation();
  btn.classList.add('btn-active');

  switch (expression) {
    case 'btn__button__button tabFirst':
      console.log('Rolex Resmi');
      myImage.src = './images/Rolex.jpg';
      break;
    case 'btn__button__button tabSecond':
      console.log('Omega Resmi');
      myImage.src = './images/Omega.jpg';
      break;
    case 'btn__button__button tabThird':
      console.log('Palet Resmi');
      myImage.src = './images/Patek.jpg';
      break;
    case 'btn__button__button tabFourth':
      console.log('Tah Heuer Resmi');
      myImage.src = './images/TAG-Heuer.jpg';
      break;
    default:
      console.log('Bir sıkıntı var');
  }
}

function changeTabsActivation() {
  tabsElements.forEach((tab) => {
    tab.classList.remove('btn-active');
  });
}
