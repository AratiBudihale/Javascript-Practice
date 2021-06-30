
//A static method is created with the "static" keyword, and you can only call the method on the class itself.


class Car
{
    constructor(name)
    {
        this.name=name;
    }

    static Hello()
    {
        return "Hello";
    }
}

let myCar=new Car("Maruti")
console.log(Car.Hello());