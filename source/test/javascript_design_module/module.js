// 计数器
var counterModule = (function() {
    var counter = 0;
    return {
        add: function() {
            return ++counter;
        },
        sub: function() {
            return --counter;
        },
        reset: function() {
            counter = 0;
            return counter;
        }
    };
})();

// 用法

// 增加计数器
counterModule.add();
counterModule.add();
counterModule.add();

// 重置计数器
counterModule.reset();

// 购物车
var basketModule = function() {
    var basket = [];

    function checkItem(item) {
        if (!item.id || !item.name) {
            return false;
        }
        item.price = item.price || 0;
        return true;
    }

    return {
        addItem: function(item) {
            if (checkItem(item)) {
                basket.push(item);
            } else {
                console.log('item is error');
            }
        },
        getItemCount: function() {
            return basket.length;
        },
        getTotal: function() {
            var itemCount = this.getItemCount(),
                total = 0;
            while (itemCount--) {
                total += basket[itemCount].price;
            }
            return total;
        }
    };
}();
basketModule.addItem({
    id: 1,
    name: 'JavaScript 设计模式',
    price: 10.4
});
basketModule.addItem({
    id: 1,
    name: 'JavaScript 高级教程',
    price: 20
});
console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());

// test module
var testModule = function() {
    function doSomething() {
        console.log('dosomething');
    }

    return {
        func1: function() {
            console.log('func1');
            doSomething();
        },
        func2: function() {
            console.log('func2');
            // 如果我想在这儿调用 func1..
            testModule.func1();
        }
    };
}();
