var app = getApp();
console.log(app.globalData);
Page({
    data: {
        message: 'Hello World'
    },
    onLoad() {
        console.log('Page_Loading...');
    },
    onReady() {
        console.log('Page_Ready');
        this.changeMsg();
    },
    onShow() {
        console.log('Page_Show');
    },
    onHide() {
        console.log('Page_hide');
    },
    onUnload() {
        console.log('Page_Unloading...');
    },
    onPullDownRefresh() {
        console.log('Page_Pulling...');
    },
    changeMsg() {
        this.setData({
            message: 'Hello World Two'
        })
    }
});