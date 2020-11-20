class InsertionSort
{
constructor(list)
{
this.list=list;
}
sort()
{
let ub=this.list.length-1;
let lb=0;
let y=lb+1;
while(y<=ub)
{
let p=y;
let num=this.list[p];
let j=p-1;
while(j>=lb)
{
if(num>=this.list[j]) break;
this.list[j+1]=this.list[j];
--j;
--p;
}
this.list[p]=num;
++y;
}
}
}

module.exports.InsertionSort=InsertionSort;
