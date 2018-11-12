const images = document.querySelectorAll('img');

images.forEach((e, i) => {
   e.addEventListener('load', () => console.log(`Image(${i}) = Width x Height (${e.naturalWidth} x ${e.naturalHeight})`));
});