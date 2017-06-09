'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      var ctx = wx.createCanvasContext('circle');
      ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.setFillStyle('CadetBlue');
      ctx.fill();
      ctx.setShadow(10, 10, 50, 'red');
      ctx.draw();
    }
  }]);

  return Index;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'canvas',
    navigationBarBackgroundColor: '#F7F7F7',
    backgroundColor: '#F7F7F7',
    navigationBarTextStyle: 'black'
  };
  this.components = {};
  this.data = {
    activePage: 0,
    touchEnd: true,
    touchX: 0,
    touchY: 0,
    touchStartX: 0,
    touchStartY: 0
  };
  this.methods = {
    canvasError: function canvasError(e) {
      console.log(e);
    },
    touchStart: function touchStart(e) {
      this.touchEnd = false;
      this.touchX = e.touches[0].x;
      this.touchY = e.touches[0].y;
      this.touchStartX = e.touches[0].x;
      this.touchStartY = e.touches[0].y;
    },
    touchMove: function touchMove(e) {
      this.touchX = e.touches[0].x;
      this.touchY = e.touches[0].y;
    },
    touchEnd: function touchEnd(e) {
      this.touchEnd = true;
    }
  };
  this.events = {
    'change-view': function changeView() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
}, _temp2);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/canvas'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImN0eCIsInd4IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsImFyYyIsIk1hdGgiLCJQSSIsInNldEZpbGxTdHlsZSIsImZpbGwiLCJzZXRTaGFkb3ciLCJkcmF3IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImNvbXBvbmVudHMiLCJkYXRhIiwiYWN0aXZlUGFnZSIsInRvdWNoRW5kIiwidG91Y2hYIiwidG91Y2hZIiwidG91Y2hTdGFydFgiLCJ0b3VjaFN0YXJ0WSIsIm1ldGhvZHMiLCJjYW52YXNFcnJvciIsImUiLCJjb25zb2xlIiwibG9nIiwidG91Y2hTdGFydCIsInRvdWNoZXMiLCJ4IiwieSIsInRvdWNoTW92ZSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsIiRuYW1lIiwibmFtZSIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQStDVixDQUNSOzs7OEJBRVM7QUFDUixVQUFJQyxNQUFNQyxHQUFHQyxtQkFBSCxDQUF1QixRQUF2QixDQUFWO0FBQ0FGLFVBQUlHLEdBQUosQ0FBUSxHQUFSLEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixDQUFyQixFQUF3QixJQUFJQyxLQUFLQyxFQUFqQztBQUNBTCxVQUFJTSxZQUFKLENBQWlCLFdBQWpCO0FBQ0FOLFVBQUlPLElBQUo7QUFDQVAsVUFBSVEsU0FBSixDQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsS0FBMUI7QUFDQVIsVUFBSVMsSUFBSjtBQUNEOzs7O0VBekRnQyxlQUFLQyxJOzs7T0FDdENDLE0sR0FBUztBQUNQQyw0QkFBd0IsUUFEakI7QUFFUEMsa0NBQThCLFNBRnZCO0FBR1BDLHFCQUFpQixTQUhWO0FBSVBDLDRCQUF3QjtBQUpqQixHO09BT1RDLFUsR0FBYSxFO09BR2JDLEksR0FBTztBQUNMQyxnQkFBWSxDQURQO0FBRUxDLGNBQVUsSUFGTDtBQUdMQyxZQUFRLENBSEg7QUFJTEMsWUFBUSxDQUpIO0FBS0xDLGlCQUFhLENBTFI7QUFNTEMsaUJBQWE7QUFOUixHO09BU1BDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJQyxDQURKLEVBQ087QUFDYkMsY0FBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0QsS0FITztBQUlSRyxjQUpRLHNCQUlHSCxDQUpILEVBSU07QUFDWixXQUFLUCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjTSxFQUFFSSxPQUFGLENBQVUsQ0FBVixFQUFhQyxDQUEzQjtBQUNBLFdBQUtWLE1BQUwsR0FBY0ssRUFBRUksT0FBRixDQUFVLENBQVYsRUFBYUUsQ0FBM0I7QUFDQSxXQUFLVixXQUFMLEdBQW1CSSxFQUFFSSxPQUFGLENBQVUsQ0FBVixFQUFhQyxDQUFoQztBQUNBLFdBQUtSLFdBQUwsR0FBbUJHLEVBQUVJLE9BQUYsQ0FBVSxDQUFWLEVBQWFFLENBQWhDO0FBQ0QsS0FWTztBQVdSQyxhQVhRLHFCQVdFUCxDQVhGLEVBV0s7QUFDWCxXQUFLTixNQUFMLEdBQWNNLEVBQUVJLE9BQUYsQ0FBVSxDQUFWLEVBQWFDLENBQTNCO0FBQ0EsV0FBS1YsTUFBTCxHQUFjSyxFQUFFSSxPQUFGLENBQVUsQ0FBVixFQUFhRSxDQUEzQjtBQUNELEtBZE87QUFlUmIsWUFmUSxvQkFlQ08sQ0FmRCxFQWVJO0FBQ1YsV0FBS1AsUUFBTCxHQUFnQixJQUFoQjtBQUNEO0FBakJPLEc7T0FvQlZlLE0sR0FBUztBQUNQLG1CQUFlLHNCQUFhO0FBQUE7O0FBQzFCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBVCxjQUFRQyxHQUFSLENBQWUsT0FBS1MsS0FBcEIsaUJBQXFDRixPQUFPRyxJQUE1QyxjQUF5REgsT0FBT0ksTUFBUCxDQUFjRixLQUF2RTtBQUNEO0FBSk0sRzs7a0JBeENVdEMsSyIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdjYW52YXMnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0Y3RjdGNycsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBhY3RpdmVQYWdlOiAwLFxyXG4gICAgICB0b3VjaEVuZDogdHJ1ZSxcclxuICAgICAgdG91Y2hYOiAwLFxyXG4gICAgICB0b3VjaFk6IDAsXHJcbiAgICAgIHRvdWNoU3RhcnRYOiAwLFxyXG4gICAgICB0b3VjaFN0YXJ0WTogMFxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGNhbnZhc0Vycm9yKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaFN0YXJ0KGUpIHtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kID0gZmFsc2VcclxuICAgICAgICB0aGlzLnRvdWNoWCA9IGUudG91Y2hlc1swXS54XHJcbiAgICAgICAgdGhpcy50b3VjaFkgPSBlLnRvdWNoZXNbMF0ueVxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBlLnRvdWNoZXNbMF0ueFxyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFkgPSBlLnRvdWNoZXNbMF0ueVxyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaE1vdmUoZSkge1xyXG4gICAgICAgIHRoaXMudG91Y2hYID0gZS50b3VjaGVzWzBdLnhcclxuICAgICAgICB0aGlzLnRvdWNoWSA9IGUudG91Y2hlc1swXS55XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvdWNoRW5kKGUpIHtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAnY2hhbmdlLXZpZXcnOiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cclxuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgbGV0IGN0eCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NpcmNsZScpXHJcbiAgICAgIGN0eC5hcmMoMTAwLCA3NSwgNTAsIDAsIDIgKiBNYXRoLlBJKVxyXG4gICAgICBjdHguc2V0RmlsbFN0eWxlKCdDYWRldEJsdWUnKVxyXG4gICAgICBjdHguZmlsbCgpXHJcbiAgICAgIGN0eC5zZXRTaGFkb3coMTAsIDEwLCA1MCwgJ3JlZCcpXHJcbiAgICAgIGN0eC5kcmF3KClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==