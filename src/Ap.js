import React from 'react'
import './App.css';
import TodoList from './components/TodoList';
import Datatest from './Datatest';
import test from './ques3.json'
import test1 from './ques1.json'
import test4 from './ques4.json'
import matchers from '@testing-library/jest-dom/matchers';
import Navbar from "./components/Navbar";


// ques4
// console.log(test4)
// 1
// console.log(test4.contactNumbers)
// let last = test4.contactNumbers.map((item) => {
//   return (item.type.slice(0, -1))
// })
// console.log(last)

// 2
// console.log(test4.contactNumbers)
// const str = test4.contactNumbers.map((item)=>{
//   return (item.type.split(''))
// })
// console.log(str)

// function concatenatedString(s1, s2)
// {
//     let res = ""; // result
 
//     // store all characters of s2 in map
//     let m = new Map();
//     for (let i = 0; i < s2.length; i++)
//         m.set(s2[i],1);
 
//     // Find characters of s1 that are not
//     // present in s2 and append to result
//     for (let i = 0; i < s1.length; i++) {
//         if (m.has(s1[i]) == false)
//             res += s1[i];
//         else
//             m.set(s1[i] , 2);
//     }
 
//     // Find characters of s2 that are not
//     // present in s1.
//     for (let i = 0; i < s2.length; i++)
//         if (m.get(s2[i]) == 1)
//             res += s2[i];
//     return res;
// }
 
/* Driver program to test above function */
// let s1 = test4.contactNumbers[0].type;
// let s2 = test4.contactNumbers[1].type;
// console.log(concatenatedString(s1, s2));



// 3
// let output = test4.contactNumbers.map((item) => {
//     return (item.type.slice(0,1) + item.type.slice(2))
//   })
//   console.log(output)


// 4
// let array = [test4.name]
// console.log(array)


// 5
// console.log(test4.name)
// console.log(test4.name.split('').reverse('').join(''))


// var string = test4.name
// var strLen = string.length;
// var revStr = '';
// for(var i = strLen-1; i>=0;i--){
//   revStr += string[i];
// }
// console.log(`${revStr}`);









// ques 3

// console.log(test)

// 1
// let output = test.batters.batter.map(user => {
//   if (user.id >= 1002){
//     return {"type": user.type}
//   }
// })
//   console.log(output);


// 2
// let output = test.batters.batter.map(user => {
//   if (user.id > 1002 && user.id < 1004){
//     return {"type": user.type}
//   }
// })
//   console.log(output);

// 3
// let total = 0;
// test.topping.map((item) => {
//     total = total + item.id;
//   });
// console.log("SUM OF ID: ", total);

// 4
// let total = 0;
//   test.topping.map((item) => {
//     if (item.type == "none") 
//     total = total + item.id;
//   });
// console.log("DIGIT: ", total);

// console.log(
//   test.topping.filter(item => {
//     return item.type == "chocolate"
//   })
// )

// 5
// test.topping.map((item)=>{
//   if(item.type == "Chocolate"){
//     console.log(item.id.split('').reverse().join(''))
//   }
// })



// 6
// test.topping[2].name = "neha"
// test.topping[2].lastname = "singh"
// console.log(test.topping)









// ques 1

// console.log(test1)
// 1
// const output = test1.map((item) => item.firstname + " " + item.lastname);
// console.log(output)


// 2
// const output  = test1.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//      acc[curr.age]  = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
//   }, {});
//   console.log(output) 

// 3
// const output = test1.filter((x) => x.age > 28)
// .map((x) => x.firstname);
// console.log(output)

// 4
// const output = test1.map((x) => {
//   return x.firstname
//   // console.log(x.firstname)
// } )
// console.log(output)

// test1.map((x) => {
//   console.log(x.firstname.match(/\b(\w)/g).join(''))
// })

// var str = output;
// var matches = str.match(/\v(\w)/g); // ['J','S','O','N']
// var acronym = matches.join(''); // JSON
// console.log(acronym)





// test.topping.map((item)=>{
//   if(item.type == "Chocolate"){
//     console.log(item.id.split('').reverse().join(''))
//   }
// })

// const output = test1.filter((x) =>x.age > 30 )
// .map((x) => x.lastname);
// console.log(output)

// 5
// const output = test1.filter((x) => x.firstname && x.z )
// .map((x) => x.firstname);
// console.log(output)









function App() {
   
  return (
    <>
    <Navbar/>


    {/* <div className="ques">
    <h1>ques1 javascript</h1>
    <p> Print List of full names of all employee Ex-donald trump </p>
    <p> Print how many people are of different ages. 
      Ex-{26:1,75:2,50:1} 
      </p>
    <p> Print all employee's first name whose age is greater than 28 </p>
    <p>Print all employee's first name whose name starts with v </p>
    <p>Print all employee's first name whose name ends with Z.</p>
    </div> */}
   
    {/* <Datatest/> */}

    {/* <div className='ques'>
      <h1> ques3 JavaScript</h1>
      <p>Find all types of batter whose id start 1002 to 1004</p>
      <p>Find all types of batter whose id in betwwen 1002 to 1004</p>
      <p>Find sum of all id which is have in topping</p>
      <p>Find sum of each digit of a id whose type is none</p>
      <p>Reverse a id whose type is chocolate</p>
      <p>Add a new object in tooping at index 2</p>
    </div> */}

    {/* <div className="ques">
      <h1> ques 4</h1>
      <p> Concate all type strings in contactNumbers except their Last character</p>
      <p>Concate all uncomman character's from both type string in contactNumbers EX:cbgf </p>
      <p>Concate all type strings in contactNumber except second charcacter</p>
      <p>Convert name into array of words Ex.[“Jack”,”singh”] </p>
      <p>Reverse each word of string without changing order of words of name Ex.kcaj hgnis</p>
    </div> */}
    
    </>
    // <div className="app">
    //   <div className="solid">
    //    <i className="fa-solid fa-xmark"></i>
    //   </div>
    //   <div className="todo">
    //    <div className="todo-app">
    //    <TodoList/>
    //   </div>
    //   </div>
    // </div>
  );
}

export default App
