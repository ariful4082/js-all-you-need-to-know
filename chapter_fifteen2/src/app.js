// const arr = [
//     10,22,35
// ]
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// function createIterator (collection){

//     let i = 0;
//  return {
//     next(){
//         return{
//             done: i>= collection.length,
//             value: collection[i++]
//         }
//     }
//  }
// }

// let iterate =createIterator(arr)

// let iterate= arr[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// // console.log(arr[Symbol.iterator])
// // console.log('str'[Symbol.iterator])

// let str = 'TEXT';

// let iterateText  = str[Symbol.iterator]()
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())

//*******For of Loop****** */

// for(let v of arr){
//     console.log(v)
// }

// for(let v of 'Ariful Islam'){
//     console.log(v)
// }

// let obj ={
//     a:10,
//     b: 20
// }

// let objIterate = obj[Symbol.iterator]();

// console.log(objIterate)

// for(let v of obj){
//     console.log(v)
// }

//**********Generator **********/

// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function*(){
//         let currentValue = this.start

//         while(currentValue<=this.end){
//             yield currentValue++
//         }
//     }
// }

// let iterate = obj[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate(){
//     yield 1
//     yield 2
//     yield 3
// }

// function *generate(collection){
//     for(let i= 0; i<collection.length; i++){
//         yield collection[i]
//     }
// }
// let it = generate(arr);
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

//********** Set Method*********** */

// let set = new Set([1,2,3])

// set.add(5)
// set.add(6)
// set.add(1)
// set.add(2)

// console.log(set)
// console.log(set.size)
// set.clear();
// set.delete(5)

// console.log(set.has(6))
// console.log(set)
// console.log(set.keys())
// console.log(set.values())

// let keyIterate = set.keys();
// console.log(keyIterate.next())

// for(let v of set){
//     console.log(v)
// }

// console.log(set.entries())

//*****************Map in Javascript*********** */

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30],
// ]);
// map.set('d', 40)

// map.set({name: 'Ariful islam'}, 45)

// map.delete('c')
// console.log(map)
// console.log(map.size)
// console.log(map.get('c'))
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// for(let [ k, v] of map){
//     console.log(k, v)
// }

// map.forEach((v, k)=>{
//     console.log(k, v)
// })

//************Weak Set*********** */

// let a={a:10}, b={b: 20}
// let set = new Set([a,b])

// a=null
// console.log(set)

// let arr= [...set];
// console.log(arr[0]);

// let weakSet = new WeakSet([a, b])
// a=null
// console.log(weakSet.has(b))

// let weakMap  = new WeakMap([[a, 45], [b,75]])
// a=null
// console.log(weakMap.get(a))
// console.log(weakMap.has(b))

//*****************Class in ES6******** */

// class Rectangle{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//         this.another = function(){
//             name='Hello World'
//         }
//     }
//     name = 'Ariful Islam'

//     draw(){
//         console.log('Drawing.........')
//     }
//     test(){
//         console.log('Testing..........')
//     }
//     test2 = function(){
//          let text = 'hello World'
//     }
// }

// const rect1 = new Rectangle(45,23)
// console.log(rect1)

// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   print() {
//     console.log(this.name, this.email);
//   }
//   test(){
//     console.log(this)
//   }

//   static create(str) {
//     let person = JSON.parse(str);
//     return new Person(person.name, person.email);
//   }
// }

// let str = '{ "name": "Ariful Islam", "email": "arifulislam@gmail.com" }';

// let p1 = Person.create(str);
// console.log(p1);
// console.log(p1 instanceof Person);
// p1.print()

//****************This in Javascript Class************ */

// 'use strict'
// function Shape(){
//     this.draw = function(){
//         console.log(this)
//     }
// }

// let s1 = new Shape();
// let anotherDraw = s1.draw
// anotherDraw()
// let test = p1.test;

// test()

// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()
// class Circle{
//     constructor(radius, name){
//         this[_radius] = radius
//         this[_name] = name
//     }

//     [_draw](){
//         console.log('Drawing.....')
//     }
// }

// let c1 = new Circle(2, 'Ariful islam')
// console.log(Object.getOwnPropertyNames(c1))
// let key =Object.getOwnPropertySymbols(c1)[0]
// console.log(c1[key])

//*************Make Data Private in Weakmap**************** */
// const _radius = new WeakMap();
// const _name = new WeakMap();
// const _resize = new WeakMap();
// // const _draw = Symbol()
// class Circle {
//   constructor(radius, name) {
//     this.size = 100;
//     _radius.set(this, radius);
//     _name.set(this, name);
//     _resize.set(this, () => {
//       console.log(this.size);
//     });
//   }

//   get radius(){
//     return _radius.get(this)
//   }

//   set radius(v){
//     _radius.set(this,v)
//   }
//   draw() {
//     console.log("Drawing.....");
//     console.log(_radius.get(this), _name.get(this));
//     _resize.get(this)()
//   }
// }

// let c1 = new Circle(2, "Ariful islam");
// c1.draw();
// c1.radius =100
// console.log(c1.radius)

//*****************Inheritance in ES6*********** */
// class Shape{
//   constructor(color){
//     this.color= color
//   }
//   draw(){
//     console.log('Drawing.........')
//   }
// }

// class Rectangle extends Shape{
//   constructor(color,width, height){
//     super(color)
//     this.width=width
//     this.height= height
//   }

//   draw(){
//     console.log('Drawing a Rectangle........')
//   }

//   calculate(){
//     return this.width*this.height
//   }
// }
// import Rectangle from './Rectangle'

// let r = new Rectangle('Green',4,5)
// console.log(r)
// r.draw()

// import * as func from './func'
// console.log(func.add(45, 10))

import { add, div } from './func'
console.log(add(45,10))
console.log(div(45,10))