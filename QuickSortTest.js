var s=require("./QuickSort");
var arr=[4,2,5,1,4,7,1,4,7,3,2,8,0,5,7,9];
console.log(arr);
var quickSort=new s.QuickSort(arr);
quickSort.sort();
console.log(arr);

