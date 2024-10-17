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
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';  // ランダムに表示する文字
    var finalLength = finalText.length;  // 最終テキストの長さ
    var currentText = '';  // 確定している文字列
    var i = 0;  // 現在のインデックス

    // 一文字ずつランダムに表示し、最終的なテキストに置き換える
    var interval = setInterval(function() {
        if (i < finalLength) {
            var randomText = '';  // ランダム文字列を生成
            for (var j = i; j < finalLength; j++) {
                randomText += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }

            // ランダムな部分と確定部分を結合して表示
            element.text(currentText + randomText);

            // 現在の文字を確定させて次の文字に進む
            currentText += finalText.charAt(i);
            i++;  // 次の文字に移動
        } else {
            // アニメーション終了: 最終的なテキストを設定
            clearInterval(interval);
            element.text(finalText);
            element.css('opacity', 1);  // 完全に表示
        }
    }, 150);  // 150msごとに1文字処理（必要に応じて調整可能）
}

