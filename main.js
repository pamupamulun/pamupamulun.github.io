$(function() {
  $('.hamburger').click(function() {
    // メニューの開閉状態を切り替える
    $('.menu').toggleClass('open');

    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass('active');
  });
});

$(window).on('load', function () {
  $('#loader').fadeOut(200, function () {
    $('#main-content').fadeIn(200);
  });
});

$(function () {
  $('#main-content').fadeIn(200, function () {
    AOS.init({
      once: false,
      startEvent: 'load',
      duration: 600,
      easing: 'ease-in-out',
    });
  });
});