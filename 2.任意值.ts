// 在赋值过程中改变类型是不可以的
// 但是在any中就可以

let myFavoriteNumber: any = 7
myFavoriteNumber = 'seven'

//可以在任意值上访问任意方法和属性
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 如果在声明变量时未指定类型，那么他会被识别成任意值类型
let something;
something = 'seven';
something = 7;

something.setName('Tom');
