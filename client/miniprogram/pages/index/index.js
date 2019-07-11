"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a = getApp(), WeChat = _a.WeChat, app = __rest(_a, ["WeChat"]);
var Pages = (function (_super) {
    __extends(Pages, _super);
    function Pages() {
        var _this = _super.call(this) || this;
        _this.setDefaultData({
            motto: '点击 “编译” 以构建13',
            abs: '222',
            userInfo: {},
            hasUserInfo: false,
            canIUse: wx.canIUse('button.open-type.getUserInfo'),
        });
        return _this;
    }
    Pages.prototype.bindViewTap = function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    };
    Pages.prototype.userInfoReadyCallback = function () {
        this.api.user.getUserInfo({ data: '1111111' }).then(function () {
            console.log('请求成功咯');
        }).catch(function () {
            console.log('请求失败咯');
        });
        console.log(app.globalData.userInfo);
        this.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: true,
        });
    };
    Pages.prototype.getUserInfo = function (e) {
    };
    return Pages;
}(WeChat.BasePage));
WeChat.createPage(Pages);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxhQUEyQixFQUExQixrQkFBTSxFQUFFLDRCQUFrQixDQUFBO0FBQ2pDO0lBQW9CLHlCQUFlO0lBQ2pDO1FBQUEsWUFDRSxpQkFBTyxTQVFSO1FBUEMsS0FBSSxDQUFDLGNBQWMsQ0FBQztZQUNsQixLQUFLLEVBQUUsZUFBZTtZQUN0QixHQUFHLEVBQUUsS0FBSztZQUNWLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFFLEtBQUs7WUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7U0FDcEQsQ0FBQyxDQUFBOztJQUNKLENBQUM7SUFFRCwyQkFBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxxQ0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQ2pDLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCwyQkFBVyxHQUFYLFVBQVksQ0FBTTtJQUNsQixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFoQ0QsQ0FBb0IsTUFBTSxDQUFDLFFBQVEsR0FnQ2xDO0FBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtXZUNoYXQsIC4uLmFwcH0gPSBnZXRBcHAoKVxuY2xhc3MgUGFnZXMgZXh0ZW5kcyBXZUNoYXQuQmFzZVBhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zZXREZWZhdWx0RGF0YSh7XG4gICAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6MTMnLFxuICAgICAgYWJzOiAnMjIyJyxcbiAgICAgIHVzZXJJbmZvOiB7fSxcbiAgICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICB9KVxuICB9XG4gIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgIH0pXG4gIH1cbiAgdXNlckluZm9SZWFkeUNhbGxiYWNrKCkge1xuICAgIHRoaXMuYXBpLnVzZXIuZ2V0VXNlckluZm8oe2RhdGE6ICcxMTExMTExJ30pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ+ivt+axguaIkOWKn+WSrycpXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ+ivt+axguWksei0peWSrycpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhhcHAuZ2xvYmFsRGF0YS51c2VySW5mbylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICB9XG59XG5cbldlQ2hhdC5jcmVhdGVQYWdlKFBhZ2VzKTsiXX0=