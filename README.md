# Doubly-linked-list
View this document in a non-wrapped mode for better viewing


Q: what are doubly-linked-list?
A: it has yet another node in which the singly-linked node did not

Q: What is the purpose for the second node?:
A: the first node still points to the next node in the link,
    while the second(doubly) points to the previous node
    
Q: How does it differ to singly-linked-list? :
A: It has double the connection(s) than the singly-linked-list
    it has two ; one forward connection and one backward

Q: What is the run time on traversing doublly-linked-list?:
A: 

Q: 
A:

Q: What are the run-time(s) of the various doubly-linked methods?
A: prepend O(1) , 2.) append O(1), lookup O(n), insert O(n),
    delete (n)

Q:
A:

Q: what does the doubly linked list looked like visualized?:
A:
  
  < head >      < tail >
    *      *      *
    *--><--*--><--*--> null
    

Q: is there an upside to using doubly vs singly?
A: access time on a doubly may be quicker

Q: is there any downside of doubly linked list?:
A: the doubly may carry more data thus; taking up more memory

Q: pros of singly-linked-list:
A: 
  1. requires less memory
  2. cannot be traversed from 0 - n 
  3. should be used when you want to use less memory and do fast insertion, deletion
  
Q: pros of doubly-linked list:
A: 
  1. traversed from front || back 
  2. if wanting to delete previous node you do not have to traverse from the head to n and find out what the previous node was/is 
  3. easy to search backwards 
