//If you want to use the myCar object inside the static method,
// you can send it as a parameter:

class Car
{
    constructor(name)
    {
        this.name=name;
    }

    static Hello(x)
    {
        return "Hello "+x.name;
    }
}

let myCar=new Car("Maruti")
console.log(Car.Hello(myCar));