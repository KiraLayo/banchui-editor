import UAParser from 'ua-parser-js'
var parser = new UAParser();

// user agent 解析
export function ua() {
  var userAgent = window.navigator.userAgent;
  parser.setUA(userAgent);
  return parser.getResult();  
}

// 是否为移动设备
export var isMobile = ua().device.type == "mobile";

export default {
  ua: ua(),
  isMobile
}