'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Flowers = require('./../libs/Flowers.js');

var _Flowers2 = _interopRequireDefault(_Flowers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'animation',
      navigationBarBackgroundColor: '#F7F7F7',
      backgroundColor: '#F7F7F7',
      navigationBarTextStyle: 'black'
    }, _this.components = {}, _this.data = {
      avatar: 'http://7xndda.com1.z0.glb.clouddn.com/myMarioBlue.jpg',
      flowers: _Flowers2.default,
      animationData: []
    }, _this.methods = {
      imageLoad: function imageLoad(e) {
        console.log(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'createAnimationRadom',
    value: function createAnimationRadom() {
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear'
      });

      var visualX = this.sysInfo.windowWidth;
      var visualY = this.sysInfo.windowHeight;

      var flowerWidth = 20;

      var Y = 0;
      var X = Math.round(Math.random() * (visualX - flowerWidth) + flowerWidth);
      var stepY = Math.round(Math.random() * (60 - 20) + 20);

      // console.log('step',X,stepY)
      animation.translateX(X).step();
      animation.rotate(45).step();

      while (Y < visualY) {
        var rotateR = Math.round(Math.random() * (15 - 0) + 0) - 7;
        // console.log('while',Y,visualY,rotateR)
        animation.translateY(Y += stepY).rotate(rotateR).step();
      }

      animation.opacity(0).step();

      this.animationData = [].concat(_toConsumableArray(this.animationData), [animation.export()]);
    }
  }, {
    key: 'getInfo',
    value: function getInfo() {
      var self = this;
      wx.getSystemInfo({
        success: function success(data) {
          self.sysInfo = data;
        }
      });
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      this.getInfo();

      // 控制花瓣数量
      var COUNT = 5;
      for (var i = 0; i < COUNT; i++) {
        this.createAnimationRadom();
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/animation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImNvbXBvbmVudHMiLCJkYXRhIiwiYXZhdGFyIiwiZmxvd2VycyIsImFuaW1hdGlvbkRhdGEiLCJtZXRob2RzIiwiaW1hZ2VMb2FkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRpb24iLCJ3eCIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJ2aXN1YWxYIiwic3lzSW5mbyIsIndpbmRvd1dpZHRoIiwidmlzdWFsWSIsIndpbmRvd0hlaWdodCIsImZsb3dlcldpZHRoIiwiWSIsIlgiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJzdGVwWSIsInRyYW5zbGF0ZVgiLCJzdGVwIiwicm90YXRlIiwicm90YXRlUiIsInRyYW5zbGF0ZVkiLCJvcGFjaXR5IiwiZXhwb3J0Iiwic2VsZiIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwiZ2V0SW5mbyIsIkNPVU5UIiwiaSIsImNyZWF0ZUFuaW1hdGlvblJhZG9tIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixXQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsdUJBQWlCLFNBSFY7QUFJUEMsOEJBQXdCO0FBSmpCLEssUUFPVEMsVSxHQUFhLEUsUUFHYkMsSSxHQUFPO0FBQ0xDLGNBQVEsdURBREg7QUFFTEMsZ0NBRks7QUFHTEMscUJBQWU7QUFIVixLLFFBTVBDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNHQyxDQURILEVBQ007QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBSE8sSzs7Ozs7MkNBTWE7QUFDckIsVUFBSUcsWUFBWUMsR0FBR0MsZUFBSCxDQUFtQjtBQUNqQ0Msa0JBQVUsSUFEdUI7QUFFakNDLHdCQUFnQjtBQUZpQixPQUFuQixDQUFoQjs7QUFLQSxVQUFNQyxVQUFVLEtBQUtDLE9BQUwsQ0FBYUMsV0FBN0I7QUFDQSxVQUFNQyxVQUFVLEtBQUtGLE9BQUwsQ0FBYUcsWUFBN0I7O0FBRUEsVUFBTUMsY0FBYyxFQUFwQjs7QUFFQSxVQUFJQyxJQUFJLENBQVI7QUFDQSxVQUFNQyxJQUFJQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsTUFBaUJWLFVBQVVLLFdBQTNCLElBQTBDQSxXQUFyRCxDQUFWO0FBQ0EsVUFBTU0sUUFBUUgsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLE1BQWlCLEtBQUssRUFBdEIsSUFBNEIsRUFBdkMsQ0FBZDs7QUFFQTtBQUNBZixnQkFBVWlCLFVBQVYsQ0FBcUJMLENBQXJCLEVBQXdCTSxJQUF4QjtBQUNBbEIsZ0JBQVVtQixNQUFWLENBQWlCLEVBQWpCLEVBQXFCRCxJQUFyQjs7QUFFQSxhQUFPUCxJQUFJSCxPQUFYLEVBQW9CO0FBQ2xCLFlBQUlZLFVBQVVQLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxNQUFpQixLQUFLLENBQXRCLElBQTJCLENBQXRDLElBQTJDLENBQXpEO0FBQ0E7QUFDQWYsa0JBQVVxQixVQUFWLENBQXNCVixLQUFLSyxLQUEzQixFQUFtQ0csTUFBbkMsQ0FBMENDLE9BQTFDLEVBQW1ERixJQUFuRDtBQUNEOztBQUVEbEIsZ0JBQVVzQixPQUFWLENBQWtCLENBQWxCLEVBQXFCSixJQUFyQjs7QUFFQSxXQUFLeEIsYUFBTCxnQ0FBMEIsS0FBS0EsYUFBL0IsSUFBOENNLFVBQVV1QixNQUFWLEVBQTlDO0FBQ0Q7Ozs4QkFFVTtBQUNULFVBQUlDLE9BQU8sSUFBWDtBQUNBdkIsU0FBR3dCLGFBQUgsQ0FBaUI7QUFDZkMsaUJBQVMsdUJBQVE7QUFDZkYsZUFBS2xCLE9BQUwsR0FBZWYsSUFBZjtBQUNEO0FBSGMsT0FBakI7QUFLRDs7OzhCQUVTO0FBQ1IsV0FBS29DLE9BQUw7O0FBRUE7QUFDQSxVQUFNQyxRQUFRLENBQWQ7QUFDQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsS0FBcEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCLGFBQUtDLG9CQUFMO0FBQ0Q7QUFDRjs7OztFQXRFZ0MsZUFBS0MsSTs7a0JBQW5CL0MsSyIsImZpbGUiOiJhbmltYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBGbG93ZXJzIGZyb20gJy4uL2xpYnMvRmxvd2Vycy5qcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnYW5pbWF0aW9uJyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgYXZhdGFyOiAnaHR0cDovLzd4bmRkYS5jb20xLnowLmdsYi5jbG91ZGRuLmNvbS9teU1hcmlvQmx1ZS5qcGcnLFxyXG4gICAgICBmbG93ZXJzOiBGbG93ZXJzLFxyXG4gICAgICBhbmltYXRpb25EYXRhOiBbXVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGltYWdlTG9hZCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb25SYWRvbSgpIHtcclxuICAgICAgbGV0IGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjb25zdCB2aXN1YWxYID0gdGhpcy5zeXNJbmZvLndpbmRvd1dpZHRoXHJcbiAgICAgIGNvbnN0IHZpc3VhbFkgPSB0aGlzLnN5c0luZm8ud2luZG93SGVpZ2h0XHJcblxyXG4gICAgICBjb25zdCBmbG93ZXJXaWR0aCA9IDIwXHJcblxyXG4gICAgICBsZXQgWSA9IDBcclxuICAgICAgY29uc3QgWCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICh2aXN1YWxYIC0gZmxvd2VyV2lkdGgpICsgZmxvd2VyV2lkdGgpXHJcbiAgICAgIGNvbnN0IHN0ZXBZID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDYwIC0gMjApICsgMjApXHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RlcCcsWCxzdGVwWSlcclxuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVgoWCkuc3RlcCgpXHJcbiAgICAgIGFuaW1hdGlvbi5yb3RhdGUoNDUpLnN0ZXAoKVxyXG5cclxuICAgICAgd2hpbGUgKFkgPCB2aXN1YWxZKSB7XHJcbiAgICAgICAgbGV0IHJvdGF0ZVIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTUgLSAwKSArIDApIC0gN1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3aGlsZScsWSx2aXN1YWxZLHJvdGF0ZVIpXHJcbiAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoKFkgKz0gc3RlcFkpKS5yb3RhdGUocm90YXRlUikuc3RlcCgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFuaW1hdGlvbi5vcGFjaXR5KDApLnN0ZXAoKVxyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gWyAuLi50aGlzLmFuaW1hdGlvbkRhdGEsIGFuaW1hdGlvbi5leHBvcnQoKSBdXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5mbyAoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiBkYXRhID0+IHtcclxuICAgICAgICAgIHNlbGYuc3lzSW5mbyA9IGRhdGFcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgdGhpcy5nZXRJbmZvKClcclxuXHJcbiAgICAgIC8vIOaOp+WItuiKseeTo+aVsOmHj1xyXG4gICAgICBjb25zdCBDT1VOVCA9IDVcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDT1VOVDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBbmltYXRpb25SYWRvbSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==