// Person
function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function() {
    console.log("My name is " + this.name);
}

// Student
function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getGrade = function() {
    console.log("My grade is " + this.grade);
}

// Teacher 
function Teacher(name, age, lecture) {
    Person.call(this, name);
    this.age = age;
    this.lecture = lecture;
}
 
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.myLecture = function() {
    console.log("I teach " + this.lecture);
}

Teacher.prototype.myAge = function() {
    console.log("My age is: " + this.age);
}

let person1 = new Person("Ali");
person1.introduce();

let student1 = new Student("Mehmet", 100);
student1.introduce();
student1.getGrade();

let teacher1 = new Teacher("Ahmet", 35, "Math");
teacher1.introduce();
teacher1.myLecture();
teacher1.myAge();
