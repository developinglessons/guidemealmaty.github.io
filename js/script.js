
(function($) {
  $(function() {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })

    $('.catalog-item__back').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  });
})(jQuery);


const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselDots = document.querySelector('.carousel-dots');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const cards = document.querySelectorAll('.card');



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

