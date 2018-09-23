const DoublyLinkedListNode = class {
	constructor(nodeData) {
		this.data = nodeData;
		this.next = null;
		this.prev = null;
	}
};

const DoublyLinkedList = class {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertNode(nodeData) {
		let node = new DoublyLinkedListNode(nodeData);

		if (this.head == null) {
			this.head = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
		}

		this.tail = node;
	}
};

function printDoublyLinkedList(node) {
	
	while (node != null) {
		console.log(node.data);
		node = node.next;
	}
}

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
// list name = llist
// head -= llist.head
// data data to be inserrted, in sorted order
function sortedInsert(head, data) {
	// create new node for insertion
	let nodeNew = new DoublyLinkedListNode(data);
	// iterate through list to get matching node
	let currHead = head;
	let nodeNext; // next node
	while (currHead.next != null) {
		nodeNext = currHead.next; // get next node
		//console.log(nodeNext.data) //[1, 3, 4, 10];
		//console.log(index);
		if (nodeNext.data > data) {
			//console.log(nodeNext.data, data)
			// insert here
			// get next node data
			//console.log('currnode');
			//console.log(currHead.data);
			currHead.next = nodeNew;
			nodeNext.prev = nodeNew;
			nodeNew.prev = currHead;
			nodeNew.next = nodeNext;
			//	console.log(prevNode);
			//	console.log(currHead);
			break;
		} else {
			currHead = nodeNext;
		}
		//console.log('wtf')
	}
	//console.log(currHead);
	//console.log(nodeNext);
	console.log(head);
	return head;
}

function main() {
	const ldata = [1, 3, 4, 10];
	let llist = new DoublyLinkedList();
	for (let i = 0; i < ldata.length; i++) {
		let llistItem = ldata[i];
		llist.insertNode(llistItem);
	}
	let llist1 = sortedInsert(llist.head, 5);
	//console.log(llist_head);
	//console.table(llist1);
	printDoublyLinkedList(llist1);
}

main();
