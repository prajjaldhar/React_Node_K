let fullname;
let age;
function Student(fullname, age) {
  this.fullname = fullname;
  this.age = age;
}
let obj1 = new Student("Prajjal", 20);
console.log(obj1.fullname);
