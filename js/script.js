const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselDots = document.querySelector('.carousel-dots');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
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
