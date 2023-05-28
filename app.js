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

let employee0 = new Employee("Ghazi Samer", "Administration", "Senior", "assest/Ghazi.jpg");
let employee1 = new Employee("Lana Ali", "Finance", "Senior", "assest/Lana.jpg");
let employee2 = new Employee("Tamara Ayoub", "Marketing", "Senior", "assest/Tamara.jpg");
let employee3 = new Employee("Safi Walid", "Administration", "Mid-Senior", "assest/Safi.jpg");
let employee4 = new Employee("Omar Zaid", "Development", "Senior", "assest/Omar.jpg");
let employee5 = new Employee("Rana Saleh", "Development	", "Junior", "assest/Rana.jpg");
let employee6 = new Employee("Hadi Ahmad", "Finance	", "Mid-Senior", "assest/Hadi.jpg");






Employee.prototype.randerEmployee = function () {
    let body = document.getElementsByClassName("employees-container")[0];
    let divE = document.createElement("div");
    body.appendChild(divE);

    let emplyeeImg = document.createElement("img");
    emplyeeImg.src = this.image;
    emplyeeImg.alt = this.name;
    divE.appendChild(emplyeeImg);

    let emplyeePar1 = document.createElement("p");
    emplyeePar1.textContent = ` EmplyeeName: ${this.name}  -ID: ${this.id} `;
    divE.appendChild(emplyeePar1);
    let emplyeePar2 = document.createElement("p");
    emplyeePar2.textContent = ` Department: ${this.dept}  -Level: ${this.level} `;
    divE.appendChild(emplyeePar2);
    let emplyeePar3 = document.createElement("p");
    emplyeePar3.textContent = ` ${this.salary} `;
    divE.appendChild(emplyeePar3);



    divE.style.border = "2px solid black"
    divE.style.borderRadius = "10px"
    divE.style.display = "flex"
    divE.style.flexDirection = "column"
    divE.style.alignItems = "center"
    divE.style.width = "330px"
    divE.style.height = "330px"
    divE.style.background = "#A4D0A4"
    divE.style.margin = " 0 auto"
    emplyeeImg.style.width = "270px"
    emplyeeImg.style.height = "220px"
    emplyeeImg.style.borderRadius = "10px"
    emplyeeImg.style.marginTop = "10px"
    emplyeePar1.style.marginTop = "20px"
}


employee0.randerEmployee();
employee1.randerEmployee();
employee2.randerEmployee();
employee3.randerEmployee();
employee4.randerEmployee();
employee5.randerEmployee();
employee6.randerEmployee();



// let emplyeePar = document.createElement("p");
//     emplyeePar.textContent = ` EmplyeeName: ${this.name}  -ID: ${this.id}  -Department: ${this.dept}  -Level: ${this.level}  -Salary: ${this.salary} `;
//     divE.appendChild(emplyeePar);


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

// let emplyId = document.createElement("p");
    // emplyId.textContent = ` ID: ${this.id}`;
    // divE.appendChild(emplyId);

    // let emplyDep = document.createElement("p");
    // emplyDep.textContent = ` Department: ${this.dept}`;
    // divE.appendChild(emplyDep);

    // let emplyLevl = document.createElement("p");
    // emplyLevl.textContent = ` Level: ${this.level}`;
    // divE.appendChild(emplyLevl);

    // let emplysalary = document.createElement("p");
    // emplysalary.textContent = ` Salary: ${this.salary}`;
    // divE.appendChild(emplysalary);

