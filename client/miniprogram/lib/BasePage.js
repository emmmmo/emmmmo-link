"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../api/index");
var BasePage = (function () {
    function BasePage() {
        this.setDefaultData({
            abs: '111'
        });
        this.data = {};
        this.api = index_1.default;
    }
    BasePage.prototype.showErrorMsg = function (title) {
        wx.showModal({ title: title });
    };
    BasePage.prototype.setDefaultData = function (data) {
        this.data = Object.assign({}, this.data, data);
    };
    return BasePage;
}());
exports.default = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4QjtBQUU5QjtJQUdFO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNsQixHQUFHLEVBQUUsS0FBSztTQUNYLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxlQUFHLENBQUE7SUFDaEIsQ0FBQztJQUNELCtCQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3hCLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBS0QsaUNBQWMsR0FBZCxVQUFlLElBQUk7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlUGFnZSB7XG4gIHByaXZhdGUgZGF0YTphbnk7XG4gIHByaXZhdGUgYXBpOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0RGVmYXVsdERhdGEoe1xuICAgICAgYWJzOiAnMTExJ1xuICAgIH0pXG4gICAgdGhpcy5kYXRhID0ge31cbiAgICB0aGlzLmFwaSA9IGFwaVxuICB9XG4gIHNob3dFcnJvck1zZyh0aXRsZTogc3RyaW5nKSB7XG4gICAgd3guc2hvd01vZGFsKHt0aXRsZTogdGl0bGV9KVxuICB9XG4gIC8qKlxuICAgKiDorr7nva7liJ3lp4sgZGF0YVxuICAgKiBAcGFyYW0geyp9IGRhdGEgXG4gICAqL1xuICBzZXREZWZhdWx0RGF0YShkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhLCBkYXRhKVxuICB9XG59Il19