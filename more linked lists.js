function Node(data) {
	this.data = data;
	this.next = null;
}
function Solution() {
	this.removeDuplicates = function(head) {
		//Write your code here
		let curr = head;
		while (curr.next != null) {
			let data1 = curr.data;
			let data2 = curr.next.data;
			if (data1 === data2) {
				curr.next = curr.next.next;
			} else {
				curr = curr.next;
			}
			this.display(head);
		}
		return head;
	};

	this.insert = function(head, data) {
		var p = new Node(data);
		if (head == null) {
			head = p;
		} else if (head.next == null) {
			head.next = p;
		} else {
			var start = head;
			while (start.next != null) {
				start = start.next;
			}
			start.next = p;
		}
		return head;
	};

	this.display = function(head) {
		var start = head;
		let arr= [];
		while (start) {
			//console.log(start.data + ' ');
			arr.push(start.data);
			start = start.next;
		}
		console.log(' ' + arr);
	};
}

const arr = [1,2,2,3,3,4];
//const arr = [1,1,1,1,1,1,1];
//const arr = [3,9,9,11,11,11,11,89,89,100,100,101,102,103,108,200,250,250,250,250]; //3 9 11 89 100 101 102 103 108 200 250
let head = null;
let mylist = new Solution();
for (let i = 0; i < arr.length; i++) {
	let data = arr[i];
	head = mylist.insert(head, data);
}
head = mylist.removeDuplicates(head);
//mylist.display(head);
//console.table(head);
