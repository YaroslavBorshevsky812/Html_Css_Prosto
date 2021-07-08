// === Main Slider === //

new Swiper('.section-hero-image', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

// === // Main Slider === //

// === Burger === //

document.querySelector('.btn-burger').addEventListener('click', event => {
  document.querySelector('.section-header').classList.toggle('section-header--active')
})

// === // Burger === //

// === Accordeon === //

const btnSel = document.querySelectorAll(".accordeon_item-title")

btnSel.forEach(item => {
  item.addEventListener('click', event => {
    if(event.target.closest('.accordeon_item')) {
          event.target.closest('.accordeon_item')
          .classList.toggle('active');
          }
  })
})

// === // Accordeon === //

// === Second Slider === //

new Swiper('.slider-inner', {

  loop: true,

  pagination: {
    el: '.slider-wrapper .dots-blog',
    clickable: true
  },
  navigation: {
    nexEl: '.blogSlider_point-right',
    prevEl: '.blogSlider_point-left'
  },
});

// === // Second Slider === //

// === Quotes Slider === //

new Swiper('.slider-quotes-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 50,
  pagination: {
    el: '.section-quotes .dots-quotes',
    clickable: true
  },
});

// === // Quotes Slider === //