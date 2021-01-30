function room() {
    // 保存するためのボタンを取得する
    const submit = document.getElementById('submit');
    // 上記のボタンをクリックした時に、イベントが発火する
    submit.addEventListener( 'click', (e) => {
        // 非同期通信を実装するために必要なオブジェクト、XHRHttpRequestオブジェクトを生成する
        const XHR = new XMLHttpRequest();
        // フォームに入力された値を取得できるオブジェクトの生成
        const formData = new FormData(document.getElementById("form"));
        // XMLHttpRequestを初期化する
        XHR.open("POST", "/rooms", true);
        // レスポンスの形式を定義する
        XHR.responseType = "json";
        // 取得した入力された値を送信する
        XHR.send(formData);
        // レスポンスがあった場合の処理
        XHR.onload = () => {
            // 200以外のHTTPステータスが返却された場合の処理
            if (XHR.status != 200) {
              alert(`Error ${XHR.status}: ${XHR.statusText}`);
              return null;
            }
            // レスポンスとして返却されたメモのレコードデータを取得
            const item = XHR.response.room;
            // HTMLを描画する場所を指定する際に使用する「描画する親要素」のlistの要素を取得
            const list = document.getElementById("list");
            // 送信後メモの入力フォームが残らないようにリセットする
            const formText = document.getElementById("name");
            // 「メモとして描画する部分のHTML」を定義
            const HTML = `
              <div class="post">
                <div class="post-data">
                ${item.name}
                </div>
              </div>`;
            list.insertAdjacentHTML("afterend", HTML);
            // 「メモの入力フォームに入力されたままの文字」をリセット
            formText.value = "";
          };
      　   //  処理の重複の予防
          e.preventDefault();
    });
}

window.addEventListener('load', room);