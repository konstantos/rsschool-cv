$(".del-hash").on("click", () => setTimeout(() => history.replaceState(null, null, window.location.href.split("#")[0]), 1));

// СВАЙП МЫШКОЙ ГОРИЗОНТАЛЬНОГО СКРОЛЛА -------------------
var $slider = $('.skills__list');
var isDown = false;
var startX;
var scrollLeft;

$slider.mousedown(function(e){
    isDown = true;
    $slider.addClass('active');
    startX = e.pageX - $slider.get(0).offsetLeft;
    scrollLeft = $slider.get(0).scrollLeft;
});
$slider.mouseleave(function(){
    isDown = false;
    $slider.removeClass('active');
});
$slider.mouseup(function(){
    isDown = false;
    $slider.removeClass('active');
});
$slider.mousemove(function(e){
    if(!isDown) return;
    e.preventDefault();
    var x = e.pageX - $slider.get(0).offsetLeft;
    var walk = (x - startX) * 3; //scroll-fast
    $slider.get(0).scrollLeft = scrollLeft - walk;
});