// ------------------------------ Create Linked list  ------------------------------------

// class node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }

// }
// let new1 = new node(10)
// let new2 = new node(20)
// let new3 = new node(20)


// new1.next = new2;
// new2.next = new3

// console.log(new3);


//---------------------------------------------- add from starting ---------------------


// // // Node class
// class Node {
//     constructor(data) {
//         this.data = data;   // Value store hogi
//         this.next = null;   // Agle node ka reference
//     }
// }
// // Linked List class
// class LinkedList {
//     constructor() {
//         this.head = null;   // Shuru me list empty hai
//     }

//     // Beginning me node insert karna
//     insertAtBeginning(data) {
//         // Naya node banao
//         let newNode = new Node(data);
//         // New node ko purane head se connect karo
//         newNode.next = this.head;
//         // Head ko update kar do
//         this.head = newNode;
//     }
//     // Linked List print karna
//     print() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// // Object banao
// let list = new LinkedList();

// // Insert karo
// list.insertAtBeginning(30);
// list.insertAtBeginning(20);
// list.insertAtBeginning(10);
// list.insertAtBeginning(5);
// list.insertAtBeginning(1);

// // Print
// list.print();




//--------------------- ese bhi kr skte ho--------------------------------




// class node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//     }
// addFirst (data){
//     let newNode = new node(data)
//     newNode.next = this.head;
//     this.head = newNode;
// }
// print(){
//     let temp = this.head;
//     while(temp){
//         console.log(temp.data);
//         temp = temp.next
//     }}}
// let list = new linkedList()
// list.addFirst(1)
// list.addFirst(2)
// list.addFirst(3)
// list.addFirst(4)
// list.addFirst(5)
// list.addFirst(5)

// list.print()



//----------------------------------- addd in end ----------------------------------------------





// class Node {
//     constructor(data){
    
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     insertAtEnd(data){

//         let newNode = new Node(data);

//         if(this.head === null){
//             this.head = newNode;
//             return;
//         }

//         let current = this.head;

//         while(current.next !== null){
//             current = current.next;
//         }

//         current.next = newNode;
//     }

//     print(){

//         let current = this.head;

//         while(current !== null){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// let list = new LinkedList();

// list.insertAtEnd(10);
// list.insertAtEnd(20);
// list.insertAtEnd(30);
// list.insertAtEnd(40);
// list.insertAtEnd(40);
// list.insertAtEnd(40);

// list.print();



// class node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null;
//     }

//     addFromEnd(data){
//         let newNode = new node(data)
//         if(this.head===null){
//             this.head = newNode
//         return 
//         }
//     let current = this.head;
//     while(current.next!==null){
//       current = current.next;
//     }
//     current.next = newNode}
// print(){
//     let current = this.head
//     while(current!==null){
//        console.log(current.data);
//        current = current.next
       
//     }
// }
// }


// let list = new linkedList()
// list.addFromEnd(1)
// list.addFromEnd(2)
// list.addFromEnd(3)

// list.print()











//--------------------------------------------  Traverse linked list ------------------------------------




// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;}}
// class LinkedList {
//     constructor() {
//         this.head = null; }
//  add(data) {
//         let newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             return; }
//         let temp = this.head;
//         while (temp.next) {
//             temp = temp.next; }
//         temp.next = newNode;}
//     print() {
//         let temp = this.head;
//         while (temp) {
//             console.log(temp.data);
//             temp = temp.next;}}}
// let list = new LinkedList();

// list.add(10);
// list.add(20);
// list.add(30);
// list.add(40);

// list.print();










//-------------------------------------------------   Seacrh Eleement ----------------------------




// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     add(data) {
//         let newNode = new Node(data);

//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }

//         let temp = this.head;

//         while (temp.next) {
//             temp = temp.next;
//         }

//         temp.next = newNode;
//     }

//     search(value) {
//         let temp = this.head;

//         while (temp) {
//             if (temp.data === value) {
//                 console.log("Found");
//                 return;
//             }

//             temp = temp.next;
//         }

//         console.log("Not Found");
//     }
// }

// let list = new LinkedList();

// list.add(10);
// list.add(20);
// list.add(30);
// list.add(40);

// list.search(30);










//--------------------------------------  Delete First Node ---------------------------------



// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     add(data) {
//         let newNode = new Node(data);

//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }

//         let temp = this.head;

//         while (temp.next) {
//             temp = temp.next;
//         }

//         temp.next = newNode;
//     }

//     deleteFirst() {
//         if (!this.head) return;

//         this.head = this.head.next;
//     }

//     print() {
//         let temp = this.head;

//         while (temp) {
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
// }

// let list = new LinkedList();

// list.add(10);
// list.add(20);
// list.add(30);
// list.add(40);

// list.deleteFirst();

// list.print();











//-------------------------------------- Delete Last Node ------------------------------------------





// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     add(data) {
//         let newNode = new Node(data);

//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }

//         let temp = this.head;

//         while (temp.next) {
//             temp = temp.next;
//         }

//         temp.next = newNode;
//     }

//     deleteLast() {

//         // Empty List
//         if (!this.head) return;

//         // Sirf ek node hai
//         if (!this.head.next) {
//             this.head = null;
//             return;
//         }

//         let temp = this.head;

//         while (temp.next.next) {
//             temp = temp.next;
//         }

//         temp.next = null;
//     }

//     print() {
//         let temp = this.head;

//         while (temp) {
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
// }

// let list = new LinkedList();

// list.add(10);
// list.add(20);
// list.add(30);
// list.add(40);

// list.deleteLast();

// list.print();












//-------------------------------------   Reversed Linked List -------------------------------------






// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     add(data) {
//         let newNode = new Node(data);

//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }

//         let temp = this.head;

//         while (temp.next) {
//             temp = temp.next;
//         }

//         temp.next = newNode;
//     }

//     reverse() {

//         let prev = null;
//         let current = this.head;
//         let next = null;

//         while (current) {

//             next = current.next;

//             current.next = prev;

//             prev = current;

//             current = next;
//         }

//         this.head = prev;
//     }

//     print() {
//         let temp = this.head;

//         while (temp) {
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
// }

// let list = new LinkedList();

// list.add(10);
// list.add(20);
// list.add(30);
// list.add(40);

// list.reverse();

// list.print();













// ------------------------------------ Find Middle NOde -------------------------------





// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     add(data) {
//         let newNode = new Node(data);

//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }

//         let temp = this.head;

//         while (temp.next) {
//             temp = temp.next;
//         }

//         temp.next = newNode;
//     }

//     middle() {

//         let slow = this.head;
//         let fast = this.head;

//         while (fast && fast.next) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }

//         console.log(slow.data);
//     }
// }

// let list = new LinkedList();

// list.add(10);
// list.add(20);
// list.add(30);
// list.add(40);
// list.add(50);

// list.middle();

