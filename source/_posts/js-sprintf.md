title: 像php sprintf 那样格式化字符串
date: 2016-02-02 15:45:53
categories:
- js
tags:
- js
---

# 格式化字符串

	/**
	 * 第一个参数是待格式化的字符串，后面可追加多个参数
	 **/
	function sprintf() {
		var arg = arguments,
			str = arg[0] || '',
			i, n;
		for (i = 1, n = arg.length; i < n; i++) {
			str = str.replace(/%s/, arg[i]);
		}
		return str;
	};
	
## 举个栗子
	
	var str = 'Hello %s, I'am %s!';
	sprintf(str, 'Lily', 'Lucy'); // Hello Lily, I'am Lucy!
