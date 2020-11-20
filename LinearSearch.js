class LinearSearch
{
constructor(list)
{
this.list=list;
}
search(num)
{
let i=0;
let len=this.list.length;
for(;i<len;++i)
{
if(this.list[i]==num) return i;
}
return -1;
}
}

module.exports.LinearSearch=LinearSearch;
