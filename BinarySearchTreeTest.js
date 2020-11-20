var s=require("./BinarySearchTree");
var bst=new s.BinarySearchTree();
const prompt = require('prompt-sync')();
while(true)
{
console.log("1>Add a node in BST")
console.log("2>Remove a node from BST")
console.log("3>In Order Traversal in BST")
console.log("4>Pre Order Traversal in BST")
console.log("5>Post Order Traversal in BST")
console.log("6>Exit")
let t=prompt("Enter your choice:");
if(t==1)
{
n=prompt("Enter a Number to add: ");
bst.addNode(n)
}
if(t==2)
{
n=prompt("Enter a Number to Remove from BST: ");
bst.removeNode(n)
}
if(t==3)
{
bst.inOrderTraversal(bst.root);
}
if(t==4)
{
bst.preOrderTraversal(bst.root);
}
if(t==5)
{
bst.postOrderTraversal(bst.root);
}
if(t==6) break;
}
