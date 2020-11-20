let s=require("./LinearSearch");
let arr=[1,2,3,4,5,6,1,2,1,3,5,2,1,99];
let linearSearch=new s.LinearSearch(arr);
console.log("Number Found at: "+linearSearch.search(4));
console.log("Number Found at: "+linearSearch.search(1));
console.log("Number Found at: "+linearSearch.search(99));
console.log("Number Found at: "+linearSearch.search(19));


