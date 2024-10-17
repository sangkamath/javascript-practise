console.log("Test");

/*Stacks!*/
//functions: push, pop, peek, length
var letters = [];
var word = "freeCodeCamp";
var rword = "";

for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword === word) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}

var Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    this.peek = function () {
        return this.storage[this.count - 1];
    }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log("My stack peek " + myStack.peek());
console.log("My stack pop " + myStack.pop());
console.log("My stack peek " + myStack.peek());
myStack.push("freeCodeCamp");
console.log("My stack size " + myStack.size());
console.log("My stack peek " + myStack.peek());
console.log("My stack pop " + myStack.pop());
console.log("My stack peek " + myStack.peek());

function mySet() {
    var collection = [];
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    }

    this.values = function () {
        return collection;
    }

    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    this.remove = function (element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    this.size = function () {
        return collection.length;
    }

    this.union = function (otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        })
        secondSet.forEach(function (e) {
            unionSet.add(e);
        })
    }

    this.intersection = function (otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        })
        return intersectionSet;
    }

    this.difference = function (otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        })
    }
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log("Subset " + setA.subset(setB));
console.log("Intersection " + setA.intersection(setB).values());

var setC = new mySet();
var setD = new mySet();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
console.log("Delete " + setD.remove("a"));
console.log("Has " + setD.has("a"));
console.log("Add " + setD.add("a"));

function Queue() {
    collection = [];
    this.print = function () {
        console.log(collection);
    }
    this.enqueue = function (element) {
        collection.push(element);
    }
    this.dequeue = function () {
        return collection.shift();
    }
    this.front = function () {
        return collection[0];
    }
    this.size = function () {
        return collection.length;
    }
    this.isEmpty = function () {
        return (collection.length === 0);
    }
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.front();
q.print();

function PriorityQueue() {
    var collection = [];
    this.printCollection = function () {
        (console.log(collection));
    }
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };

    this.dequeue = function () {
        var value = collection.shift();
        return value[0];
    }

    this.front = function () {
        return collection[0];
    }

    this.size = function () {
        return collection.length;
    }

    this.isEmpty = function () {
        return (collection.length === 0);
    }
}

var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wojcik', 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left == null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left != null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right != null)
                        return searchTree(node.right);
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function (node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                if (node.left == null && node.right == null) {
                    return null;
                }
                if (node.left == null) {
                    return node.right;
                }
                if (node.right == null) {
                    return node.left;
                }
                var tempNode = node.right;
                while (tempNode.left != null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    preOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traversePreOrder(node) {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(this.root);
            return result;
        }
    }

    postOrder() {
        if (this.root == null) {
            return null;
        } else {
            var result = new Array();
            function traversePostOrder(node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
        }
    }

    levelOrder() {
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                }
            }
            return result;
        } else {
            return null;
        }
    }
}


const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log("Find min " + bst.findMin());
console.log("Find max " + bst.findMax());
bst.remove(7);
console.log("Find max " + bst.findMax());
console.log("Is present 4 is " + bst.isPresent(4));


const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());

let myMap = function () {
    this.collection = {};
    this.count = 0;
    this.size = function () {
        return this.count;
    }
    this.set = function (key, value) {
        this.collection[key] = value;
        this.count++;
    }
    this.has = function (key) {
        return (key in this.collection);
    }
    this.get = function (key) {
        return (key in this.collection) ? this.collection[key] : null;
    }
    this.delete = function (key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.count--;
        }
    }
    this.values = function () {
        let result = new Array();
        for (let key of Object.keys(this.collection)) {
            result.push(this.collection[key]);
        }
        return (result.length > 0) ? result : null;
    }
    this.clear = function () {
        this.collection = {};
        this.count = 0;
    }
}

let map = new myMap();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('belley button', 1);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());

let map2 = new Map();
map2.has('hands');
map2.entries();

let keyObj = {},
    keyFunc = function () { };

map2.set('hello', 'string value');
map2.set(keyObj, 'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value')

console.log(map2.size);

console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));

var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

let HashTable = function () {
    let storage = [];
    const storageLimit = 14;

    this.print = function () {
        console.log(storage);
    }

    this.add = function (key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [[key, value]];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    }

    this.lookup = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    }
}

console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();

