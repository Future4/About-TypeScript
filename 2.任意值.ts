// 在赋值过程中改变类型是不可以的
// 但是在any中就可以
var myFavoriteNumber = 7;
myFavoriteNumber = 'seven';
//可以在任意值上访问任意方法和属性
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
