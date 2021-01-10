{
  // ドラッグ中のアイテムを保持しておく変数
  let dragItem = null;

  const dropItems = document.getElementById('drop-items');

  // ドキュメント全体のイベントをセット ================================================================================
  // ドロップゾーンの上にアイテムがあるとき ==================================
  document.addEventListener('dragover', function (event) {
    // デフォルトのイベントをキャンセルする
    event.preventDefault();
  }, false);

  document.addEventListener('drop', function (event) {
    // デフォルトのイベントをキャンセルする
    event.preventDefault();
  }, false);

  // ドラッグするアイテムのイベントを纏めてセット ======================================================================
  const dragEventHandlers = function (item) {
    // ドラッグを開始したとき ==================================================
    item.addEventListener('dragstart', function (event) {
      // ドラッグ中のアイテムをセット
      dragItem = event.target;
    }, false);

    // ドラッグを終了したとき ==================================================
    item.addEventListener('dragend', function () {
      // ドラッグ中のアイテムを解除
      dragItem = null;
    }, false);
  };

  // ドロップされるアイテム(ドロップゾーン)のイベントを纏めてセット ====================================================
  const dropEventHandlers = function (dropZone) {
    // ドロップゾーンの上にアイテムがドラッグされた時のクラス名
    const className = 'drag-enter';

    // ドロップゾーンの上にアイテムが入ってきたとき ============================
    dropZone.addEventListener('dragenter', function (event) {
      if (dragItem) {
        // クラス名を付与
        event.target.classList.add(className);
      }
    }, false);

    // ドロップゾーンからアイテムが離れたとき ==================================
    dropZone.addEventListener('dragleave', function (event) {
      // クラス名を外す
      event.target.classList.remove(className);
    }, false);

    // アイテムがドロップゾーンにドロップされたとき ============================
    dropZone.addEventListener('drop', function (event) {
      // クラス名を外す
      event.target.classList.remove(className);

      if (dragItem) {
        // ドロップされたアイテムを追加する
        event.target.appendChild(dragItem);
      }
    }, false);
  };

  // 初期表示されているエレメントに処理をセット ========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    // ドラッグ可能なアイテム ==================================================
    const dragItems = [].slice.call(document.querySelectorAll('.drag-item'));
    // アイテムにイベントをセット
    dragItems.forEach(function (dragItem) {
      dragEventHandlers(dragItem);
    });

    // ドロップされるアイテム(ドロップゾーン) ==================================
    const dropZones = [].slice.call(document.querySelectorAll('.drop-item'));
    // アイテムにイベントをセット
    dropZones.forEach(function (dropItem) {
      dropEventHandlers(dropItem);
    });

    // ボタンにイベントをセット ========================================================================================

    // 「アイテムを追加」ボタン ================================================
    // アイテムにイベントをセット
    document.querySelector('.js-add-item').addEventListener('click', function () {
      // アイテムのクローンを作成
      const dragItem = dragItems[0].cloneNode(true);
      // イベントをセット
      dragEventHandlers(dragItem);
      // ドロップゾーンに追加
      dropZones[0].appendChild(dragItem);
    });


    // 「ドロップゾーンを追加」ボタン ==========================================
    // アイテムにイベントをセット
    document.querySelector('.js-add-drop-item').addEventListener('click', function () {
      // ドロップゾーンのクローンを作成(中身はクローンしない)
      const dropZone = dropZones[0].cloneNode();
      // イベントをセット
      dropEventHandlers(dropZone);
      // ドロップゾーンの一覧に追加
      dropItems.appendChild(dropZone);
    });
  }, false);
}
