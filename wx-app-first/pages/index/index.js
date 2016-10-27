var app = getApp(),
    common = require('../../common/common.js');
console.log(app.globalData);
common.sayGoodbye();
Page({
    data: {
        message: 'Hello World',
        id: 123,
        toggle: true
    },
    onLoad() {
        // 一个页面调用一次
        // 参数可以获取 wx.navigateTo 和 wx.redirectTo 及 <navigator/> 中的query
        console.log('Page_Loading...');
    },
    onReady() {
        // 一个页面只会调用一次，代表页面已经准备好，可以和视图层进行交互
        // 对页面的设置如 wx.setNavigationBarTitle 请在这之后设置
        console.log('Page_Ready');
    },
    onShow() {
        // 每次打开页面都会调用一次
        console.log('Page_Show');
    },
    onHide() {
        // 当 navigateTo 或底部 tab 切换时调用
        console.log('Page_hide');
    },
    onUnload() {
        // 当 redirectTo 或 navigateBack 的时候调用
        console.log('Page_Unloading...');
    },
    onPullDownRefresh() {
        console.log('Page_Pulling...');
        this.changeMsg();
        wx.stopPullDownRefresh(); //下拉弹回
    },
    changeMsg() {
        this.setData({
            message: 'Hello World Two'
        })
    },
    viewTap() {
        this.setData({
            toggle: !this.data.toggle
        });
    },
    sayId(e) {
        console.log(e.target.id);
    }
});