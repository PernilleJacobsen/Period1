/**
 * Created by Pernille on 14-02-2016.
 */
//8.1 Create an object with four different properties
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
//for each to iterate over the object
console.log("the proporties are: ");
for (x in person) {

    var txt= person[x];
   console.log(txt);
}
//delete a property and iterate again
delete person.age;
console.log("the proporties are after deletion: ");
for (x in person) {

    var txt = person[x];
    console.log(txt);
}
//use the function inherited from Object hasOwnProperty to test whether a property exist
console.log("It is "+person.hasOwnProperty("age")+" that age exist as a property");

//8.2 create a constructor to create new Persons having a firstname, lastname and age
//a method to get details about the Person
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.details = function() {
        forEach(this);
    }
}
//8.3 create an object of your own choice and list all properties in the object using the function given

var p1 = new Person("Pernille", "Jacobsen", 47);
function listAllProperties(p1){
    var objectToInspect;
    var result = [];

    for(objectToInspect = p1; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}
console.log(listAllProperties(p1));

delete p1.age;

console.log("nu er age væk fra listen "+listAllProperties(p1));



