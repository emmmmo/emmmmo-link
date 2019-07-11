"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
function createRequest(apis) {
    if (apis === void 0) { apis = {}; }
    var apiList = {};
    Object.keys(apis).forEach(function (key) {
        apiList[key] = function (options) {
            var _a = options.data, data = _a === void 0 ? {} : _a;
            return request_1.default.request(__assign({}, apis[key], { data: data }));
        };
    });
    return apiList;
}
exports.default = createRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFzQztBQUl0QyxTQUFTLGFBQWEsQ0FBQyxJQUFtQjtJQUFuQixxQkFBQSxFQUFBLFNBQW1CO0lBQ3hDLElBQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQTtJQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQUMsT0FBWTtZQUNsQixJQUFBLGlCQUFTLEVBQVQsOEJBQVMsQ0FBWTtZQUM3QixPQUFPLGlCQUFPLENBQUMsT0FBTyxjQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQ1osSUFBSSxNQUFBLElBQ0osQ0FBQTtRQUNKLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQztBQUVELGtCQUFlLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXG5pbnRlcmZhY2UgQVBJX1NQQUNFIHtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KGFwaXM6QVBJX1NQQUNFID0ge30pOkFQSV9TUEFDRSB7XG4gIGNvbnN0IGFwaUxpc3Q6QVBJX1NQQUNFID0ge31cbiAgT2JqZWN0LmtleXMoYXBpcykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICBhcGlMaXN0W2tleV0gPSAob3B0aW9uczogYW55KSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgPSB7fSB9ID0gb3B0aW9uc1xuICAgICAgcmV0dXJuIHJlcXVlc3QucmVxdWVzdCh7XG4gICAgICAgIC4uLmFwaXNba2V5XSxcbiAgICAgICAgZGF0YVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBhcGlMaXN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlcXVlc3QiXX0=