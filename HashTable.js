class HashTable{
    constructor(size){
        this.data= new Array(size) //Esto permite crear el array que fungirá de Bucket para ingresar los objetos key value
    }
    // Esta es la función hash que por lo general se pueden encontrar en repositorios de GitHub
    hashMethod(key){
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)*i) % this.data.length
        } 
        return hash
    }
    //Método para establecer y agregar nuevos objetos a la tabla
    set(key, value){
        const address = this.hashMethod(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }
    //Método para obtener el valor de un key

    get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0]=== key) {
                    return currentBucket[i][1];
                }
                
            }
        }
        return undefined
    }

    list(){
        const list = this.data
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] != undefined) {
                    for (let j = 0; j < list[i].length; j++) {
                        console.log(list[i][j])
                    }
                    
                }
            }
        }
    }


}

let myHash =  new HashTable(20)

let myHash2 = myHash.hashMethod('holiii')

console.log(myHash2)


let myHash3 = myHash.set('Juan', 1999)
console.log(myHash3)
let myHash4 = myHash.set('Pepe', 1995)
console.log(myHash4)

let myHash5 = myHash.get('Juan')
console.log(myHash5)

let myHash6 = myHash.list()