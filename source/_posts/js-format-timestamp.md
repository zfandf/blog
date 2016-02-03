title: javascript 时间戳与日期互转
date: 2016-02-02 15:24:43
categories:
- js
tags:
- js
---

# 时间戳转换成日期

	/**
     * 格式化时间
     * @param time 十位的时间戳
     * @param format 默认格式： 'yyyy-MM-dd hh:mm:ss'
     * @returns {*|string}
     */
    function formatTime(time, format) {
        format = format || 'yyyy-MM-dd hh:mm:ss';
        var oDate = time ? new Date(time * 1000) : new Date();
        var o = {
            "M+": oDate.getMonth() + 1,
            "d+": oDate.getDate(),
            "h+": oDate.getHours(),
            "m+": oDate.getMinutes(),
            "s+": oDate.getSeconds(),
            "q+": Math.floor((oDate.getMonth() + 3) / 3),
            "S": oDate.getMilliseconds()
        };

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (oDate.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };

# 日期转换时间戳

	/**
	 * @param date 时间，时间格式, 年月日必须，时分秒可以没有
	 		'yyyy-MM-dd hh:mm:ss'
	 		'yyyy/MM/dd hh:mm:ss'
	 		'yyyy.MM.dd hh:mm:ss'
	 * @returns 十位时间戳 
	 **/
	function dateToTimestamp(date) {  
		var arr = date.replace(/ |:|\/|\./g, '-').split('-');
		date = new Date(arr[0], arr[1] - 1, arr[2], arr[3]||0, arr[4]||0, arr[5]||0);
		return Date.parse(date) / 1000;
	}
