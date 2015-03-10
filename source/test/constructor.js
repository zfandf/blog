var Person = Object.create(null);
Person.name = 'unknow';
Person.age = 0;
Person.operate = {
    eat: 'eat',
    hash: 'hash'
};
console.log(Person);
var Child = Object.create(Person);
Child.name = 'child';
Child.operate.eat = 'eat1';
console.log(Child, Child.operate, Person.operate);