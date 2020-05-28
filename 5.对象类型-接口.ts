// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

// 简单的例子
interface Person {
  name: string;
  age: number
}

let a: Person = {
  name: 'zhang',
  age: 18
}

// 类型必须一模一样


// 可选属性
interface Person2 {
  name: string;
  age: number;
  isjob ? : string
}

let a2: Person2 = {
  name: 'zhang',
  age: 25,
  // isjob:'yes'  //有没有这个属性都可以
}



// 任意属性

// interface Person3 {
//   name: string;
//   age: number;
//   [propName: string]: any;
// }
interface Person3 {
  name: string;
  age: number;
  [propName: string]: string | number;
}

let a3: Person3 = {
  name: 'zhang',
  age: 12,
  henhao: 'string'
}


// 只读属性

// 只读的约束在于 第一次给对象赋值的时候（初始化的时候），而不是第一次给属性赋值的时候
interface Person4 {
  readonly id: number;
  name: string;
  age: number;
  [propName3: string]: string | number;
}

let a4: Person4 = {
  id:1,
  name: 'zhang',
  age: 12,
  henhao: 'string'
}
