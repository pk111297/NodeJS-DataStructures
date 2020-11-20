class Stack
{
constructor()
{
this.list=[];
}
push(num)
{
this.list.push(num);
}
pop()
{
if(this.list.length==0)
{
return "Stack is Empty";
}
return this.list.pop()
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

module.exports.Stack=Stack;
