//index.js
//获取应用实例
var app = getApp();

Page({

    countRate() {
        
    },

    changeType(e) {
        let type = e.target.dataset.type;
        if (type == this.data.currentType) return;
        this.setData({
            currentType: type
        });
    },

    swiperChange(e) {
        this.setData({
            currentSwiper: Number(e.detail.current)
        });
    },

    changeSwiper(e) {
        let index = e.target.dataset.platform;
        this.setData({
            currentSwiper: index
        });
    },

    subChange(e) {
        this.setData({
            currentSub: Number(e.detail.current)
        });
    },

    changeSub(e) {
        let index = e.target.dataset.sub;
        this.setData({
            currentSub: index
        });
    },

    data: {
        currentType: 'hot',
        currentSwiper: 0,
        currentSub: 0,
        list: [
        {
            "nickname": "updates_in_cinema_v2.0",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/11374419_994183873936862_865244682_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/14776450078597eeffcff-e654-4452-b7e3-811f9f19623b@!1242",
                "width": 1242,
                "height": 698
            },
            "type": "video",
            "title": "这大概是《奇异博士》被黑得最好笑的一次。",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/c02680f7-8ec0-4e25-a132-e7a52fb64955.mp4",
                "width": 1080,
                "height": 607
            },
            "publishTime": 1477321383000
        },
        {
            "nickname": "xxxibgdrgn",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/14705036_1632010193757961_3967048527225290752_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/14776447195762dec2c74-658a-4992-8597-92838a7ac636@!1242",
                "width": 1242,
                "height": 698
            },
            "type": "video",
            "title": "GD体验Sky Diving比教练还嗨，在天上也不忘耍宝。",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/6f18fdc4-5b9a-49e1-8b0c-dbce2430413a.mp4",
                "width": 1080,
                "height": 607
            },
            "publishTime": 1477599252000
        },
        {
            "nickname": "theellenshow",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/14717545_1027177090741467_3996620519519551488_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/14776422995463fe97dfc-46fb-4719-87af-e569d01d7c58@!580x580",
                "width": 580,
                "height": 580
            },
            "type": "image",
            "title": "脱口秀Ellen晒自己Cos成各种女星的万圣节装扮，玩得真大。",
            "videoSpec": "",
            "publishTime": 1477603809000
        },
        {
            "nickname": "oohkdrama",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/14550118_366410683748892_4176019834594656256_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/1477639635373851d7259-0aad-4848-bdeb-3dcc7362b5d4@!580x580",
                "width": 580,
                "height": 580
            },
            "type": "image",
            "title": "《蓝色大海的传说》公布两位主演的海报，11月16日首播。",
            "videoSpec": "",
            "publishTime": 1477624410000
        },
        {
            "nickname": "vstheone",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/14676575_229072987509939_6018283551554797568_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/1477588129859bf5b6de2-b42a-488f-b4fa-b4174bf6752b@!1242",
                "width": 1242,
                "height": 1242
            },
            "type": "video",
            "title": "维秘今年的Fantasy Bra价值300万美金，由超模Jasmine佩戴走秀。",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/f9a7d385-3670-47e0-b4a5-afbc8e7c03ac.mp4",
                "width": 640,
                "height": 640
            },
            "publishTime": 1477585051000
        },
        {
            "nickname": "lok666",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/11325031_885863324844056_1336569796_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/14774705017624a367307-7fce-436d-adb9-54290e9b89b6@!1242",
                "width": 1242,
                "height": 698
            },
            "type": "video",
            "title": "彭于晏为余文乐新店拍摄宣传VCR，果真娱乐圈好基友啊。",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/289b6b1d-ef34-472e-9b92-18c03ed929fa.mp4",
                "width": 612,
                "height": 344
            },
            "publishTime": 1477392411000
        },
        {
            "nickname": "nanami_726",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/14295479_176446082797199_5868214087107739648_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/1477476022814431acac7-d1bc-4969-83e0-4b5cb6175333@!1242",
                "width": 1242,
                "height": 698
            },
            "type": "video",
            "title": "Gigi Hadid和Kendall Jenner一起演绎比伯的《Baby》。",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/be8cf890-2b34-476c-8965-a016e8173c29.mp4",
                "width": 640,
                "height": 360
            },
            "publishTime": 1477475738000
        },
        {
            "nickname": "theellenshow",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/14717545_1027177090741467_3996620519519551488_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/1477469382598f87f7aaf-506b-45df-8b14-ed80eb6f180c@!1242",
                "width": 1242,
                "height": 698
            },
            "type": "video",
            "title": "美国著名脱口秀Ellen Show为水果姐制作生日特辑。",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/883dc8fb-3f42-46af-86c7-02b2ff1138ae.mp4",
                "width": 1080,
                "height": 607
            },
            "publishTime": 1477439336000
        },
        {
            "nickname": "allthecw",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/10995187_1563419913899183_913068483_a.jpg/10995187_1563419913899183_913068483_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/14774764938933d18973d-4a13-4bcf-b358-c6026feebef9@!580x580",
                "width": 580,
                "height": 580
            },
            "type": "image",
            "title": "妮娜杜波夫愿意回归《吸血鬼日记》，坐等Elena在本季完结之前出现！",
            "videoSpec": "",
            "publishTime": 1477459689000
        },
        {
            "nickname": "k_hanna_",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/12519318_707862566015638_1165141633_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/1477461875159c15f66a0-dc5a-4f4e-bb32-6e3f873c56bc@!580x580",
                "width": 580,
                "height": 580
            },
            "type": "image",
            "title": "姜汉娜公布李俊基“新娘照”，凤冠很适合四王子嘛～",
            "videoSpec": "",
            "publishTime": 1477439707000
        },
        {
            "nickname": "shakira",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-19/s150x150/14582265_310298555997901_1249618316704612352_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/1477470293113a0aa1986-0c17-4fb9-9cc6-024897f717aa@!580x580",
                "width": 580,
                "height": 580
            },
            "type": "image",
            "title": "性感歌姬夏奇拉晒“魔法”自拍。",
            "videoSpec": "",
            "publishTime": 1477405395000
        },
        {
            "nickname": "ladygaganewz",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/13398749_1123202374413507_314593863_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/147741085413429d24bbd-76db-4a79-9bec-72a0269a7990@!1242",
                "width": 1242,
                "height": 698
            },
            "type": "video",
            "title": "Gaga的开车唱歌秀预告片首播，柯登时尚雷母造型神赞！",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/dbf2f91d-5f8d-40d3-9fb8-dde2b9771426.mp4",
                "width": 1080,
                "height": 607
            },
            "publishTime": 1477356370000
        },
        {
            "nickname": "skyom_",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/14549925_863502673785230_7028723231263555584_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/1477410293149c8b6cb28-11eb-47a1-9c7b-5061d85fe49d@!1242",
                "width": 1242,
                "height": 698
            },
            "type": "video",
            "title": "日本歌后安室奈美惠献唱《死亡笔记：点亮新世纪》，歌名《Fighter》。",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/53f3d162-8119-4cdb-b116-1a23462149cc.mp4",
                "width": 640,
                "height": 360
            },
            "publishTime": 1477398923000
        },
        {
            "nickname": "xxxibgdrgn",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/14705036_1632010193757961_3967048527225290752_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/1477390203905a69f7036-72f7-4194-b26b-6d33a4c68d73@!1242",
                "width": 1242,
                "height": 1242
            },
            "type": "video",
            "title": "当你被工作压得哭不出来的时候，看看GD的度假视频，你就能哭出来了。",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/b5fb7b65-20a9-4ab7-9ce6-2149f7fc0b81.mp4",
                "width": 612,
                "height": 612
            },
            "publishTime": 1477377620000
        },
        {
            "nickname": "minozyulha",
            "avatar": "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash4/t51.2885-15/s150x150/14033496_583198775174987_539919246_a.jpg",
            "platform": "instagram",
            "imgSpec": {
                "url": "http://avator-cdn.kankanapp.com.cn/avatar/14773893235875fc5a237-7361-40e6-b858-78133f17b7d8@!1242",
                "width": 1242,
                "height": 698
            },
            "type": "video",
            "title": "《蓝色大海的传说》公布第二波预告，对手戏超欢乐。",
            "videoSpec": {
                "url": "http://rm-dragon-cdn.kankanapp.com.cn/audio/b9e7224a-7945-4c13-9d4a-f3918b93ec16.mp4",
                "width": 640,
                "height": 360
            },
            "publishTime": 1477386785000
        }
        ]
    }
})
