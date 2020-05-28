// 联合类型表示为 取值可以是多种类型中的一种


// 例如

let a: string | number

a = 'a'
a = 1
// 如果出现其他的类型，则会报错   a = true


// 访问联合类型的属性的方法

function fnc(something: string | number) {
  return something.length
}

//上述代码会报错，因为number类型里没有length属性
