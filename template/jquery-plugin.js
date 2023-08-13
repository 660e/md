(function (factory) {
  'use strict';
  if (typeof exports === 'object' && typeof module === 'object') {
    // CommonJS
    module.exports = factory(require('jquery'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  // 创建仅插件内部使用的构造函数
  var Plugin = window.Plugin || {};

  Plugin = (function () {
    // 当前插件id
    var uid = 0;

    // 存储Plugin所有原型方法和属性
    function PluginProto(elements, settings) {
      var _ = this;

      _.defaults = {
        message: 'test',
        text: 'button',
        button: '<button type="button"></button>'
      };

      _.initials = {
        count: 1
      };

      $.extend(_, _.initials);

      // 默认设置 + 用户设置
      _.options = $.extend({}, _.defaults, settings);

      _.$main = $(elements);
      _.title = _.$main.attr('class');

      _.init();

      // 测试
      console.table(_);
    }

    PluginProto.prototype.init = function () {
      var _ = this;

      _.build();
      _.events();
    };

    PluginProto.prototype.build = function () {
      var _ = this;

      _.$button = $(_.options.button);
      _.$button.text(_.options.text);
      _.$button.appendTo(_.$main);
    };

    PluginProto.prototype.events = function () {
      var _ = this;

      _.$button.on('click', _.print.bind(_));
    };

    PluginProto.prototype.print = function () {
      var _ = this;

      console.log(_.title + ' = ' + _.count);
      _.count++;
    };

    // 将整个PluginProto返回给Plugin
    return PluginProto;
  })();

  // 为每个对象创建Plugin实例
  $.fn.pluginName = function () {
    var _ = this;
    for (var i = 0; i < _.length; i++) {
      _[i].pluginName = new Plugin(_[i], arguments[0]);
    }
    return _;
  };
});

// 测试
$('.demo1, .demo2')
  .pluginName({
    message: 'test',
    text: 'button'
  })
  .each(function (i) {
    console.log(i);
  });

// _.handler = $.proxy(_.handler, _);
