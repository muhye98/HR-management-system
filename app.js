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
function Employee(fullname, department, level, image) {
    let x = {
        id: Math.floor(generateRandom(1000, 9999)),
        name: fullname,
        dept: department,
        level: level,
        image: image,
        salary: getSalary(level)
    }
    return x;
}

let employee0 = Employee("Ghazi Samer", "Administration", "Senior",);
let employee1 = Employee("Lana Ali", "Finance", "Senior");
let employee2 = Employee("Tamara Ayoub", "Marketing", "Senior");
let employee3 = Employee("Safi Walid", "Administration", "Mid-Senior");
let employee4 = Employee("Omar Zaid", "Development", "Senior");
let employee5 = Employee("Rana Saleh", "Development	", "Junior");
let employee6 = Employee("Hadi Ahmad", "Finance	", "Mid-Senior");


document.write(`${employee0.name} </br> ${employee0.salary}  </br> ${employee0.id}  </br> `); //this ID just to test it :)
document.write(`</br>`)
document.write(`${employee1.name} </br> ${employee1.salary}  </br> `);
document.write(`</br>`)
document.write(`${employee2.name} </br> ${employee2.salary}  </br> `);
document.write(`</br>`)
document.write(`${employee3.name} </br> ${employee3.salary}  </br> `);
document.write(`</br>`)
document.write(`${employee4.name} </br> ${employee4.salary}  </br> `);
document.write(`</br>`)
document.write(`${employee5.name} </br> ${employee5.salary}  </br> `);
document.write(`</br>`)
document.write(`${employee6.name} </br> ${employee6.salary}  </br> `);



