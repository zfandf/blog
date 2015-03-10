function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function() {
        return '我是' + this.name + ', 今年' + this.age + '岁';
    };
}

// 用法, 创建 Person 的新实例:
var p1 = new Person('fannie', 27);
var p2 = new Person('job', 28);

console.log(p1.toString());
console.log(p2.toString());

// 使用原型
Person.prototype.newToString = function() {
    return '我是' + this.name + ', 今年' + this.age + '岁';
};

console.log(p1.newToString());
console.log(p2.newToString());