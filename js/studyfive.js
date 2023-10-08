/** Creating Object  */
let MyFirstObject = {
    name: "Anna Airline",
    dob: new Data(2000, 1,1),
    "billing addresses": [
        {street:"1000 N 4th S", county: "Jessferson", city: "Fairfield", state: "Iowa"},
        {street:"1000 N 4th S", county: "Jessferson", city: "Fairfield", state: "Iowa"}
    ],

    getName: function() {
        return this.name
    }
}

//** Accessing the object */
console.log(MyFirstObject.name)
console.dir(MyFirstObject)


let ra = 3.14;    // A number with decimals
let ta = 3;       // A number without decimals
let ya = 123e5;    // 12300000
let ua = 123e-5;   // 0.00123
let xa = 0.2 + 0.1;//Floating point arithmetic is not always 100% accurate
/**
 * Floating point arithmetic is not always 100% accurate:
0.2 + 0.1 = 0.30000000000000004
But it helps to multiply and divide:
0.2 + 0.1 = 0.3
*/
let ia = (0.2*10 + 0.1*10) / 10; // =0.3


