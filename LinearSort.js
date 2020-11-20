class LinearSort
{
constructor(list)
{
this.list=list;
}
sort()
{
let len=this.list.length;
for(let i=0;i<len;++i)
{
for(let j=i+1;j<len;++j)
{
if(this.list[i]>this.list[j])
{
let t=this.list[i];
this.list[i]=this.list[j];
this.list[j]=t;
}
}
}
}
}

module.exports.LinearSort=LinearSort;
