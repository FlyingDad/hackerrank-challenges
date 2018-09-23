const SinglyLinkedListNode = class {
	constructor(nodeData) {
		this.data = nodeData;
		this.next = null;
	}
};

const SinglyLinkedList = class {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertNode(nodeData) {
		const node = new SinglyLinkedListNode(nodeData);

		if (this.head == null) {
			this.head = node;
		} else {
			this.tail.next = node;
		}

		this.tail = node;
	}
};

function printSinglyLinkedList(node) {
	while (node != null) {
		console.log(String(node.data));

		node = node.next;
	}
}

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
// list name = llist
// head -= llist.head
function insertNodeAtPosition(head, data, position) {
	// create new node for insertion
	let nodeNew = new SinglyLinkedListNode(data);
	// iterate through list to get matching node
	let currHead = head;
	let index = 0;
	let nodeNext; // next node
	let prevNode;
	while (index <= position) {
		nodeNext = currHead.next; // get next node
		//console.log(index);
		if (index === position) {
			// get next node data
			//console.log(prevNode);
			//console.log(currHead);
			prevNode.next = nodeNew;
			nodeNew.next = currHead;
			//	console.log(prevNode);
			//	console.log(currHead);
			break;
		} else {
			prevNode = currHead;
			currHead = nodeNext;
			index++;
		}
		//console.log('wtf')
	}
	//console.log(currHead);
	//console.log(nodeNext);
	//console.log(head);
	return head;
}

function main() {
	const ldata = [16, 13, 7];
	let llist = new SinglyLinkedList();
	for (let i = 0; i < ldata.length; i++) {
		let llistItem = ldata[i];
		llist.insertNode(llistItem);
	}
	let llist_head = insertNodeAtPosition(llist.head, 1, 2);
	//console.log(llist_head);
	printSinglyLinkedList(llist_head);
}

main();
