# HR-management-system

# The main change in this lab :
We did not use any of documant.write()
and we add the class for the container bu useing Js
and i learned how to contain all of the element i want inside the class or the container by using Js also like this :

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

## In this lab i do the styling for the empolyee card by using JS :
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
 

