const swiper = new Swiper('.section-hero-image', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

document.querySelector('.btn-burger').addEventListener('click', event => {
  document.querySelector('.section-header').classList.toggle('section-header--active')
})