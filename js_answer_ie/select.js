// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // 共通関数 ==========================================================================================================
  const move = function (from, to, onlySelected) {
    // 全てのoptionを取得
    const options = [].slice.call(from.querySelectorAll('option'));

    // 対象のエレメントを取得
    const selectedOptions = options.filter(function (option) {
      return onlySelected ? option.selected === true : true;
    });

    // 選択を解除して移動
    selectedOptions.forEach(function (option) {
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
    // 共通メソッドを使うとき
    // move(noneSelected, selected, true);

    // 全てのoptionを取得
    let options = [].slice.call(noneSelected.querySelectorAll('option'));

    // 「selected = true」のみのエレメントに切り出し
    options = options.filter(function (option) {
      return option.selected === true;
    });

    // 選択を解除して移動
    options.forEach(function (option) {
      option.selected = false;
      selected.appendChild(option);
    });
  }, false);

  // 右に全て移動 ======================================================================================================
  document.querySelector('.js-item-to-right-all').addEventListener('click', function () {
    // 共通メソッドを使うとき
    // move(noneSelected, selected, false);

    // 全てのoptionを取得
    const options = [].slice.call(noneSelected.querySelectorAll('option'));

    // 選択を解除して移動
    options.forEach(function (option) {
      option.selected = false;
      selected.appendChild(option);
    });
  }, false);

  // 左に移動 ==========================================================================================================
  document.querySelector('.js-item-to-left').addEventListener('click', function () {
    // 共通メソッドを使うとき
    // move(selected, noneSelected, true);

    // 全てのoptionを取得
    let options = [].slice.call(selected.querySelectorAll('option'));

    // 「selected = true」のみのエレメントに切り出し
    options = options.filter(function (option) {
      return option.selected === true;
    });

    // 選択を解除して移動
    options.forEach(function (option) {
      option.selected = false;
      noneSelected.appendChild(option);
    });
  }, false);

  // 左に全て移動 ======================================================================================================
  document.querySelector('.js-item-to-left-all').addEventListener('click', function () {
    // 共通メソッドを使うとき
    // move(selected, noneSelected, false);

    // 全てのoptionを取得
    const options = [].slice.call(selected.querySelectorAll('option'));

    // 選択を解除して移動
    options.forEach(function (option) {
      option.selected = false;
      noneSelected.appendChild(option);
    });
  }, false);
}, false);
