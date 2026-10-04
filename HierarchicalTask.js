// // Examples 1
// class Appliance{
//     appliance(){
//         console.log("Appliance is Switched on")
//     }
// }

// class WashingMachine extends Appliance{
//     startMode(){
//         console.log("Select the Washing Cycle")   
//     }
// }

// class Refrigerator extends Appliance{
//     startMode(){
//         console.log("Select the coooling method")
//     }
// }
// let Ref=new Refrigerator()
// console.log("Refrigerator")
// Ref.appliance() //method from the super class
// Ref.startMode() //method from the Sub/Refrigerator child class

// console.log("===================================================")
// let Wash=new WashingMachine()
// console.log("WashingMachine")
// Wash.appliance()
// Wash.startMode()

// Examples 2
// class Account {
//     account(){
//         console.log("Account Status:Account is Active")
//     }
// }
// class SavingAccount extends Account{
//     sav(){
//         console.log("Account Type:Savings")
//         console.log("Deposit the money and Update the account")
//     }
// }

// class CurrentAccount extends Account{
//     current()
//     {
//         console.log("Account Type:Current")
//         console.log("Deposit the  money and Update the Account")

//     }
// }
// let current=CurrentAccount()
// current.account()//from the super class
// current.current()//from the CurrentsAccount Sub class

// let savings=SavingAccount()
// savings.account() //from the super class
// savings.sav() //from the SavingsAccount Sub class

// Example 3
// class Product{
//     constructor(name,price){
//         this.name=name
//         this.price=price
//     }
// }

// class  ElectronicProduct extends Product{
//     constructor(name,price,warranty){
//         super(name,price)
//         this.warranty=warranty
        
//     }
//     display(){
//         console.log("Product Name:",this.name)
//         console.log("Product Price:",this.price)
//         console.log("Warranty:",this.warranty)
//     }
// }
// class ClothingProduct extends Product{
//     constructor(name,price,size){
//         super(name,price)
//         this.size=size
//     }
//     display(){
//         console.log("===========Clothing===========")
//         console.log("Cloth Name:",this.name)
//         console.log("Cloth Price:",this.price)
//         console.log("Cloth size:",this.size)
//     }
// }
// let ele=new ElectronicProduct("Laptop",1234,"1Year")
// ele.display()

// let cloth=new ClothingProduct("Shirt",1234,"M")
// cloth.display()

// Example 4
// class User{
//     constructor(userName,email){
//         this.userName=userName
//         this.email=email
//     }
//     display(){
//         console.log("Username:",this.userName)
//         console.log("Email:",this.email)
//     }
// }
// class Customer extends User{
//     constructor(userName,email,orderCount){
//         super(userName,email)
//         this.orderCount=orderCount
//     }
//     display(){
//         super.display()
//         console.log("OrderCount:",this.orderCount)

//     }
// }

// class Admin extends User{
//     constructor(userName,email,accessLevel){
//         super(userName,email)
//         this.accessLevel=accessLevel
//     }
//     display(){
//         super.display()
//         console.log("accesslevel:",this.accessLevel)
//     }
// }
// let ad=new Admin("Hero@123","Hero@gmail.com","level 1")
// ad.display()

// let customer=new Customer("Hero@123","Hero@gmail.com",3)
// customer.display()




