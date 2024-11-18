class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next; 
            }
            currentNode.next = newNode;
        }
    }
    displayData() {
        let current = this.head;
        const result = []; 

        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join("->"));
    }
}

const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.displayData();