class Node
{
constructor()
{
this.num=null;
this.next=null;
}
}
class SinglyLinkedList
{
constructor()
{
this.start=null;
}
addAtEnd(num)
{
let t=new Node()
t.num=num;
if(this.start==null) this.start=t;
else
{
let i=this.start
while(i.next!=null) i=i.next;
i.next=t
}
}
insertAtTop(num)
{
let t=new Node()
t.num=num;
if(this.start==null) this.start=t;
else
{
t.next=this.start;
this.start=t;
}
}
insertAtPosition(num,pos)
{
let t=new Node()
t.num=num;
if(this.start==null)
{
 this.start=t;
 return;
}
if(pos<=1)
{
t.next=this.start;
this.start=t;
}
else
{
let i=this.start;
let j=this.start;
let count=1;
while(i!=null)
{
if(count>=pos-1) break;
j=i;
i=i.next;
count=count+1;
}
if(i==null)
{
j.next=t
}
else
{
t.next=i.next
i.next=t
}
}
}
removeFromPosition(pos)
{
if(this.start==null)
{
return "List is Empty";
}
if(pos<1 || pos>this.getLength()) return "Invalid Position";
if(pos<=1)
{
let g=this.start.num;
this.start=this.start.next;
return g
}
else
{
let i=this.start;
let j=this.start;
let count=1;
while(i!=null)
{
if(count>=pos-1) break;
j=i;
i=i.next;
count=count+1;
}
if(i==null || i.next==null)
{
return "Invalid Position";
}
else
{
let g=i.next.num;
i.next=i.next.next;
return g;
}
}
}
getLength()
{
let count=0;
let i=this.start
while(i!=null)
{
count=count+1
i=i.next
}
return count;
}
traverseTopToBottom()
{
let i=this.start;
while(i!=null)
{
console.log(i.num);
i=i.next;
}
}
}//class ends


module.exports.SinglyLinkedList=SinglyLinkedList;