function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.size = function () {
        return length;
    }

    this.head = function () {
        return head;
    }

    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;

    }

    this.remove = function (element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            if (currentNode.element === element) {
                previousNode.next = currentNode.next
            } else if (currentNode === null) {
                return;
            }
        }
        length--;
    }

    this.isEmpty = function () {
        return length === 0;
    }

    this.indexOf = function (element) {
        var currentNode = head;
        var index = -1;
        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }

    this.elementAt = function (index) {
        var currentNode = head;
        var count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }

    this.addAt = function (index, element) {
        var node = new Node(element);
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        if (index > length) {
            return false;
        }
        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }

    this.removeAt = function (index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        if (index < 0 || index >= length) {
            return null;
        }
        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }
}

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());

/* Trie Data Structure */

let Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};

let Trie = function () {

    this.root = new Node();

    this.add = function (input, node = this.root) {
        if (input.length == 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        };
    };

    this.isWord = function (word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            };
        };
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ?
            true : false;
    };

    this.print = function () {
        let words = new Array();
        let search = function (node, string) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                };
                if (node.isEnd()) {
                    words.push(string);
                };
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            };
        };
        search(this.root, new String());
        return words.length > 0 ? words : null;
    };

};

myTrie = new Trie()
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())

let MinHeap = function (num) {
    let heap = [null];

    this.insert = function (num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;
            while (heap[idx] < heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]];
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    } else {
                        break;
                    }
                }
            }
        }
    }

    this.remove = function () {
        let smallest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if (heap.length == 3) {
                if (heap[1] > heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                }
                return smallest;
            }
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
                if (heap[left] < heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i;
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] == undefined || heap[right] == undefined) {
                    break;
                }
            }
        } else if (heap.length == 2) {
            heap.splice(1, 1);
        } else {
            return null;
        }
        return smallest;
    }

    this.sort = function () {
        let result = new Array();
        while (heap.length > 1) {
            result.push(this.remove())
        }
        return result;
    }
}

let MaxHeap = function () {

    let heap = [null];

    this.print = () => heap;

    this.insert = function (num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;
            while (heap[idx] > heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]];
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    } else {
                        break;
                    };
                };
            };
        };
    };

    this.remove = function () {
        let biggest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if (heap.length == 3) {
                if (heap[1] < heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                return biggest;
            };
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
                if (heap[left] > heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                };
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] == undefined || heap[right] == undefined) {
                    break;
                };
            };
        } else if (heap.length == 2) {
            heap.splice(1, 1);
        } else {
            return null;
        };
        return biggest;
    };
};

function bfs(graph, root) {
    var nodesLen = {};
    for (var i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;

    var queue = [root];
    var current;

    while (queue.length != 0) {
        current = queue.shift();
        var curConnected = graph[current];
        var neightbourIdx = [];
        var idx = curConnected.indexOf(1);
        while (idx != -1) {
            neightbourIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }

        for (var j = 0; j < neightbourIdx.length; j++) {
            if (nodesLen[neightbourIdx[j]] == Infinity) {
                nodesLen[neightbourIdx[j]] = nodesLen[current] + 1;
                queue.push(neightbourIdx[j]);
            }
        }
    }
    return nodesLen;
}

var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 1));

const findUnvisitedNode = (currentNode, graph, visitedNodes) => {
    const currentConnectedNodes = graph[currentNode];
    let neighborIdx = -1;
    currentConnectedNodes.forEach((element, idx) => {
        if (element == 1 && !visitedNodes[idx] && neighborIdx == -1) {
            neighborIdx = idx;
        }
    })
    return neighborIdx;
}

const dfs = (graph, rootNode) => {
    let nodeDistance = {};
    for (let i = 0; i < graph.length; i++) {
        nodeDistance[i] = Infinity;
    }
    nodeDistance[rootNode] = 0;
    let stack = [rootNode];
    let visitedNodes = { [rootNode]: true };
    while (stack.length) {
        const currentNode = stack.pop();
        const unvisitedNode = findUnvisitedNode(currentNode, graph, visitedNodes);

        if (unvisitedNode >= 0) {
            if (!visitedNodes[unvisitedNode]) {
                if (nodeDistance[unvisitedNode] == Infinity)
                    nodeDistance[unvisitedNode] = nodeDistance[currentNode] + 1;
                visitedNodes[unvisitedNode] = true;
                stack.push(...[currentNode, unvisitedNode]);
            }
        } else {
            visitedNodes[unvisitedNode] = true;
        }
    }

    return nodeDistance;
}


console.log(dfs(exBFSGraph, 1));

function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.value.match(phoneno)) {
        return true;
    }
    else {
        alert("message");
        return false;
    }
}

