// Example 1
// class Vehicle{
//     constructor(companyName,model){
//         this.companyName=companyName
//         this.model=model
//     }

// }
// class car extends Vehicle{
//     det(){
//         console.log("car company Name:",this.companyName)
//         console.log("car Model:",this.model)
//     }
// }
// let Vehicle1=new car("TOYOTA","Innova")
// Vehicle1.det()

// Example 2
// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }
// class Student extends Person{
//     constructor(name,age,course){
//         super(name,age)
//         this.course=course
//        }
//     display(){
//         console.log("Student Name:",this.name)
//         console.log("Student age:",this.age)
//         console.log("Student Course:",this.course)
//     }
    
// }
// let Student1=new Student("nithish",21,"FSD")
// Student1.display()

// Example 3
// class Employee{
//     constructor(fname,age){
//         this.fname=fname
//         this.age=age
//     }
//     employee(){
//         console.log("EMployee Name",this.fname)
//         console.log("Employee Age:",this.age)
//     }
// }
// class Manager extends Employee{
//     constructor(name,age,role){
//         super(name,age)
//         this.role=role
//     }
//     manager(){
//         super.employee()
//         console.log("Employee Role:",this.role)
//     }
// }
// let Emp=new Manager("nithish",21,"Manager")
// Emp.manager()

// Example 4
// class BankAcccount{
//     constructor(accountHolder,balance){
//         this.accountHolder=accountHolder
//         this.balance=balance
//     }
//     display(){
//         console.log("accountHolderName",this.accountHolder)
//         console.log("balance",this.balance)

//     }
// }
// class SavingsAccount extends BankAcccount{
//     constructor(accountHolder,balance,interestRate){
//         super(accountHolder,balance)
//         this.interestRate=interestRate

//     }
//     display(){
//         super.display()
//         console.log("interestRate",this.interestRate)
//     }

// }
// let bank=new SavingsAccount("nithish",12345,"20%")
// bank.display()
