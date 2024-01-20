let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];


function PrintDeveloper() {
let PrintDeveloper=arr.filter(arr=>arr.profession==='developer')
console.log(PrintDeveloper);
}

function addData() {
let addData={id:4,name:'susan',age:20,profession:'intern'};
arr.push(addData);
console.log(addData);
}

function removeAdmin() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}
