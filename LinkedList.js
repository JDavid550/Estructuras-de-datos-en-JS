/*let singlyLinkedList = {
    head:{
        value:1,
        next:{
            value:2,
            next:{
                value:3,
                next:{
                    value:4,
                    next:null
                }
            }
        }
    }
}  */

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class MysinglyLinkedList{
    constructor(value){
        this.head = {
            value : value,
            next : null
        }

        this.tail = this.head

        this.length = 1
    };

    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++

        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++

    }

    insert(index,value){
        if (index >= this.length) {
            return this.append(value)
        }

        const newNode = new Node(value)  //Se crea el nodo
        const firstPointer = this.getTheIndex(index-1) // Se establece que el apuntador del nodo proviene del nodo anterior
        const holdingPointer = firstPointer.next; // Se guarda en memoria el apuntador del nodo anterior para que el garbage colector no lo elimine
        firstPointer.next = newNode; // Se inserta el nuevo nodo como el valor next del apuntador previo
        newNode.next = holdingPointer //Se have que se ´corra´ el el nodo que había antes en ese indice posicionando en next la constante guardada en memoria para evitar el garbage colector
        this.length++
        return this

    }

    getTheIndex(index){
        let counter=0;
        let currentNode = this.head

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }

    delete(index){
        const itemToDelete = this.getTheIndex(index)
        console.log('Item a borrar')
        console.log(itemToDelete)
        ///const firstPointer = this.getTheIndex(index-1) 
        //console.log(firstPointer)
        let firstPointer;
        let secondPointer;

        if (index === 0) {
            firstPointer = this.getTheIndex(index+1)
            this.head = firstPointer
            ///Pendiendte añadir forma de eleminat el primer elemento del la lista
        }else if (index === this.length) {
            console.log('igual')
            firstPointer = this.getTheIndex(index-2)
            console.log(firstPointer)
            firstPointer.next=null
        }
        else{
            firstPointer = this.getTheIndex(index-1)
            secondPointer = this.getTheIndex(index+1)
            firstPointer.next = secondPointer
        }
        
        this.length-- 
        return this
    }

}

let singlyLinkedList = new MysinglyLinkedList(1)

//La lista solo tiene el valor de 1
console.log(singlyLinkedList)

// 1,2
singlyLinkedList.append(2)
console.log(singlyLinkedList)

//3,1,2
singlyLinkedList.prepend(3)
console.log(singlyLinkedList)

//3,1,5,2

singlyLinkedList.insert(2,5)
console.log(singlyLinkedList)

//3,1,5---- Se puede probar con diferentes indices y ya quedo

singlyLinkedList.delete(4)
console.log(singlyLinkedList)

