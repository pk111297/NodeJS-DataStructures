class Node
{
constructor()
{
this.data=null;
this.left=null;
this.right=null;
}
}
class BinarySearchTree
{
constructor()
{
this.root=null;
}
addNode(num)
{
let t=new Node();
t.data=num;
if(this.root==null) this.root=t;
else
{
let j=this.root;
while(true)
{
if(num<j.data)
{
if(j.left==null)
{
j.left=t;
break;
}
else j=j.left;
}
else
{
if(j.right==null)
{
j.right=t;
break;
}
else j=j.right;
}
}
}
}//addnode khatam

removeNode(num)
{
let e,f,j,t=this.root;
while(t!=null)
{
if(num==t.data) break;
j=t;
if(num<t.data) t=t.left;
else t=t.right;
}
if(t==null) return num+" Not Found";
if(t==this.root) 
{
if(t.left==null && t.right==null)
{
this.root=null;
return num+" removed";
}
if(t.left==null)
{
this.root=t.right;
return num+" removed";
}
if(t.right==null)
{
this.root=t.left;
return num+" removed";
}
e=t.left;
f=t.right;
while(f.left!=null) f=f.left;
f.left=e;
this.root=t.right;
return num+" removed";
}

if(t.data<j.data)
{
if(t.left==null && t.right==null)
{
j.left=null;
return num+" removed";
}
if(t.left==null)
{
j.left=t.right;
return num+" removed";
}
if(t.right==null)
{
j.left=t.left;
return num+" removed";
}
e=t.left;
f=t.right;
while(f.left!=null) f=f.left;
f.left=e;
j.left=t.right;
}
else
{
if(t.left==null && t.right==null)
{
j.right=null;
return num+" removed";
}
if(t.left==null)
{
j.right=t.right;
return num+" removed";
}
if(t.right==null)
{
j.right=t.left;
return num+" removed";
}
e=t.left;
f=t.right;
while(f.left!=null) f=f.left;
f.left=e;
j.right=t.right;
}
return num+" removed";
}//removeNode khatam

inOrderTraversal(t)
{
if(t==null) return;
this.inOrderTraversal(t.left);
console.log(t.data);
this.inOrderTraversal(t.right);
}

preOrderTraversal(t)
{
if(t==null) return;
console.log(t.data);
this.preOrderTraversal(t.left);
this.preOrderTraversal(t.right);
}

postOrderTraversal(t)
{
if(t==null) return;
this.postOrderTraversal(t.left);
this.postOrderTraversal(t.right);
console.log(t.data);
}

}

module.exports.BinarySearchTree=BinarySearchTree;