/*
To valid a phone number like
XXX-XXX-XXXX
XXX.XXX.XXXX
XXX XXX XXXX
use the following code.
*/
function phonenumber(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.value.match(phoneno)) {
        return true;
    }
    else {
        alert("message");
        return false;
    }
}

/*
If you want to use a + sign before the number in the following way
+XX-XXXX-XXXX
+XX.XXXX.XXXX
+XX XXXX XXXX
use the following code.
*/

function phonenumber(inputtxt) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (inputtxt.value.match(phoneno)) {
        return true;
    }
    else {
        alert("message");
        return false;
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

var usernameRegex = /^[a-zA-Z0-9]+$/;

const hits = {
    "google.com": 58,
    "whatever.com": 22,
    "yahoo.com": 38,
    // ...
};
const sortedHitsTuple = Object.entries(hits).sort((a, b) => a[1] - b[1]);
function getTop5(hits) {
    return sortedHitsTuple.slice(-5).map(([referrer]) => referrer);
}
function getBottom5(hits) {
    return sortedHitsTuple.slice(0, 5).map(([referrer]) => referrer);
}

function getElementsByStyle(prop, value) {
    let elements = [];
    const _getElementFromNode = function (node) {
        if (node) {
            for (let i = 0; i < node.children.length; i++) {
                let element = node.children[i];
                let styles = getComputedStyle(element);
                if (styles && styles.get(prop) === value) {
                    elements.push(element);
                }
                if (element.childElementCount) {
                    _getElementFromNode(element);
                }
            }
        }
    }
    if (document.body.hasChildNodes()) {
        _getElementFromNode(document.body);
    }
    return elements;
}

/*
1. You type https://jennapederson.dev/hello-world in your browser and press Enter
2. Browser looks up IP address for the domain
3. Browser initiates TCP connection with the server (transmission control protocol)
4. Browser sends the HTTP request to the server
5. Server processes request and sends back a response
6. Browser renders the content
*/

const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let change = false;
        for (let j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                change = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!change) break;
    }
    return arr;
};

const quickSort = arr => {
    if (arr.length < 2) return arr;

    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left = [];
    let equal = [];
    let right = [];

    for (let element of arr) {
        if (element > pivot) right.push(element);
        else if (element < pivot) left.push(element);
        else equal.push(element);
    }

    return quickSort(left)
        .concat(equal)
        .concat(quickSort(right));
};

const radixSort = arr => {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;

    while (divisor < maxNum) {
        let buckets = [...Array(10)].map(() => []);

        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }

        arr = [].concat.apply([], buckets);
        divisor *= 10;
    }
    return arr;
};


const benchmark = arr => {
    arr = arr
        ? arr
        : [...Array(1000)].map(() => Math.floor(Math.random() * 1000));

    const versions = [
        { arr: [...arr], title: "Random" },
        { arr: [...arr.sort((a, b) => a - b)], title: "Sorted" },
        { arr: [...arr.reverse()], title: "Reversed" },
        { arr: new Array(1000).fill(8), title: "Equal" }
    ];

    const sorts = [
        { func: bubbleSort, title: "Bubble" },
        { func: quickSort, title: "Quick" },
        { func: radixSort, title: "Radix" }
    ];

    for (let { arr, title } of versions) {
        console.log(`\n${title} Data`);
        console.log("*******************************");
        for (let { func, title } of sorts) {
            const before = Date.now();
            for (let i = 0; i < 1000; i++) {
                func([...arr]);
            }
            console.log(`${title} Sort: ${(Date.now() - before) / 1000}sec`);
        }
    }
};

const binarySearch = (array, target) => {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

        if (array[middleIndex] === target) {
            return middleIndex;
        }

        if (array[middleIndex] > target) {
            lastIndex = middleIndex - 1;
        } else {
            firstIndex = middleIndex + 1;
        }
    }
    return -1;
};

function recursiveBinarySearch(n, arr) {
    let mid = Math.floor(arr.length / 2);
    if (arr.length === 1 && arr[0] != n) {
        return false;
    }
    if (n === arr[mid]) {
        return true;
    } else if (n < arr[mid]) {
        return recursiveBinarySearch(n, arr.slice(0, mid));
    } else if (n > arr[mid]) {
        return recursiveBinarySearch(n, arr.slice(mid));
    }
}

let score = [12, 22, 45, 67, 96];
console.log(binarySearch(score, 96));