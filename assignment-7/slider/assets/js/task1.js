$(document).ready(function(){
  setInterval(slideImages,3000);
  function slideImages(){
    $('#images img:first-child').clone().appendTo('#images');
    $('#images img:first-child').remove();
  }
}); 
