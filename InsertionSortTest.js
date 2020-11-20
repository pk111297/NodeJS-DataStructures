var s=require("./InsertionSort");
var arr=[4,2,5,1,4,7,1,4,7,3,2,8,0,5,7,9];
console.log(arr);
var insertionSort=new s.InsertionSort(arr);
insertionSort.sort();
console.log(arr);

