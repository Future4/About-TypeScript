// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// ///
// <reference /> 三斜线指令

// 可以用 npm install @types/jquery --save-dev

// 或者
/********************************************** */
declare let jQuery :(selector:string) => any

jQuery('#foo');

// // 使用 declare let 定义的 jQuery 类型，允许修改这个全局变量
// jQuery = function(selector) {
// return document.querySelector(selector);
// };
/********************************************** */
// declare const jQuery: (selector: string) => any;

// jQuery('#foo');
// // 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量
// jQuery = function(selector) {
// return document.querySelector(selector);
// };

/********************************************** */
// 也可以用 function来定义

declare function jQuery(selector:string):any

jQuery('#foo');

/********************************************** */
// declare class

declare class Animal{
  name:string;
  constructor(name:string);
  sayHi():string
}


let cat = new Animal('Tom');


// declare class 只能定义类型，不能定义具体实现，比如定义一个函数的具体实现方法

// declare class Animal {
//   name: string;
//   constructor(name: string);
//   sayHi() {
//       return `My name is ${this.name}`;
//   };
//   // ERROR: An implementation cannot be declared in ambient contexts.
// }
