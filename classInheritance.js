
class car
{
    constructor(brand)
    {
        this.name=brand;
    }

    present()
    {
        return "I have"+this.name;
    }
}

class Model extends car
{
    constructor(brand,model)
    {
        super(brand);
        this.model=model;
    }
    show()
    {
        return "I have  "+this.present()+" It is a "+this.model;
    }
}

let derived=new Model("Maruti",15);
console.log(derived.show());