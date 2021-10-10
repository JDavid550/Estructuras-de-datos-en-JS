/*     10
 4    20
2 8 17 170 */

class Node{
    constructor(value){
        this.right = null
        this.left = null
        this.value = value
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        }else{
            let currentNode = this.root
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }else{
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    ///Pendiente hacer metodo search y delete
}

let myTree = new BinaryTree()

myTree.insert(10)
myTree.insert(4)
myTree.insert(20)



console.log(myTree)

