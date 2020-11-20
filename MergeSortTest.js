var s=require("./MergeSort");
var arr=[4,2,5,1,4,7,1,4,7,3,2,8,0,5,7,9];
console.log(arr);
var mergeSort=new s.MergeSort(arr);
mergeSort.sort();
console.log(arr);

