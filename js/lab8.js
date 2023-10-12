/** Question 1 - Solution: USING OBJECT LITERAL 
let student = {
    firstName: "",
    lastName:"",
    grades: [],
    inputNewGrade: function(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
        let v = this.grades.reduce((e,f) => e+f);
        let l = this.grades.length;
        return v/l;
    }

}

let student1 = Object.create(student);
student1.firstName = "Alice";
student1.firstName = "One";
student1.grades = [];
student1.inputNewGrade(6);
student1.inputNewGrade(7);
student1.inputNewGrade(8);

let student2 = Object.create(student);
student2.firstName = "Tom";
student2.firstName = "Two";
student2.grades = [];
student2.inputNewGrade(8);
student2.inputNewGrade(9);
student2.inputNewGrade(7);

let student3 = Object.create(student);
student3.firstName = "Brown";
student3.firstName = "Three";
student3.grades = [];
student3.inputNewGrade(9);
student3.inputNewGrade(9);
student3.inputNewGrade(9);

let array = [student1, student2, student3];
let sum =0;
array.forEach((s) => {
    sum += s.computeAverageGrade();
    console.log("Average Grade of "+ s.firstName + " " + s.lastName+ ": "+s.computeAverageGrade());// 7, 8, 9
});
console.log("Average Grade of All Students: "+sum/array.length);//8

*/


/** Question 2 - Solution : USING CONSTRUCTOR FUNCTION
 * 
*/
console.log("==================================Question 2: ");
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}
Student.prototype.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function() {
    if (this.grades.length != 0) {
        let total = this.grades.reduce(
            (a,b)=> a+b
            );
        let n = this.grades.length;
        return total/n;
    } else {
        return 0;
    }
}
let student1 = new Student("John", "One");
student1.inputNewGrade(6);
student1.inputNewGrade(7);
student1.inputNewGrade(8);

let student2 = new Student("Alice", "Two");
student2.inputNewGrade(8);
student2.inputNewGrade(9);
student2.inputNewGrade(7);

let student3 = new Student("Bob", "Three");
student3.inputNewGrade(9);
student3.inputNewGrade(9);
student3.inputNewGrade(9);

let array = [student1, student2, student3];
let sum = 0;
array.forEach(element => {
    let grade = element.computeAverageGrade();
    console.log("Average Grade of "+ element.firstName + " " + element.lastName+ ": "+ grade);// 7, 8, 9
    sum = sum + grade;
});
console.log("Average Grade of All Students: "+sum/array.length);//8


console.log("==================================Question 3: ");
/** Question 3 - add sort() method */
Student.prototype.compare = function(another) {
    if (this.firstName < another.firstName) {
        return -1;
    } else if (this.firstName > another.firstName) {
        return 1;
    } else {
        return 0;
    }
}
Array.prototype.sortX = Array.prototype.sort;//borrow
array.sortX(
    (a,b)=> {
       return a.compare(b); //used Student.prototype.compare above
    }
)
console.log(array);
console.log("==================================Question 4: ");

/** Question 4 - Implementation Inheritance by using Constructor Function */
function Animal(name, speed) {
    this.name=name;
    this.speed=speed;
}
Animal.prototype.run = function(s) {
    this.speed += s;
}
Animal.compareBySpeed = function(a1, a2) {
    if (a1.speed < a2.speed) {
        return -1;
    } else if (a1.speed > a2.speed) {
        return 1;
    } else {
        return 0;
    }
}
function Rabbit(name, speed) {
    this.name=name;
    this.speed=speed;
}
Rabbit.prototype.hide = function() {
    console.log("hides");
}
Object.setPrototypeOf(Rabbit, Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);

//create instances
let rabbit1 = new Rabbit("Rabbit Rose", 20);
let rabbit2 = new Rabbit("Rabbit Carrot", 25);
let animal1 = new Animal("ZDogie", 15);

rabbit1.run(1);//increase 1 unit of speed
console.log(rabbit1.speed);//21
rabbit1.hide();
rabbit2.run(1);//increase 1 unit of speed
console.log(rabbit2.speed);//26
rabbit2.hide();

let animals = [rabbit1, rabbit2, animal1];
//sort by speed by using Comparator of Animal.compareBySpeed
animals.sort(Animal.compareBySpeed);
console.log("animals after sorted by speed: ");
console.log(animals);