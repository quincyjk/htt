var app = new Vue({
    el: '#app',
    data: {
        start:0,
        fx_share:'分享好友 共享红利!',
        zh_img:'images/zj01.png',
        zh_img_cos:'images/cuo_03.png',
        inner:'恭喜获得“小科”1只！',
        innerw:'已放入“我的奖品”，请立即填写领取地址',
        current_tab:true,
        close:true,
        index:[{
            pic:'images/logo.png',
            prize:'我的奖品',
            explain:'我的说明',
            contenys:'images/contenys.png',
            icon:'images/icon.png'
        }],
        draw:[{
            pic:'images/logo.png',
            prize:'我的奖品',
            explain:'我的说明',
            contenys:'images/contenys-bg.png',
            icon:'images/iocns.png'
        }],
        tab:[{
            logo_user:'images/3.png',
            name:'抱枕',
            contents1:'注意事项:',
            contents2:'实物奖品按填写的地址快递寄送',
            btn:'未使用'
        },{
            logo_user:'images/3.png',
            name:'抱枕',
            contents1:'注意事项:',
            contents2:'实物奖品按填写的地址快递寄送',
            btn:'未使用'
        },{
            logo_user:'images/3.png',
            name:'抱枕',
            contents1:'注意事项:',
            contents2:'实物奖品按填写的地址快递寄送',
            btn:'未使用'
        },{
            logo_user:'images/3.png',
            name:'抱枕',
            contents1:'注意事项:',
            contents2:'实物奖品按填写的地址快递寄送',
            btn:'未使用'
        }],
        fill:[{

        }],
        prize:0,
        adds: 0,
        add_title:'地址填写失败！',
        add_name:'请输入正确的信息',
        explains:0
    },
    methods:{
        sfa:function(){
           console.log(1)
        },
        runadd:function () {
            var nameEl = document.getElementById('picker');

            picker.on('picker.select', function (selectedVal, selectedIndex) {
                var text1 = first[selectedIndex[0]].text;
                var text2 = second[selectedIndex[1]].text;
                var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';
                nameEl.value = text1 + ' ' + text2 + ' ' + text3;
            });

            picker.on('picker.change', function (index, selectedIndex) {
                if (index === 0){
                    firstChange();
                } else if (index === 1) {
                    secondChange();
                }

                function firstChange() {
                    second = [];
                    third = [];
                    checked[0] = selectedIndex;
                    var firstCity = city[selectedIndex];
                    if (firstCity.hasOwnProperty('sub')) {
                        creatList(firstCity.sub, second);

                        var secondCity = city[selectedIndex].sub[0]
                        if (secondCity.hasOwnProperty('sub')) {
                            creatList(secondCity.sub, third);
                        } else {
                            third = [{text: '', value: 0}];
                            checked[2] = 0;
                        }
                    } else {
                        second = [{text: '', value: 0}];
                        third = [{text: '', value: 0}];
                        checked[1] = 0;
                        checked[2] = 0;
                    }

                    picker.refillColumn(1, second);
                    picker.refillColumn(2, third);
                    picker.scrollColumn(1, 0)
                    picker.scrollColumn(2, 0)
                }

                function secondChange() {
                    third = [];
                    checked[1] = selectedIndex;
                    var first_index = checked[0];
                    if (city[first_index].sub[selectedIndex].hasOwnProperty('sub')) {
                        var secondCity = city[first_index].sub[selectedIndex];
                        creatList(secondCity.sub, third);
                        picker.refillColumn(2, third);
                        picker.scrollColumn(2, 0)
                    } else {
                        third = [{text: '', value: 0}];
                        checked[2] = 0;
                        picker.refillColumn(2, third);
                        picker.scrollColumn(2, 0)
                    }
                }

            });

           $('body').on('click','#picker',function () {
                        picker.show();
                    });
        },
        run:function () {
            lottery.init('lottery');
            if(click) { //click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
                return false;

            } else {
                lottery.speed = 100;
                roll(); //转圈过程不响应click事件，会将click置为false
                click = true; //一次抽奖完成后，设置click为true，可继续抽奖
                return false;
            }
        }
    }
})