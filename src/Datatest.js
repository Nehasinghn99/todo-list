import  {useEffect, useRef} from 'react'
import employee from './ques2';

const Datatest = () => {


  let isMounted = useRef()
  useEffect(() => {
      if (isMounted.current) return ;
      if (employee)
      {
        employee.employeeFriends.map((item)=>{
          if (item.name == "bar" || item.name == "foo") 
          return item.activities.push('vishnu', 'saini')
        })
      }
    isMounted.current = true;
    // console.log(employee)
  })



// 1
// employee[0].height = "50";
// employee[0].weight = "50";
// console.log(employee)

// 2
// employee.name = "Fluffyy"
// console.log(employee)

// 3
// console.log(employee["employeeFriends"])
// let output = employee.employeeFriends.map(user => {
//   return {"activities": user.activities}})
//   console.log(output);

// 4
// let output = employee.employeeFriends.map(user => {
// return {"name": user.name}})
// console.log(output);


// 5
// let total = 0;
// employee[0].employeeFriends.forEach(item => {
//   total = total + item.price;
//   total += item.weight;
// });
// console.log("TOTAL: ", total);

// 6
// employee.employeeFriends.map((item)=>{
//   if (item.name == "bar" || item.name == "foo") 
//   return item.activities.push('vishnu', 'saini')
// })

// 7
// employee.employeeFriends[0].furcolor = "black"
// console.log(employee)




  return(
    <>
    <div className='ques'> 
        <h1>ques 2 javascript</h1>
        <p>Add height and weight to Fluffy</p>
        <p>Fluffy name is spelled wrongly. Update it to Fluffyy</p>
        <p>List all the activities of Fluffyy"s employeeFriends.</p>
        <p>Print the employeeFriends names.</p>
        <p>Print the total weight of employeeFriends</p>
        <p>Add 2 more activities to bar and foo employees</p>
        <p>Update the fur color of bar to black</p>
        
    </div>
    </>
  )

}

export default Datatest;
