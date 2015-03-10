var mySingleton = (function() {
    var _instance;

    function init() {
        console.log('init instance');
        var initTime = new Date();
        function privateFunction() {
            console.log('it is private function');
        }
        return {
            publicProperty: 'I am public property',
            getInitTime: function() {
                return initTime;
            }
        }
    }
    return {
        getInstance: function() {
            if (!_instance) {
                _instance = init();
            }
            return _instance;
        }
    }
})();
//
//var my1 = mySingleton.getInstance(),// 第一次获取实例
//    my2 = mySingleton.getInstance();// 第二次获取实例
//initTime1 = my1.getInitTime();
//initTime2 = my2.getInitTime();
//console.log('initTime1: ', initTime1);
//console.log('initTime2: ', initTime2);

var BasicSingleton = function(name) {
    this.name = name || "BasicSingleton";
};
var FooSingleton = function(name) {
    BasicSingleton(name || "FooSingleton");
};
FooSingleton.prototype = BasicSingleton.prototype;
FooSingleton.constructor = FooSingleton;

var TestSingleton = {};
TestSingleton.getInstance = function(type) {
    if (this._instance == null) {
        if (type) {
            this._instance = new FooSingleton();
        } else {
            this._instance = new BasicSingleton();
        }
    }
    console.log(this._instance);
    return this._instance;
};
console.log(TestSingleton.getInstance(true));
console.log(TestSingleton.getInstance(false).name);
