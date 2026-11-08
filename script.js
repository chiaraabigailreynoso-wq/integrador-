document.addEventListener('DOMContentLoaded', function () {
  
  const filterButtons = document.querySelectorAll('.filter-pills .btn-pill-custom');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const heroCarousel = document.querySelector('#heroCarousel');
  if (heroCarousel) {
    new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      ride: 'carousel'
    });
  }
});