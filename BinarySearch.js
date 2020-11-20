var math=require("mathjs")
class BinarySearch
{
constructor(list)
{
this.list=list;
}
search(num)
{
let low=0,mid;
let high=this.list.length;
while(true)
{
if(low==high) break;
mid=math.floor((low+high)/2);
if(num==this.list[mid]) return mid;
if(num<this.list[mid]) high=mid;
else low=mid+1;
}
if(this.list[low]==num) return low;
return -1;
}
}

module.exports.BinarySearch=BinarySearch;
