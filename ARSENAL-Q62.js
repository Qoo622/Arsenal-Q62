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

var arr = []
//初期値の設定
function TypingInit() {
	$('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
		arr[i] = new ShuffleText(this);//動作させるテキストを配列に格納
	});
}
//スクロールした際のアニメーションの設定
function TypingAnime() {
	$(".js_typing").each(function (i) {
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			if(!$(this).hasClass("endAnime")){//endAnimeのクラスがあるかチェック
				arr[i].start();//配列で登録テキストのアニメーションをおこなう
				arr[i].duration = 800;//テキストが最終変化するまでの時間※規定値600
				$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
			}
		}else{
			$(this).removeClass("endAnime"); //範囲外にスクロールした場合はendAnimeのクラスを削除
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	TypingInit(); //初期設定
	TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
