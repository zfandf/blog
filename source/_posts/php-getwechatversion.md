title: 微信开发-检测是否在微信内/获取微信版本号
date: 2015-01-12 09:55
categories:
- php
tags:
- php
- 微信开发
---

# 检测是否在微信内

	/**
     * 是否在微信内
     * @return bool
     */
    function inWx() {
    	$user_agent = $_SERVER['HTTP_USER_AGENT'] . 'MicroMessenger';
    	return gettype(strpos($user_agent, 'MicroMessenger')) == 'integer';
    }

# 获取微信版本号

    /**
     * 获取微信版本号
     * @return string|bool
     */
    function getWxVersion() {
    	$user_agent = $_SERVER['HTTP_USER_AGENT'];
    	if ($user_agent && preg_match('/MicroMessenger\/(?P<version>[\d.]+)/', $user_agent, $matches)) {
    		return $matches[1];
    	} else {
    		return false;
    	}
    }