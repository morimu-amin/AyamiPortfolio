//Slider
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

//画面ロード時の表示エフェクト
$('head').append(
'<style>body{display:none;}'
);
$(window).on("load", function() {
$('body').delay(600).fadeIn("slow");
});

//down-scroll
$(window).on('load resize', function(){
  const targetY = $(window).height();

  $('#js-scroll-down').on('click', function(){
    $('html, body').stop().animate({scrollTop: targetY}, 500, 'swing');
    return false;
  });
});


//navigation-fixed
$(function() {
  $(window).scroll(function() {

    if ($(this).scrollTop() > 10) {
        $('#js-nav-scroll').addClass('is-fixed');
    }else {
        $('#js-nav-scroll').removeClass('is-fixed');
    }
  });
});

//smooth-scroll
$(function (){
  $("a[href^=#]:not([href=#])").click(function(){
    const target = $($(this).attr('href')).offset().top;
    target -= 50;
    $('html, body').animate({scrollTop: target}, 500);
    return false;
  });
});


//Main title slide
const txts = $('.js-lang-slide');
let txtIndex = -1;
txts.hide();

function showNextTxt(){
  txtIndex++;
  txts.eq(txtIndex % txts.length).fadeIn(1000).delay(2000).fadeOut(1000, showNextTxt);
}
showNextTxt();

//Page Topへのスクロール
$(function() {

  const pageTop = $('#page-top');

  pageTop.hide();

  $(window).scroll(function() {
    if($(this).scrollTop() > 200){
      pageTop.fadeIn();
    }else{
      pageTop.fadeOut();
    }
  });

  pageTop.click(function() {
    $('body, html').animate({scrollTop: 0 }, 0);
    return false;
  });
});
