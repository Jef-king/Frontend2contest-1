let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' }
];


function PrintDeveloper() {
let PrintDeveloper=arr.filter(arr=>arr.profession==='developer')
console.log(PrintDeveloper);
}

function addData() {
let addData={id:4,name:'susan',age:20,profession:'intern'};
arr.push(addData);
console.log(arr);
}

function removeAdmin() {
  let removeAdmin=arr.filter(removeAdmin=>removeAdmin.profession!="admin");
  console.log(removeAdmin);
}

function concatenateArray() {
 let concatenateArray=[
  { id: 5, name: 'john', age: 19, profession: 'admin' },
  { id: 6, name: 'jack', age: 23, profession: 'intern' },
  { id: 7, name: 'karen', age: 29, profession: 'admin' }
 ];
 arr=arr.concat(concatenateArray);
 console.log(arr);
}
