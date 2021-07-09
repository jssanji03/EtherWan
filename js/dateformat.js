// 對Date的擴充套件，將 Date 轉化為指定格式的String
// 月(M)、日(d)、小時(h)、分(m)、秒(s)、季度(q) 可以用 1-2 個佔位符，
// 年(y)可以用 1-4 個佔位符，毫秒(S)只能用 1 個佔位符(是 1-3 位的數字)
// 例子：
// (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).format("yyyy-M-d hⓂ️s.S")   ==> 2006-7-2 8:9:4.18
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小時
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" +  k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" +  o[k]).substr(("" + o[k]).length)));
  return fmt;
}

Date.prototype.addSeconds = function(seconds) {
  this.setSeconds(this.getSeconds() + seconds);
  return this;
}

Date.prototype.addMinutes = function(minutes) {
  this.setMinutes(this.getMinutes() + minutes);
  return this;
}

Date.prototype.addHours = function(hours) {
  this.setHours(this.getHours() + hours);
  return this;
}

Date.prototype.addDays = function(days) {
  this.setDate(this.getDate() + days);
  return this;
}

Date.prototype.addMonths = function(months) {
  this.setMonth(this.getMonth() + months);
  return this;
}

Date.prototype.addYears = function(years) {
  this.setFullYear(this.getFullYear() + years);
  return this;
}

function diffSeconds(milliseconds) {
  return Math.floor(milliseconds / 1000);
}

function diffMinutes(milliseconds) {
  return Math.floor(milliseconds / 1000 / 60);
}

function diffHours(milliseconds) {
  return Math.floor(milliseconds / 1000 / 60 / 60);
}

function diffDays(milliseconds) {
  return Math.floor(milliseconds / 1000 / 60 / 60 / 24);
}