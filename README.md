# HR-management-system

## In the previous lab i do the code like constructor but i change somethings :

### In the main function i add (this) to name parameter of the objects like this:

 function Employee(fullname, department, level, image) {

    this.id = generateID();
    this.name = fullname;
    this.dept = department;
    this.level = level;
    this.image = image;
    this.salary = getSalary(level);
}

### And when i creat a new objects must add (new) before the function name like this :

let employee0 = new Employee("Ghazi Samer", "Administration", "Senior",);
let employee1 = new Employee("Lana Ali", "Finance", "Senior");
let employee2 = new Employee("Tamara Ayoub", "Marketing", "Senior");
let employee3 = new Employee("Safi Walid", "Administration", "Mid-Senior");
let employee4 = new Employee("Omar Zaid", "Development", "Senior");
let employee5 = new Employee("Rana Saleh", "Development	", "Junior");
let employee6 = new Employee("Hadi Ahmad", "Finance	", "Mid-Senior");

### After that i add the department section for each object like this :


document.write(<p> Employee name: ${employee0.name} </p>   <p>Department: ${employee0.dept} </p>  <p>Employee salary: ${employee0.salary} </p>  );
document.write(</br>);
document.write(<p> Employee name: ${employee1.name} </p>   <p>Department: ${employee1.dept} </p>  <p>Employee salary: ${employee1.salary} </p>  );
document.write(</br>);
document.write(<p> Employee name: ${employee2.name} </p>   <p>Department: ${employee2.dept} </p>  <p>Employee salary: ${employee2.salary} </p>  );
document.write(</br>);
document.write(<p> Employee name: ${employee3.name} </p>   <p>Department: ${employee3.dept} </p>  <p>Employee salary: ${employee3.salary} </p>  );
document.write(</br>);
document.write(<p> Employee name: ${employee4.name} </p>   <p>Department: ${employee4.dept} </p>  <p>Employee salary: ${employee4.salary} </p>  );
document.write(</br>);
document.write(<p> Employee name: ${employee5.name} </p>   <p>Department: ${employee5.dept} </p>  <p>Employee salary: ${employee5.salary} </p>  );
document.write(</br>);
document.write(<p> Employee name: ${employee6.name} </p>   <p>Department: ${employee6.dept} </p>  <p>Employee salary: ${employee6.salary} </p>  );
document.write(</br>);