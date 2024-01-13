/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  let developer=arr.filter(arr=>arr.profession =='developer');
  let name=developer.map(developer => developer.name);
  console.log(name);
}

function PrintDeveloperbyForEach() {
  let name=[];
  arr.forEach(arr=>{
    if(arr.profession==='developer'){
      name.push(arr.name);
    }
  });
  console.log(name);
}

function addData() {
  let add={id:4, name:'susan', age:20, profession:'intern'}
  arr.push(add);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}
