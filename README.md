# HR-management-system

## I do the work by 1 day but make some changes in lab day:

function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


function getSalary(level) {
    let salary;
    if (level === "Senior") {
        salary = getRandomInt(1500, 2000)
    } else if (level === "Mid-Senior") {
        salary = getRandomInt(1000, 1500)
    } else if (level === "Junior") {
        salary = getRandomInt(500, 1000)
    }
    return (salary - salary * 0.075)
}
function Employee(fullname, department, level, image) {
    let x = {
        id: Math.random() * 9999,
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


## After that i change rander method from consol . log to doucmant.writ like this :
document.write(`${employee0.name} </br> ${employee0.salary}  </br> `);
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

### after that i chage also the random number method for ID from:

getRandomInt(min, max)

### to be like this :
 Math.random() * 9999,

# thats all ^_^ 
