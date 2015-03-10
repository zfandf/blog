var myRevealingModule = function() {
    var privateVar = "Fannie",
        publicVar = "Job";

    function privateFunction() {
        console.log("name is " + privateVar);
    }

    function publicSetName(name) {
        privateVar = name;
    }
    function publicGetName() {
        privateFunction();
    }

    // 将暴漏的共有指针指向私有函数和属性
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
}();
console.log(myRevealingModule.greeting);
myRevealingModule.getName();
myRevealingModule.setName('zhangff');
myRevealingModule.getName();