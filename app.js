'use strict'

function generateRandom(min, max) {

    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor(rand * difference);

    rand = rand + min;

    return rand;
}


function getSalary(level) {
    let salary;
    if (level === "Senior") {
        salary = Math.floor(generateRandom(1500, 2000))
    } else if (level === "Mid-Senior") {
        salary = Math.floor(generateRandom(1000, 1500))
    } else if (level === "Junior") {
        salary = Math.floor(generateRandom(500, 1000))
    }
    return (salary - salary * 0.075)
}

function generateID() {
    let id = Math.floor(generateRandom(1000, 9999))
    return id;
}

function Employee(fullname, department, level, image) {

    this.id = generateID();
    this.name = fullname;
    this.dept = department;
    this.level = level;
    this.image = image;
    this.salary = getSalary(level);
}

let employee0 = new Employee("Ghazi Samer", "Administration", "Senior",);
let employee1 = new Employee("Lana Ali", "Finance", "Senior");
let employee2 = new Employee("Tamara Ayoub", "Marketing", "Senior");
let employee3 = new Employee("Safi Walid", "Administration", "Mid-Senior");
let employee4 = new Employee("Omar Zaid", "Development", "Senior");
let employee5 = new Employee("Rana Saleh", "Development	", "Junior");
let employee6 = new Employee("Hadi Ahmad", "Finance	", "Mid-Senior");

Employee.prototype.randerEmployee = function () {
    document.write(`<p> Employee name: ${this.name} </p>`);
    document.write(`<p> Employee department: ${this.dept} </p>`);
    document.write(`<p> Employee salary: ${this.salary} </p>`);
    document.write(`</br>`);
}


employee0.randerEmployee();
employee1.randerEmployee();
employee2.randerEmployee();
employee3.randerEmployee();
employee4.randerEmployee();
employee5.randerEmployee();
employee6.randerEmployee();



// document.write(`<p> Employee name: ${employee0.name} </p>   <p>Department: ${employee0.dept} </p>  <p>Employee salary: ${employee0.salary} </p>  `);
// document.write(`</br>`);
// document.write(`<p> Employee name: ${employee1.name} </p>   <p>Department: ${employee1.dept} </p>  <p>Employee salary: ${employee1.salary} </p>  `);
// document.write(`</br>`);
// document.write(`<p> Employee name: ${employee2.name} </p>   <p>Department: ${employee2.dept} </p>  <p>Employee salary: ${employee2.salary} </p>  `);
// document.write(`</br>`);
// document.write(`<p> Employee name: ${employee3.name} </p>   <p>Department: ${employee3.dept} </p>  <p>Employee salary: ${employee3.salary} </p>  `);
// document.write(`</br>`);
// document.write(`<p> Employee name: ${employee4.name} </p>   <p>Department: ${employee4.dept} </p>  <p>Employee salary: ${employee4.salary} </p>  `);
// document.write(`</br>`);
// document.write(`<p> Employee name: ${employee5.name} </p>   <p>Department: ${employee5.dept} </p>  <p>Employee salary: ${employee5.salary} </p>  `);
// document.write(`</br>`);
// document.write(`<p> Employee name: ${employee6.name} </p>   <p>Department: ${employee6.dept} </p>  <p>Employee salary: ${employee6.salary} </p>  `);
// document.write(`</br>`);



