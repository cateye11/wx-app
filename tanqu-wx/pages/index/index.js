//index.js
//获取应用实例
var app = getApp();

Page({

    onLoad() {
        this.queryHotInfo('instagram', 1);
    },

    data: {
        currentType: 'hot',
        currentSub: 0,
        currentSwiper: 0,
        hotDataList: [],
        subDataList: [],
        specialDataList: []
    },

    queryHotInfo(type, page) {
         let data = {
            page: page || 1,
            pageSize: 10,
            platform: type || 'instagram',
            locale: 'zh_CN'
        };
        this.server(data, 'posts/hot', (res) => {
            console.log(res);
            if (res.data.meta.statusCode == 200) {
                this.setData({
                    hotDataList: res.data.content
                });
            }
        });
    },

    querySubInfo(type, page) {
        let data = {
            locale: 'zh_CN',
            page: page || 1,
            pageSize: 10
        };
        this.server(data, 'subscribe/userInterestSubscribe/1', (res) => {
            console.log(res);
            if (res.data.meta.statusCode == 200) {
                this.setData({
                    subDataList: res.data.content
                });
            }
        });
    },

    querySpecialInfo(page) {
        let data = {
            locale: 'zh_CN',
            page: page || 1,
            pageSize: 10,
        };
        this.server(data, 'trending/topics', (res) => {
            console.log(res);
            if (res.data.meta.statusCode == 200) {
                this.setData({
                    specialDataList: res.data.content
                });
            }
        });
    },

    changeType(e) {
        let type = e.target.dataset.type;
        if (type == this.data.currentType) return;
        this.setData({
            currentType: type
        });
        if (type == 'hot') {

        } else if (type == 'subscribe') {
            this.querySubInfo('123', 1);
        } else if (type == 'special') {
            this.querySpecialInfo(1);
        }
    },

    changePlatform(e) {
        let index = e.target.dataset.index,
            platform = e.target.dataset.platform
        this.setData({
            currentSwiper: index
        });
        this.queryHotInfo(platform, 1);
    },

    changeSub(e) {
        let index = e.target.dataset.sub;
        this.setData({
            currentSub: index
        });
    },

    server(data, url, callback, method) {
        wx.request({
            url: 'https://prod-api.kankanapp.com.cn/api/v3/'+url,
            data: data || {},
            method: method || 'GET',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accessToken': '1a862e0d-036a-4c80-bdb5-6ffdaaf67f999a6a1aaafe73c572b7374828b03a1881'
            },
            complete(res) {
                callback && callback(res);
            }
        });
    }
})
