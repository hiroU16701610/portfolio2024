// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('#hmb');
    const body = document.body;
    const spans = document.querySelectorAll('#hmb span');

    hamburgerMenu.addEventListener('click', function() {
        body.classList.toggle('active');

        // スパン要素の色を白色にする（クリック時）
        if (body.classList.contains('active')) {
            spans.forEach(span => {
                span.style.backgroundColor = 'var(--hmb-white)';
            });
        } else {
            spans.forEach(span => {
                span.style.backgroundColor = 'var(--hmb-gray)';
            });
        }
    });
    function updateHamburgerColor() {
        const hmb = document.getElementById('hmb');
        const spans = hmb.getElementsByTagName('span');

        // 現在のスクロール位置における背景色を取得
        const backgroundColor = window.getComputedStyle(document.elementFromPoint(hmb.getBoundingClientRect().left, hmb.getBoundingClientRect().top)).backgroundColor;

        // CSS変数を使用して色を設定
        const isBlackBackground = backgroundColor === 'rgb(0, 0, 0)';
        const isWhiteBackground = backgroundColor === 'rgb(255, 255, 255)';

        for (let i = 0; i < spans.length; i++) {
            if (isBlackBackground) {
                spans[i].style.backgroundColor = 'var(--hmb-white)';
            } else if (isWhiteBackground) {
                spans[i].style.backgroundColor = 'var(--hmb-gray)';
            } else {
                spans[i].style.backgroundColor = 'var(--hmb-gray)';
            }
        }
    }

    // スクロールイベントを監視して色を更新
    window.addEventListener('scroll', updateHamburgerColor);

    // 初期化時に色を設定する
    updateHamburgerColor();
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
