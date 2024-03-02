document.addEventListener('DOMContentLoaded', function () {
    
    // Shareボタンの出現コントロール
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        console.log('Scroll Position:', scrollPosition);

        var button = document.querySelector('.Twitter-share');
        console.log('Button Element:', button);

        if (button) {
            if (scrollPosition > 2400) {
                button.classList.add('show-button');
            } else {
                button.classList.remove('show-button');
            }
        }
    });

    // Header-logoの色変更
    // ロゴの要素を取得
    const headerLogo = document.querySelector('.header-logo');

    // headerLogoが存在する場合のみ処理を実行
    if (headerLogo) {
        // スクロール時のイベントリスナーを追加
        window.addEventListener('scroll', function () {
            // スクロール位置が100vhを超えたら
            if (window.scrollY > window.innerHeight) {
                // 黒いロゴに切り替え
                headerLogo.src = '../ARSENAL-Q62/img/logo/Q62-Arsenal_logo_Arsenal-Q62_logo_header_bk.svg';
            } else {
                // 白いロゴに戻す
                headerLogo.src = '../ARSENAL-Q62/img/logo/Q62-Arsenal_logo_Arsenal-Q62_logo_header_wh.svg';
            }
        });
    }

    // Twitter Share
    var tweetButton = document.querySelector('.tweet-button');
    if (tweetButton) {
        tweetButton.addEventListener('click', function () {
            var tweetText = document.title + '\n' + window.location.href + '\nfrom @Qoo6221';
            var tweetUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tweetText);
            window.open(tweetUrl, '_blank');
        });
    }
});
