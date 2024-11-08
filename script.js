/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee)=>{
    if(employee.profession === "developer"){
      console.log(`id: ${employee.id}, name: ${employee.name}, age: ${employee.age}, profession: ${employee.profession}`);
    }
  })
}
function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee)=>{
    if(employee.profession === "developer"){
      console.log(`id: ${employee.id}, name: ${employee.name}, age: ${employee.age}, profession: ${employee.profession}`);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newObj = {id:4, name:"susan", age:"20", profession:"intern"};
   arr.push(newObj)
   arr.forEach((employee)=>{
    console.log(`id: ${employee.id}, name: ${employee.name}, age: ${employee.age}, profession: ${employee.profession}`);
   })
}

function removeAdmin() {
  //Write your code here, just console.log
  const updatedArr = arr.filter((employee) => employee.profession !== "admin");
  updatedArr.forEach(employee => {
    console.log(`id: ${employee.id}, name: ${employee.name}, age: ${employee.age}, profession: ${employee.profession}`);
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 5, name: "johnny", age: "28", profession: "manager" },
    { id: 6, name: "jackson", age: "30", profession: "tester" },
    { id: 7, name: "karthik", age: "29", profession: "admin" },
  ];
  let newArr = arr.concat(arr1)
  newArr.forEach(employee => {
    console.log(`id: ${employee.id}, name: ${employee.name}, age: ${employee.age}, profession: ${employee.profession}`);
  });
}
