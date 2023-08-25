const customScrollbar = document.querySelector('.custom-scrollbar');
customScrollbar.addEventListener('mouseenter', function() {
  this.style.overflowY = 'scroll';
});

customScrollbar.addEventListener('mouseleave', function() {
  this.style.overflowY = 'auto';
});


