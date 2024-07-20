// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('#hmb');
    const body = document.body;

    hamburgerMenu.addEventListener('click', function() {
        body.classList.toggle('active');
    });
});


// リロード
document.addEventListener('DOMContentLoaded', function() {
    const aikonElement = document.querySelector('.aikon');
    const loadingScreen = document.getElementById('loading-screen');
    const whiteScreen = document.getElementById('white-screen');
    const content = document.getElementById('content');

    if (aikonElement) {
        aikonElement.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトのリンク動作を無効にする
            loadingScreen.style.display = 'flex'; // ローディングスクリーンを表示する
            setTimeout(function() {
                window.location.reload(true); // 画面をリロードする
            }, 1000); // アニメーションを表示するための遅延を設定（ここでは2000ミリ秒）
        });
    }

    // beforeunloadイベントリスナーを追加
    window.addEventListener('beforeunload', function(event) {
        loadingScreen.style.display = 'flex'; // ローディングスクリーンを表示する
    });

    window.addEventListener('load', function() {
        whiteScreen.style.display = 'block';
        setTimeout(() => {
            whiteScreen.classList.add('fade-out');
        }, 100); // 100msの遅延を追加してアニメーションを実行

        setTimeout(() => {
            whiteScreen.style.display = 'none';

            // コンテンツをフェードインさせる
            if (content) {
                content.classList.add('show');
            }
        }, 1000); // 1秒後に白い画面を非表示にする
    });
});
