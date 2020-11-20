var math=require("mathjs");
class MergeSort
{
constructor(list)
{
this.list=list;
}
sort()
{
let ub=this.list.length-1;
let lb=0;
this.mergeSort(lb,ub);
}
mergeSort(lb,ub)
{
if(ub<lb)
{
let mid=math.floor((lb+ub)/2);
this.mergeSort(lb,mid);
this.mergeSort(mid+1,ub);
this.merge(lb,ub,mid);
}
}
merge(lb,ub,mid)
{
let i=lb;
let tmp=[];
let j=mid+1;
let k=lb;
while(i<=mid && j<=ub)
{
if(this.list[i]<this.list[j])
{
tmp.push(this.list[i]);
++i;
}
else
{
tmp.push(this.list[j]);
++j;
}
}
while(i<=mid)
{
tmp.push(this.list[i]);
++i;
}
while(j<=ub)
{
tmp.push(this.list[j]);
++j;
}
console.log(tmp);
for(a of tmp)
{
this.list[k]=a;
++k;
}
console.log(this.list);
}
}

module.exports.MergeSort=MergeSort;
