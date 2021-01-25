"use strict";
/*******一、使用范型定义函数参数与返回参数类型 *****************************************************************************/
// function echo(arg: number): number {
//   return arg
// }
// 类型变量
// 这里使用了类型变量 T，帮助我们捕获用户传入的类型
// 使用方式：
//  1、可以明确指定类型：echo<string>('123456')
//  2、利用 类型推导：echo('123456')
function echo(arg) {
    return arg;
}
var objectEcho = echo;
var booleanEcho = echo;
console.log(echo(123456));
console.log(echo('123456'));
console.log(objectEcho({ a: '123456' }));
console.log(booleanEcho(true));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// console.log(loggingIdentity(3)) // number 没有 length 属性
console.log(loggingIdentity('3'));
console.log(loggingIdentity([1, 2, 3]));
// 在范型约束中使用类型参数：录利用 keyof 获取 T 属性列表
function getProperty(obj, key) {
    return obj[key];
}
var obj = {
    a: '张三',
    b: '李四'
};
console.log('getProperty:', getProperty(obj, 'a'));
/*******三、使用原型属性推断并约束构造函数与类实例的关系 *****************************************************************************/ 
