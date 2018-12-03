$(function () {
    setInterval(function () {
        if($('.draw').hasClass('draw-bg2')){
            $('.draw').removeClass('draw-bg2');
        }else{
            $('.draw').addClass('draw-bg2');
        }
    },500)
    $('body').on('click','.tab-header-item',function () {
        var index = $(this).index();
        $(this).addClass('current_tab').siblings().removeClass('current_tab');
        $('.tab-item').eq(index).show().siblings().hide();
    });
    $('body').on('click','#opern_s',function () {
        console.log(1111);
        $('#layui-m-layer0').hide();
         $('.htt-wrap-box').removeClass('htt-wrap-box-s')
    });
// 防止键盘把当前输入框给挡住
    $('body').on('click','.input-class',function () {
       var target = this;
        setTimeout(function(){
            target.scrollIntoViewIfNeeded;
        },100);
    });
    $('body').on('blur','.input-class',function () {
        var target = this;
        setTimeout(function(){
            target.scrollIntoView(false);
        },100);
    });
    $('body').on('click','.input-class-x',function () {
        document.activeElement.blur();
    });
//音乐
    //音频标签播放
    function audioAutoPlay(id){
        var audio = document.getElementById(id);
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay('bg');

//音乐开启
    function music(){
        //音乐
        var music = 0;
        var musicOpen = true;
        var musicTween = setInterval(function() {
            music += 2;
            $('#music').css('transform', "rotate(" + music + "deg)");
            if(music == 360) {
                music = 0;
            }
        }, 10);
        $('#music').on('touchstart', function() {
            if(musicOpen == true) {
                musicOpen = false;
                clearInterval(musicTween);
                $('#bg')[0].pause();
            } else {
                musicOpen = true;
                musicTween = setInterval(function() {
                    music += 2;
                    $('#music').css('transform', "rotate(" + music + "deg)");
                    if(music == 360) {
                        music = 0;
                    }
                }, 10);
                $('#bg')[0].play();
            }
        });
    }
    music();

    // 音频预加载 针对ios
    function playAudioLoad(id) {
        var audio = document.getElementById(id);
        audio.volume = 0;
        if (window.WeixinJSBridge) {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                audio.play();
                audio.pause();
                audio.currentTime = 0;
            }, false);
        } else {
            document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    audio.play();
                    audio.pause();
                    audio.currentTime = 0;
                });
            }, false);
        }
        audio.play();
        audio.pause();
        audio.currentTime = 0;
        return false;
    }

// 重新开始音频播放
    function playAudio(id) {
        var audio = document.getElementById(id);
        audio.currentTime = 0;
        if (window.WeixinJSBridge) {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                audio.play();
            }, false);
        } else {
            document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    audio.play();
                });
            }, false);
        }
        audio.play();
        return false;
    }

// 多重音频播放 播放流
    function playAudio1(id) {
        var audio = document.getElementById(id);
        audio.volume = 1;
        if (window.WeixinJSBridge) {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                audio.play();
            }, false);
        } else {
            document.addEventListener("WeixinJSBridgeReady", function () {
                WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    audio.play();
                });
            }, false);
        }
        audio.play();
        return false;
    }
    playAudioLoad();
    playAudio();
    playAudio1();
})