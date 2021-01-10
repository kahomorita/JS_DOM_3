// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // 共通関数 ==========================================================================================================
  const move = function (from, to, optionKey) {
    // optionを取得
    const options = [].slice.call(from.querySelectorAll(optionKey));

    // 選択を解除して移動
    options.forEach(function (option) {
      option.selected = false;
      to.appendChild(option);
    });
  };

  // セレクトボックスの選択 ============================================================================================
  // 未選択のセレクトボックス
  const noneSelected = document.getElementById('none-selected-items');

  // 選択済みのセレクトボックス
  const selected = document.getElementById('selected-items');

  // 右に移動 ==========================================================================================================
  document.querySelector('.js-item-to-right').addEventListener('click', function () {
    move(noneSelected, selected, 'option:checked');
  }, false);

  // 右に全て移動 ======================================================================================================
  document.querySelector('.js-item-to-right-all').addEventListener('click', function () {
    move(noneSelected, selected, 'option');
  }, false);

  // 左に移動 ==========================================================================================================
  document.querySelector('.js-item-to-left').addEventListener('click', function () {
    move(selected, noneSelected, 'option:checked');
  }, false);

  // 左に全て移動 ======================================================================================================
  document.querySelector('.js-item-to-left-all').addEventListener('click', function () {
    move(selected, noneSelected, 'option');
  }, false);
}, false);
