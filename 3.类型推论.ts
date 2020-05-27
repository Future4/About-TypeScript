// 类型推论就是，在你定义时没有指明类型，那么TypeScript会按照类型推论的规则，推断出一个类型


// 比如

let a = 'a'
// 等价于
// let a:string = 'a'

a = 3

//// index.ts(8,1): error TS2322: Type 'number' is not assignable to type 'string'.



// 如果你定义的时候没有赋值，那么不管之后又没有赋值，类型变为any
