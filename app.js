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
    el: '.slider-wrapper .dots',
    clickable: true
  },
  navigation: {
    nexEl: '.blogSlider_point-right',
    prevEl: '.blogSlider_point-left'
  },
});

// === // Second Slider === //

// === Quotes Slider === //

new Swiper('.quotesSlider', {

  loop: true,
  
  pagination: {
    el: '.slider-wrapper .dots',
    clickable: true
  },
  // navigation: {
  //   nexEl: '.blogSlider_point-right',
  //   prevEl: '.blogSlider_point-left'
  // },
});

// === // Quotes Slider === //