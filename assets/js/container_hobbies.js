var elem = document.querySelector('.container');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.container__item',
  columnWidth: 230,
  gutter: 20, 
  isFitWidth: true
});
