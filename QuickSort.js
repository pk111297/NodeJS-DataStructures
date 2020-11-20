class QuickSort
{
constructor(list)
{
this.list=list;
}
sort()
{
let ub=this.list.length-1;
let lb=0;
this.quickSort(lb,ub);
}
quickSort(lb,ub)
{
if(ub<=lb) return;
let pp=this.partitionPoint(lb,ub);
this.quickSort(0,pp-1);
this.quickSort(pp+1,ub);
}
partitionPoint(lb,ub)
{
let num=this.list[lb];
let e=lb;
let f=ub;
while(true)
{
while(true)
{
if(e==ub || num<this.list[e]) break;
++e;
}
while(true)
{
if(f==lb || num>=this.list[f]) break;
--f;
}
if(e<f)
{
let t=this.list[e];
this.list[e]=this.list[f];
this.list[f]=t;
}
else
{
let t=this.list[lb];
this.list[lb]=this.list[f];
this.list[f]=t;
break;
}
}
return f;
}

}

module.exports.QuickSort=QuickSort;
