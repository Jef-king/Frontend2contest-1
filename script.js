/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
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
let remmoveadmin = arr.filter((employee)=>{
  employee.profession !='admin';
})
  console.log(removeadmin);
}

function concatenateArray() {
  let addarr=[
    {id:4,name:"jefking",age:"15",profession:"rider"},
  {id:5,name:"jef",age:"80",profession:"joker"},
  {id:6,name:"king",age:"21",profession:"coder"}
  ];
  let addarrresult= arr.concat(addarr);
  console.log(addarrresult);
}
