const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselDots = document.querySelector('.carousel-dots');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const catalogItems = document.querySelectorAll('.catalog-item');

let currentItem = 0;
let timerId;

// Create carousel dots
for (let i = 0; i < carouselItems.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('carousel-dot');
  if (i === currentItem) dot.classList.add('active');
  dot.addEventListener('click', () => {
    setCurrentItem(i);
  });
  carouselDots.appendChild(dot);
}

function setCurrentItem(index) {
  if (index < 0 || index >= carouselItems.length) return;
  carousel.style.transform = `translateX(-${index * 100}%)`;
  carouselDots.querySelector('.active').classList.remove('active');
  carouselDots.children[index].classList.add('active');
  currentItem = index;
  resetTimer();
}

function nextItem() {
  currentItem = (currentItem + 1) % carouselItems.length;
  setCurrentItem(currentItem);
}

function resetTimer() {
  clearInterval(timerId);
  timerId = setInterval(nextItem, 8000);
}

carouselPrev.addEventListener('click', () => {
  setCurrentItem(currentItem - 1);
});

carouselNext.addEventListener('click', () => {
  setCurrentItem(currentItem + 1);
});

resetTimer();

catalogItems.forEach(catalogItem => {
  const catalogLink = catalogItem.querySelector('.catalog-item__link');
  const catalogContent = catalogItem.querySelector('.catalog-item__content');
  
  catalogLink.addEventListener('click', () => {
  catalogItem.classList.toggle('open');
  });
  
  catalogContent.addEventListener('click', (event) => {
  event.stopPropagation();
  });
  });
  
  document.addEventListener('click', () => {
  catalogItems.forEach(catalogItem => {
  catalogItem.classList.remove('open');
  });
  });
  
  /* Note:
  
  The above code will add a "click" event listener on each catalog item.
  When the "catalog-item__link" button is clicked, it will toggle the "open" class on its parent "catalog-item" element.
  The "open" class will apply the CSS rule to display the "catalog-item__content" block.
  When the "catalog-item__content" block is clicked, it will stop the event propagation to prevent the parent element from closing.
  When any area outside of the catalog items is clicked, it will close all of the open catalog items.
  */
  
  
  
