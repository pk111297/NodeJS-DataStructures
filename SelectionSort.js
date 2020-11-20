class SelectionSort
{
constructor(list)
{
this.list=list;
}
sort()
{
let len=this.list.length;
for(let i=0;i<len-1;++i)
{
let m=i;
for(let j=i+1;j<len;++j)
{
if(this.list[m]>this.list[j]) m=j;
}
let t=this.list[i];
this.list[i]=this.list[m];
this.list[m]=t;
}
}
}

module.exports.SelectionSort=SelectionSort;
