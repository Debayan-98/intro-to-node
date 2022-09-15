class person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    hello(){
       console.log(`The name of the student is${this.name} and age is ${this.age}` )
    }
}


module.exports=new person("Debayan Roy",45)