class DoublyLinkedList {
    constructor(value){
        this.head = {
            value : this.value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
       // append to end of list
       append(value){
        const newNode ={
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // return result of appending to end of original list
        return this;
    }
    // prepend to start of list
    prepend(value){
        // create new node
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        // points to first node of head 
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        // return result of prepending to original list
        return this;
    }
    // print total linked list
    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    // insert at specific index
    insert(index, value){
        // check params 
        // if given index is greater than the length of list 
        if (index >= this.length){
            // just add value to end of the list
            return this.append(value)
        }
        const newNode = {
            value: value,
            next : null,
            prev: null
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        // points to new node
        leader.next = newNode;
        // when new node is created it should have a pointer directing back to the leader
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode; 
        this.length++;
        return this.printList();
    }
    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        // keep traversing until we get to index
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    // remove at index of given
    remove(index){
        // check the params for ( pos num , is index given more than length of list )
        if (index >= this.length){
            // just add value to end of the list
            return this.append(value)
        }
        const leader = this.traverseToIndex(index - 1);
        // get reference to node we want to unwanted node
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        // decrement length of list 
        this.length--;
        return this.printList();
    }
}

//initiate new copy of Linkedlist
const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(20);

// output :: 

// DoublyLinkedList {
//     head: <ref *1> {
//       value: undefined,
//       next: { value: 5, next: [Object], prev: [Circular *1] },
//       prev: null   // there is no prev due to it being head
//     },
//     tail: <ref *2> {
//       value: 20,
//       next: null,
//       prev: { value: 5, next: [Circular *2], prev: [Object] } // points to previous node
//     },
//     length: 3
//   }
  



