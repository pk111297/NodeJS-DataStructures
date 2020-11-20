var s=require("./Queue");
var queue=new s.Queue();
const prompt = require('prompt-sync')();
while(true)
{
console.log("1.Enqueue a number into Queue")
console.log("2.Dequeue a number from Queue")
console.log("3.Peek a number from Queue")
console.log("4.Exit")
let t=prompt("Enter your choice:");
if(t==1)
{
n=prompt("Enter the number: ");
queue.enqueue(n)
}
if(t==2)
{
p=queue.dequeue()
console.log("Num removed from Queue: "+p);
}
if(t==3)
{
p=queue.peek()
console.log("Num removed from Queue: "+p);
}
if(t==4) break;
}
