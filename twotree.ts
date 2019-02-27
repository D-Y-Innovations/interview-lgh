let Tree = (function() {

class Node {

        key:any;
        left:any;
        right:any;
		
	constructor(thekey:any) {
            this.key = thekey;
            this.left = null;
            this.right = null;
	 }
    }
	
	
class BinarySearchTree {

        root:any;
		
	 constructor() {
            this.root = null;
        }
		
	add(key:any) {
            var newNode = new Node(key);
            if(this.root === null) {
		 this.root = newNode;
            } else {
	 this.insertNode(this.root, newNode);
            }
        }
		
	insertNode(node:any, newNode:any) {
            if(newNode.key < node.key) {
		 if(node.left === null) {
                    node.left = newNode;
                } else {
			 this.insertNode(node.left, newNode);
                }
            } else {
		 if(node.right === null) {
                    node.right = newNode;
                } else {
		 this.insertNode(node.right, newNode);
                }
            }
	}
	
	 hasValue(key:number) {
            console.log(this.searchNode(this.root, key))
	 return this.searchNode(this.root, key);
        }
		
      searchNode(node:any, key:any):any {
		 if(node === null) {
                return false;
            }
	 	 if(key < node.key) {
                return this.searchNode(node.left, key);
	 } else if(key > node.key) {
                return this.searchNode(node.right, key);
	} else {
                return true;
            }
		 return 0;
        }
		
	  print(callback:any) {
            this.printNode(this.root, callback);
        }
		
	  printNode(node:any, callback:any) {
            if(node !== null) {
		 this.printNode(node.left, callback);
                callback(node.key);
                this.printNode(node.right, callback);
		 }
        }
		
       min(){
		  return this.minNode(this.root);
        }
		
	   minNode(node:any) {
            if(node) {
                while(node && node.left !== null) {
		  node = node.left;
                }
		  return node.key;
            }
            return null;
        }
		
		remove(element:number) {
            if(this.hasValue(element)){
                this.root = this.removeNode(this.root, element);
		 console.log("�Ѿ�ɾ���ڵ�:"+element);
            }else{
                console.log("�����ڽڵ�:"+element+'���������');
		}
	}
	
		findMinNode(node:any) {
            while(node && node.left !== null) {
                node = node.left;
	 }
            return node;
        }
		
		 removeNode(node:any, element:number) {
            if(node === null) {
                return null;
	 }
            if(element < node.key) {
                node.left = this.removeNode(node.left, element);
						 return node;
            } else if(element > node.key) {
		 node.right = this.removeNode(node.right, element);
                return node;
		 } else { 
            if(node.left === null && node.right === null) {
		node = null;
                    return node;
                }
		  if(node.left === null) {
                    node = node.right;
                    return node;
		 } else if(node.right === null) {
                    node = node.left;
                    return node;
		}
                var aux = this.findMinNode(node.right);
                node.key = aux.key;
				node.right = this.removeNode(node.right, aux.key);
                return node;
            }
	 };
    }
	return BinarySearchTree;
})()

var tree = new Tree();
let arrss:any=[];
tree.add(11);
tree.add(6);
tree.add(13);
tree.add(5);
tree.add(3);
function printNodes(value:any){
    arrss.push(value)
	 console.log(arrss);
}
tree.print(printNodes);
tree.remove(1);
tree.remove(5);
tree.hasValue(11);