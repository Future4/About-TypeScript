// 最常用的数组类型为

// 「类型 + 方括号」表示法
let arr: number[] = [1, 2, 3, 4, 5, 6]
// 表示 数组里的值只能是 number类型


// 数组泛型

let arr2: Array < number > = [7, 8, 9]



// 用接口表示数组

interface NumberArray {
  [index: number]: string
}

let arr3: NumberArray = ['a', 'b']


// 类数组

// function sum(){
//   let args:number[] = arguments
// }
//  Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 15 more.


// 这个是正确的
// function sum() {
//   let args: {
//     [index: number]: number;
//     length: number;
//     callee: Function;
//   } = arguments
// }


// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：

function sum() {
  let args: IArguments = arguments
}
// IArguments是Typescript中定义好的接口，接口如下
// interface IArguments {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }



let list: any[] = ['xcatliu', 25, {
  website: 'http://xcatliu.com'
}];
