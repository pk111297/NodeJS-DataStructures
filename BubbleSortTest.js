var s=require("./BubbleSort");
var arr=[4,2,5,1,4,7,1,4,7,3,2,8,0,5,7,9];
console.log(arr);
var bubbleSort=new s.BubbleSort(arr);
bubbleSort.sort();
console.log(arr);

