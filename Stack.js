class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.length = 0
        this.top = null
        this.bottom = null
    }

    push(item){
        const newNode = new Node(item)
        if (this.length === 0) {
            this.top= newNode
            this.bottom = newNode
        }else{
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
    }

    pop(){
        this.top.value = this.top.next
        this.top.next = null
        console.log('borrado')
    }

    peek(){
        console.log(this.top.value)
        return this.top.value
    }
}

let MyStack = new Stack()

MyStack.push(1)
MyStack.push(2)
MyStack.push(3)

//console.log(MyStack.data)

//MyStack.pop()
MyStack.peek()

console.log(MyStack)