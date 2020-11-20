var s=require("./DoublyLinkedList");
var dll=new s.DoublyLinkedList();
const prompt = require('prompt-sync')();
while(true)
{
console.log("1>Add a node at End")
console.log("2>Insert a node at top")
console.log("3>Insert a node at a position")
console.log("4>Remove a node from a position")
console.log("5>Traverse- Top To Bottom")
console.log("6>Length of Linked List")
console.log("7>Exit")
let t=prompt("Enter your choice:");
if(t==1)
{
n=prompt("Enter a Number to add at End: ");
dll.addAtEnd(n)
}
if(t==2)
{
n=prompt("Enter a Number to insert at Top: ");
dll.insertAtTop(n)
}
if(t==3)
{
n=prompt("Enter a Number to insert: ");
p=prompt("Enter a Position at to Insert: ");
dll.insertAtPosition(n,p);
}
if(t==4)
{
p=prompt("Enter a Position to Remove: ");
console.log("The number removed is: "+dll.removeFromPosition(p));
}
if(t==5)
{
dll.traverseTopToBottom();
}
if(t==6)
{
n=dll.getLength();
console.log("Length of the Linked List is "+n)
}
if(t==7) break;
}
