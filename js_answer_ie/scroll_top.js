// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // トップへ戻るボタンのエレメントを取得
  const scrollTop = document.querySelector('.js-scroll-top');

  // ボタンをクリックしたらページトップまで戻るを実装 ==================================================================
  scrollTop.addEventListener('click', function () {
    // スムーススクロールを実行
      window.scrollTo(0, 0);
  }, false);

  // windowのスクロール位置でボタンの表示・非表示 ======================================================================
  window.addEventListener('scroll', function (event) {
    // もし現在のスクロール位置が30を超えていたらトップへ戻るボタンのエレメントにshowクラスを付与
    // 実際にスクロールしているのはwindow.documentになるのでtargetはwindow.documentになる
    // イベントを割り当てているのはwindowなのでcurrentTargetを使用する
    // 単純にwindow.pageYOffsetでも問題は無い
    if (event.currentTarget.pageYOffset > 30) {
      scrollTop.classList.add('show');
    } else {
      scrollTop.classList.remove('show');
    }
  });
}, false);
