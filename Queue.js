class Queue
{
constructor()
{
this.list=[];
}
enqueue(num)
{
this.list.push(num);
}
dequeue()
{
if(this.list.length==0) return "Queue is Empty";
return this.list.shift();
}
peek()
{
if(this.list.length==0) return "Queue is Empty";
return this.list[0];
}
isEmpty()
{
if(this.list.length==0) return true;
else return false;
}
isFull()
{
return false;
}
}

module.exports.Queue=Queue;
