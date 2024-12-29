// // // how to create objects in javascript 
// class Book{
//     constructor(author,pages,actors,director){
//         this.author=author
//         this.pages=pages
//         this.actors=actors
//         this.director=director
//         this.action= function(){
//             console.log(`I love  ${this.author}  who is the author of this book`)
//         }
//     }
   
// }

// const Blossoms= new Book("Fred Kartel",123,"Resian","Olarinkoi")
// const Holliwood= new Book("Fred Kalula",234,"Jacky Chan","Dr.Fred Machoka")

// // // console.log(Holliwood)
// // console.log(Blossoms)
// // console.log(Blossoms.action())

class Product{
    constructor(name,price,discount){
        this.name=name
        this.price=price
        this.discount=discount
    }
  
    calculateTotalPrice(){
        const salesTax = 0.10
        return this.price + (this.price * salesTax)
    }
    displayProduct(){
        console.log(`Product :${this.name}`)
        console.log(`Price ksh: ${this.price}`)
         console.log(`Total price is ksh:${this.calculateTotalPrice()}`)
        console.log(`Discount ksh:${this.discount}`)
         
    }
}

const product1=new Product("Shirt",300,25)
console.log(product1.displayProduct())