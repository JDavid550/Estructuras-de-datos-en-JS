//const array = ['pepe','juancho','pisco']

class MyArray {
    constructor (){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item;
        this.length++
        return this.data
    }
///Elimina el ultimo elemento del array
    pop(){
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index){
        const item = this.data[index]
        this.shiftIndex(index);

        return item
    }

    shiftIndex(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length --; 
    }
//Añade un elemento al principio del array///
    unshift(item){
        
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i-1]
            
        }
        this.data[0]=item
        this.length++
        return this.data 
    }

}

const array = new MyArray()

array.push('pepe')
array.push('pacho')
array.push('gabo')
array.push('poncho')

console.log(array)
//console.log('Obtiene el elemento con index 1: ' + array.get(1))

/* console.log('Borra el ultimo elemento del array: ' + array.pop())
console.log(array) */


/* array.unshift('Lola')
console.log(array) */

/* array.delete(0)
console.log(array) */