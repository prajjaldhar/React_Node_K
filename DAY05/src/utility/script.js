function Student(name, sal) {
  this.name = name;
  this.sal = sal;
  function details() {
    console.log(name);
    console.log(sal);
  };
}
const s1 = new Student("Prajjal", 5646);
console.log(s1.details());
