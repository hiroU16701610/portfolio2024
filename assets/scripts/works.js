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
        const rect = hamburgerMenu.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // 現在のスクロール位置における背景色を取得
        const elementUnderHamburger = document.elementFromPoint(centerX, centerY);
        const backgroundColor = window.getComputedStyle(elementUnderHamburger).backgroundColor;

        // CSS変数を使用して色を設定
        const isBlackBackground = backgroundColor === 'rgb(0, 0, 0)';
        const isWhiteBackground = backgroundColor === 'rgb(255, 255, 255)';

        spans.forEach(span => {
            if (isBlackBackground) {
                span.style.backgroundColor = 'var(--hmb-white)';
                icon.src = '/prtfolio2024/assets/image/aikon-white.svg'; // アイコンの画像を変更
            } else if (isWhiteBackground) {
                span.style.backgroundColor = 'var(--hmb-gray)';
                icon.src = '/prtfolio2024/assets/image/aikon.svg'; // 元のアイコンの画像に戻す
            } else {
                span.style.backgroundColor = 'var(--hmb-gray)';
                icon.src = '/prtfolio2024/assets/image/aikon.svg'; // 元のアイコンの画像に戻す
            }
        });
    }

    // スクロールイベントを監視して色を更新
    window.addEventListener('scroll', debounce(updateHamburgerColor, 50));

    // 初期化時に色を設定する
    updateHamburgerColor();
});

// デバウンス関数
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}


// リロード
function reloadPage() {
    // ローディングスクリーンを表示し、ページのトップにスクロール
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex'; // ローディングスクリーンを表示する
    window.scrollTo(0, 0); // ページのトップにスクロール
    
    // リロードを遅延させてローディングスクリーンが表示される時間を確保
    setTimeout(function() {
        window.location.reload(); // 画面をリロードする
    }, 500); // 適切な遅延を設定
}

document.addEventListener('DOMContentLoaded', function() {
    const aikonElement = document.querySelector('.aikon');
    const reloadButton = document.getElementById('reload');
    const loadingScreen = document.getElementById('loading-screen');
    const whiteScreen = document.getElementById('white-screen');
    const content = document.getElementById('body');

    // アイコンクリック時の処理
    if (aikonElement) {
        aikonElement.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトのリンク動作を無効にする
            reloadPage(); // リロード関数を呼び出す
        });
    }

    // リロードボタンクリック時の処理
    if (reloadButton) {
        reloadButton.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトのリンク動作を無効にする
            reloadPage(); // リロード関数を呼び出す
        });
    }

    // windowリサイズ時のイベントリスナーを削除
    window.removeEventListener('beforeunload', function(event) {
        loadingScreen.style.display = 'flex'; // ローディングスクリーンを表示する
    });

    // 初回ロード時に履歴に状態を追加
    history.replaceState({page: 1}, document.title, window.location.href);

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


// svg白
document.addEventListener('DOMContentLoaded', function () {
    const hmb = document.getElementById('hmb');
    const nav = document.querySelector('nav');
    const instagramIcon = document.getElementById('instagram-icon');
    const noteIcon = document.getElementById('note-icon');
    const mailIcon = document.getElementById('mail-icon');
    const Aikon = document.getElementById('aikon');

    hmb.addEventListener('click', function () {
        hmb.classList.toggle('active');
        nav.classList.toggle('active');

        // SVGアイコンの切り替え
        if (hmb.classList.contains('active')) {
            instagramIcon.src = '/portfolio2024/assets/image/instagram-white.svg';
            noteIcon.src = '/portfolio2024/assets/image/note-white.svg';
            mailIcon.src = '/portfolio2024/assets/image/mail-white.svg';
            Aikon.src = '/portfolio2024/assets/image/aikon-white.svg';
        } else {
            instagramIcon.src = '/portfolio2024/assets/image/instagram.svg';
            noteIcon.src = '/portfolio2024/assets/image/note.svg';
            mailIcon.src = '/portfolio2024/assets/image/mail.svg';
            Aikon.src = '/portfolio2024/assets/image/aikon.svg';
        }
    });
});


// スライドさせる
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    // スムーズスクロールの設定
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // href属性の値
            const href = this.getAttribute('href');
            
            // 外部リンクの場合はスムーズスクロールを適用せず、デフォルト動作を許可
            if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
                return;
            }

            event.preventDefault(); // デフォルトの動作を無効にする

            const targetId = href.substring(1); // href属性からIDを取得
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // 目標要素の位置までスクロール
                    behavior: 'smooth' // スムーズスクロール
                });
            }
        });
    });
});
