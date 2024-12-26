let pictures = [
  'img/mat.png',
  'img/ma.png',
  'img/ma2.png',
  'img/ma3.png'
  
];

const galleryPreviews = document.querySelectorAll('.product-card__image-item img');
const fullPicture = document.querySelector('.product-card__image');

galleryPreviews.forEach((preview, index) => {
  preview.addEventListener('click', () => {
    fullPicture.src = pictures[index];
  });
});
