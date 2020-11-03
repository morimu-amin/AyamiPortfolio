//サイト画面遷移時の表示エフェクト
$(function(){
  $('body').fadeIn(1000);
});

//ハンバーガーメニューの開閉
$(function(){
  $('.js__hamburger').on('click', function(){
    $('.header-nav, .hamburger__line').toggleClass('open');
  })
});

//about.htmlのスクロール時のアイテム表示エフェクト
$(function(){
  $(window).scroll(function(){
    $('.fadeIn').each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if(scroll > position - windowHeight + 200){
        $(this).addClass('active');
      }
    });
  });
});

//about.htmlのツールチップ表示
$(function(){
  $('.skill__item-icon__img').hover(function(){
      $('body').append('<div id="tooltip"><p></p></div>');

      $('#tooltip p').html($(this).attr("alt"));

      $('#tooltip').hide();

      $('#tooltip').css('top', $(this).offset().top - $('#tooltip').height() - 18);

      $('#tooltip').css('left', $(this).offset().left + $(this).width()*0.5);

      $('#tooltip').fadeIn();
  }, function(){

      $('#tooltip').remove();
  });
});

//Page Topへのスクロール
$(function() {

  let pageTop = $('#page-top');

  pageTop.click(function() {
    $('body, html').animate({scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function() {

    if($(this).scrollTop() >= 200){
      pageTop.css('bottom', '30px');
    }else{
      pageTop.css('bottom', '-120px');
    }
  });
});
