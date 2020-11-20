var s=require("./Stack");
var stack=new s.Stack();
const prompt = require('prompt-sync')();
while(true)
{
console.log("1.Push a number into stack")
console.log("2.POP a number from Stack")
console.log("3.Exit")
let t=prompt("Enter your choice:");
if(t==1)
{
n=prompt("Enter the number: ");
stack.push(n)
}
if(t==2)
{
p=stack.pop()
console.log("Num removed from stack: "+p);
}
if(t==3) break
}






