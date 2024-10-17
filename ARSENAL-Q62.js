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
                headerLogo.src = 'https://qoo622.github.io/Arsenal-Q62/img/logo/Q62-Arsenal_logo_Arsenal-Q62_logo_header_bk.svg';
            } else {
                // 白いロゴに戻す
                headerLogo.src = 'https://qoo622.github.io/Arsenal-Q62/img/logo/Q62-Arsenal_logo_Arsenal-Q62_logo_header_wh.svg';
            }
        });
    }

    //画面がスクロールされたら動く記述
    $(window).on('load scroll', function() {

    // ふわっと出現
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //上の50px要素より
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');//画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass('fadeUp');//画面外に出たらfadeUpというクラス名を外す
        }    });
        //ここまで動きのきっかけ指定
    }); //ここまで画面が読み込まれたときに動く記述

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

// テキストのランダム出現処理
$(window).on('scroll', function() {
    $('.randomTextTrigger').each(function() {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight && !$(this).hasClass('randomText')) {
            var targetText = $(this).data('text');
            animateText($(this), targetText);
            $(this).addClass('randomText');  // 2度目以降アニメーションをしない
        }
    });
});

function animateText(element, finalText) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var currentText = Array(finalText.length).fill(''); // テキストの長さに合わせて初期化
    var i = 0;

    var interval = setInterval(function() {
        if (i < finalText.length) {
            // 各文字をランダムな文字に置き換えながら進行
            currentText[i] = randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            element.text(currentText.join('')); // currentText全体を表示

            i++;
        } else {
            // 最終的なテキストに置き換え
            clearInterval(interval);
            element.text(finalText);  // 完全なテキストにする
            element.css('opacity', 1); // テキストの不透明度を1にして表示
        }
    }, 100);  // 文字が変わる速度を指定
}
