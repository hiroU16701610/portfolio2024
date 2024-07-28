document.addEventListener("DOMContentLoaded", function() {
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
                icon.src = '/portfolio/assets/image/aikon-white.svg'; // アイコンの画像を変更
            } else if (isWhiteBackground) {
                span.style.backgroundColor = 'var(--hmb-gray)';
                icon.src = '/portfolio2024/assets/image/aikon.svg'; // 元のアイコンの画像に戻す
            } else {
                span.style.backgroundColor = 'var(--hmb-gray)';
                icon.src = '/portfolio2024/assets/image/aikon.svg'; // 元のアイコンの画像に戻す
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

