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
      var context = wx.createCanvasContext('circle');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbnRleHQiLCJ3eCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiY29tcG9uZW50cyIsImRhdGEiLCJhY3RpdmVQYWdlIiwidG91Y2hFbmQiLCJ0b3VjaFgiLCJ0b3VjaFkiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoU3RhcnRZIiwibWV0aG9kcyIsImNhbnZhc0Vycm9yIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0b3VjaFN0YXJ0IiwidG91Y2hlcyIsIngiLCJ5IiwidG91Y2hNb3ZlIiwiZXZlbnRzIiwiJGV2ZW50IiwibGVuZ3RoIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBK0NWLENBQ1I7Ozs4QkFFUztBQUNSLFVBQUlDLFVBQVVDLEdBQUdDLG1CQUFILENBQXVCLFFBQXZCLENBQWQ7QUFFRDs7OztFQXJEZ0MsZUFBS0MsSTs7O09BQ3RDQyxNLEdBQVM7QUFDUEMsNEJBQXdCLFFBRGpCO0FBRVBDLGtDQUE4QixTQUZ2QjtBQUdQQyxxQkFBaUIsU0FIVjtBQUlQQyw0QkFBd0I7QUFKakIsRztPQU9UQyxVLEdBQWEsRTtPQUdiQyxJLEdBQU87QUFDTEMsZ0JBQWEsQ0FEUjtBQUVMQyxjQUFVLElBRkw7QUFHTEMsWUFBUSxDQUhIO0FBSUxDLFlBQVEsQ0FKSDtBQUtMQyxpQkFBYSxDQUxSO0FBTUxDLGlCQUFhO0FBTlIsRztPQVNQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSUMsQ0FESixFQUNNO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNELEtBSE87QUFJUkcsY0FKUSxzQkFJR0gsQ0FKSCxFQUlLO0FBQ1gsV0FBS1AsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFdBQUtDLE1BQUwsR0FBY00sRUFBRUksT0FBRixDQUFVLENBQVYsRUFBYUMsQ0FBM0I7QUFDQSxXQUFLVixNQUFMLEdBQWNLLEVBQUVJLE9BQUYsQ0FBVSxDQUFWLEVBQWFFLENBQTNCO0FBQ0EsV0FBS1YsV0FBTCxHQUFtQkksRUFBRUksT0FBRixDQUFVLENBQVYsRUFBYUMsQ0FBaEM7QUFDQSxXQUFLUixXQUFMLEdBQW1CRyxFQUFFSSxPQUFGLENBQVUsQ0FBVixFQUFhRSxDQUFoQztBQUNELEtBVk87QUFXUkMsYUFYUSxxQkFXRVAsQ0FYRixFQVdJO0FBQ1YsV0FBS04sTUFBTCxHQUFjTSxFQUFFSSxPQUFGLENBQVUsQ0FBVixFQUFhQyxDQUEzQjtBQUNBLFdBQUtWLE1BQUwsR0FBY0ssRUFBRUksT0FBRixDQUFVLENBQVYsRUFBYUUsQ0FBM0I7QUFDRCxLQWRPO0FBZVJiLFlBZlEsb0JBZUNPLENBZkQsRUFlRztBQUNULFdBQUtQLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRDtBQWpCTyxHO09Bb0JWZSxNLEdBQVM7QUFDUCxtQkFBZSxzQkFBYTtBQUFBOztBQUMxQixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQVQsY0FBUUMsR0FBUixDQUFlLE9BQUtTLEtBQXBCLGlCQUFxQ0YsT0FBT0csSUFBNUMsY0FBeURILE9BQU9JLE1BQVAsQ0FBY0YsS0FBdkU7QUFDRDtBQUpNLEc7O2tCQXhDVS9CLEsiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnY2FudmFzJyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGN0Y3JyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgYWN0aXZlUGFnZSA6IDAgLFxyXG4gICAgICB0b3VjaEVuZDogdHJ1ZSAsXHJcbiAgICAgIHRvdWNoWDogMCAsXHJcbiAgICAgIHRvdWNoWTogMCAsXHJcbiAgICAgIHRvdWNoU3RhcnRYOiAwICxcclxuICAgICAgdG91Y2hTdGFydFk6IDAgXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2FudmFzRXJyb3IoZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvdWNoU3RhcnQoZSl7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy50b3VjaFggPSBlLnRvdWNoZXNbMF0ueFxyXG4gICAgICAgIHRoaXMudG91Y2hZID0gZS50b3VjaGVzWzBdLnlcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZS50b3VjaGVzWzBdLnhcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRZID0gZS50b3VjaGVzWzBdLnlcclxuICAgICAgfSxcclxuICAgICAgdG91Y2hNb3ZlKGUpe1xyXG4gICAgICAgIHRoaXMudG91Y2hYID0gZS50b3VjaGVzWzBdLnhcclxuICAgICAgICB0aGlzLnRvdWNoWSA9IGUudG91Y2hlc1swXS55XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvdWNoRW5kKGUpe1xyXG4gICAgICAgIHRoaXMudG91Y2hFbmQgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgICdjaGFuZ2Utdmlldyc6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICBsZXQgY29udGV4dCA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NpcmNsZScpXHJcblxyXG4gICAgfVxyXG4gIH1cclxuIl19