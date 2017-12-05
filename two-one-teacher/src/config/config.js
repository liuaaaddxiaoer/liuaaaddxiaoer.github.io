/**
 * Created by liuxiaoer on 2017/11/18.
 */

/*
 用来配置视口
 */
(function () {
  var htmlEle = document.documentElement;
  var htmlW = htmlEle.clientWidth;
  htmlEle.style.fontSize = htmlW / 375 * 20 + 'px';
  if (htmlW >=750) {
    htmlEle.style.fontSize = 375 / 375 * 20 + 'px';

    window.onload = function () {
      var app = document.getElementById('app');
      app.style.width = 375 + 'px';
      app.style.margin = '0 auto';
    }
  }

  window.addEventListener('resize',function () {
    htmlEle.style.fontSize = htmlEle.clientWidth / 375 * 20 + 'px';

    if (htmlW >=750) {
      htmlEle.style.fontSize = 375 / 375 * 20 + 'px';

      window.onload = function () {
        var app = document.getElementById('app');
        app.style.width = 375 + 'px';
        app.style.margin = '0 auto';
      }
    }
  },false)
  // 测试用的authcode
  window.KTestAuthcode = 'ad253f05d3bd32cd201e8037602475e2'
})()
