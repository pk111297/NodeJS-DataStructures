let s=require("./BinarySearch");
let arr=[2,3,4,5,6,7,8,10,19,35,65,134];
let binarySearch=new s.BinarySearch(arr);
console.log("Number Found at: "+binarySearch.search(4));
console.log("Number Found at: "+binarySearch.search(1));
console.log("Number Found at: "+binarySearch.search(99));
console.log("Number Found at: "+binarySearch.search(2));
console.log("Number Found at: "+binarySearch.search(3));
console.log("Number Found at: "+binarySearch.search(5));
console.log("Number Found at: "+binarySearch.search(6));
console.log("Number Found at: "+binarySearch.search(7));
console.log("Number Found at: "+binarySearch.search(8));
console.log("Number Found at: "+binarySearch.search(10));
console.log("Number Found at: "+binarySearch.search(35));
console.log("Number Found at: "+binarySearch.search(65));
console.log("Number Found at: "+binarySearch.search(134));
console.log("Number Found at: "+binarySearch.search(173));




