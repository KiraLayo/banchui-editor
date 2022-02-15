import UAParser from "ua-parser-js";

const uaParser = new UAParser();

// user agent 解析
export function ua() {
  var userAgent = window.navigator.userAgent;
  uaParser.setUA(userAgent);
  return parser.getResult();
}

// 是否为移动设备
export var isMobile = ua().device.type == "mobile";
