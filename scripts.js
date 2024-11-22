// Example: Smooth Scroll
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example: Image Carousel (if needed)
let currentImage = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your event images
const carousel = document.querySelector('.event-carousel');

setInterval(() => {
  carousel.style.backgroundImage = `url(${images[currentImage]})`;
  currentImage = (currentImage + 1) % images.length;
}, 3000); // Change image every 3 seconds
