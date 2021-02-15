// 用构造函数创建一个对象
// Person1就是构造函数 person1就是实例
function Person1() {

};

let person1 = new Person1();
person1.name = 'tf';
console.log(person1.name); // 'tf'

// 每个函数都有一个 prototype 属性
// Person2.prototype 就是 person2 的原型
function Person2() {

};

Person2.prototype.name = 'tf';
let person2 = new Person2();
console.log(person2.name); // 'tf'

// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person2) === Person2.prototype) // true

// 每一个JavaScript对象(除了null)都具有的一个属性，叫__proto__，这个属性会指向该对象的原型
// 所以 实例对象.__proto__ === 构造函数.prototype
function Person3() {

};

let person3 = new Person3();
console.log(person3.__proto__ === Person3.prototype); // true

// 每个原型都有一个 constructor 属性指向关联的构造函数
function Person4() {

}

console.log(Person4 === Person4.prototype.constructor); // true

// 原型的作用是什么？
// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。
function Person5() {

}

Person5.prototype.name = 'tf';

let person5 = new Person5();

person5.name = 'troubleFisher';
console.log(person5.name) // troubleFisher

delete person5.name;
console.log(person5.name) // tf

// 原型的原型是什么？
// 原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它
let obj = new Object();
obj.name = 'tf'
console.log(obj.name) // tf

// 其实原型对象就是通过 Object 构造函数生成的
obj.__proto__ === Object.prototype
console.log(obj.__proto__ === Object.prototype) // true

// 那 Object.prototype 的原型呢？
Object.prototype.__proto__ === null
console.log(Object.prototype.__proto__ === null) // true

// 三个tips：

// 1.constructor
// 当获取 person6.constructor 时，其实 person6 中并没有 constructor 属性
// 当不能读取到constructor 属性时，会从 person6 的原型也就是 Person6.prototype 中读取
// 正好原型中有该属性，所以：
function Person6() {

}

let person6 = new Person6();
console.log(person6.constructor === Person6); // true

person6.constructor === Person6.prototype.constructor // true

// 2.__proto__
// 绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中
// 实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter
// 当使用 obj.__proto__ 时，可以理解成返回了 Object.getPrototypeOf(obj)。

// 3.真的是继承吗？
// “每一个对象都会从原型‘继承’属性”，这句话并不准确
// 继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联
// 这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。












