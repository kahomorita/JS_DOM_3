// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // モーダルのエレメントを取得 ========================================================================================
  const modal = document.getElementById('modal-add');

  // 背景用のエレメントを作成 ==========================================================================================
  const backdrop = document.createElement('div');
  backdrop.classList.add('modal-backdrop');
  backdrop.classList.add('fade');

  // モーダルを閉じる処理 ==============================================================================================
  const closeModal = () => {
    // 背景を削除
    document.querySelector('.modal-backdrop').remove();

    // モーダルを非表示
    modal.style.display = 'none';

    // bodyにセットした値をクリア
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = null;
  };

  // モーダルを開くを押したときの処理 ==================================================================================
  document.querySelector('.js-modal-open').addEventListener('click', () => {
    // モーダルを表示
    modal.classList.add('show');
    modal.style.display = 'block';

    // スクロールバーの幅を取得
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;

    // 背景にパディングをセット
    backdrop.style.paddingRight = scrollBarWidth + 'px';
    // bodyに挿入
    document.body.appendChild(backdrop);
    backdrop.classList.add('show');

    // bodyをスクロールしないようにセット
    document.body.classList.add('modal-open');
    document.body.style.paddingRight = scrollBarWidth + 'px';
  }, false);

  // 追加ボタンを押したときの処理 ======================================================================================
  document.querySelector('.js-btn-add').addEventListener('click', () => {
    const inputVal = document.querySelector('.js-add-input').value;

    if (inputVal === '') {
      alert('何か入力してください');
      return;
    }

    alert(inputVal);
    closeModal();
  }, false);

  // 閉じるボタンを押したときの処理 ====================================================================================
  document.querySelector('.js-btn-close').addEventListener('click', () => {
    closeModal();
  }, false);
}, false);

// 背景をクリックしたときの処理 ======================================================================================
modal.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}, false);
