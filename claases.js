//a class in js is a prototype/template of an  object. classes re used to create objects

class Employee{
    //inside a class a constructor methid isinitialized to setup class varibales.s
    //class variables are variables used and accessed from within the class

    constructor(name, employeeId, jobGroup, salary, department, gender){
        //the parameters places in the constructor curved brackets will be passed to an object during creation as arguments
        //the class variables must be intialized
        this.name = name;
        this.employeeId = employeeId;
        this.jobGroup = jobGroup;
        this.salary = salary;
        this.department = department;
        this.gender = gender;        

    }

    getIncomeTax(){
        let incomeTax = this.salary * 0.16;
        return incomeTax;
    }

    getNetSalary(){
        let payee =this.getIncomeTax();
        let netSalo = this.salary - payee;
        return netSalo;
    }

    changeDepartment(newDepartment){
        this.department = newDepartment;
        return this.name+" has been moved to "+this.department;
    }

    getPromotion(newJobGroup, newSalary){
        this.jobGroup = newJobGroup;
        this.salary = newSalary;
        return this.name+ " has been promoted to job group - "+this.jobGroup;
    }


}

//create an object of the Employee class
emp1 = new Employee("Sam", 234, 'A', 2500, "IT", "male");
// console.log(emp1);
// console.log(emp1.getIncomeTax());
// console.log(emp1.getNetSalary());
// console.log(emp1.changeDepartment("Finance"));
// console.log(emp1);
// console.log(emp1.getPromotion('B', 3500));
// console.log(emp1);

//this.jobGroup = "";
//To change class properties after they have been initialized you use the prototype keyword.

// emp1.prototype.doE = "23/03/2018";
// console.log(emp1);