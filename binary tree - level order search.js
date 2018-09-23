function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
} // End of function Node

function BinarySearchTree() {
	this.insert = function(root, data) {
		if (root === null) {
			this.root = new Node(data);

			return this.root;
		}

		if (data <= root.data) {
			if (root.left) {
				this.insert(root.left, data);
			} else {
				root.left = new Node(data);
			}
		} else {
			if (root.right) {
				this.insert(root.right, data);
			} else {
				root.right = new Node(data);
			}
		}

		return this.root;
	};

	// Start of function levelOrder
	this.levelOrder = function(root) {
		let queue = [];
		queue.push(root);
		while(queue.length > 0){
			const node = queue[0];
			process.stdout.write(node.data + ' ');

			if(node.left) {
				queue.push(node.left);
			}
			if(node.right) {
				queue.push(node.right);
			}

			queue.shift();
		}
	};
}

let tree = new BinarySearchTree();
let root = null;
const values = [3, 5, 4, 7, 2, 1];
for (let i = 0; i < values.length; i++) {
	root = tree.insert(root, values[i]);
}
tree.levelOrder(root)
