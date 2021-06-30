//Use of this keyword

let fullName=0;

const person = {
    firstName: "Arati",
    lastName : "Budihale",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName())