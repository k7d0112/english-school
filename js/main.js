// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $(".drawer").toggleClass("is-active");
  });
  // メニューのリンクをクリックした時
  $(".drawer__link").on("click", function () {
    $(this).toggleClass("is-active");
    $(".hamburger").toggleClass("is-active");
    $(".drawer").toggleClass("is-active");
  });

  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  $(window).scroll(function () {
    $(".reason__item").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("is-active");
      }
    });

    $(".voice__item").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("is-active");
      }
    });
  });
  // これを複数使う
});






