$(document).ready(function(){
	var carouselList = $("#carousel ul");

	function changeSlide() {
    carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide);
  };  
  changeSlide();

  function moveFirstSlide() {
    var firstImg = carouselList.find("li:first");
    	lastImg = carouselList.find("li:last");

    lastImg.after(firstImg);
    carouselList.css({marginLeft:0});
  };

	setInterval(changeSlide, 3000);		
});