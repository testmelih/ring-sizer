const ringSizer = document.querySelector('.ring-sizer');
const ringCircle = document.querySelector('.ring-circle');

// Set the size of the ring circle to match the size of the ring sizer
ringCircle.style.width = ringSizer.offsetWidth * 0.7 + 'px';
ringCircle.style.height = ringSizer.offsetHeight * 0.7 + 'px';

// Adjust the size of the ring circle when the window is resized
window.addEventListener('resize', () => {
  ringCircle.style.width = ringSizer.offsetWidth * 0.7 + 'px';
  ringCircle.style.height = ringSizer.offsetHeight * 0.7 + 'px';
});

// Add event listener to adjust the position of the ring circle
ringSizer.addEventListener('mousemove', e => {
  const x = e.clientX - ringSizer.offsetLeft;
  const y = e.clientY - ringSizer.offsetTop;
  
  ringCircle.style.left = x + 'px';
  ringCircle.style.top = y + 'px';
});

ringSizer.addEventListener('touchmove', e => {
  const x = e.touches[0].clientX - ringSizer.offsetLeft;
  const y = e.touches[0].clientY - ringSizer.offsetTop;
  
  ringCircle.style.left = x + 'px';
  ringCircle.style.top = y + 'px';
});
