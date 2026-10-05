// class Flight{
//     static airline="Indigo"
//     static totalFlights="23"
//     constructor(flightNumber,source,destination,passengerName,seatNumber,ticketPrice){
//         this.flightNumber=flightNumber
//         this.source=source
//         this.destination=destination
//         this.passengerName=passengerName
//         this.seatNumber=seatNumber
//         this.ticketPrice=ticketPrice
//     }
//     display(){
//         console.log("Airline Name:",Flight.airline)
//         console.log("Number of Flights:",Flight.totalFlights)
//         console.log("Flight Number:",this.flightNumber)
//         console.log("Seat NUmber:",this.seatNumber)
//         console.log("Destination:",this.destination)
//         console.log("passengerName:",this.passengerName)
//         console.log("Flight Number:",this.flightNumber)
//         console.log("Source:",this.source)
//         console.log("TIcket Price:",this.ticketPrice)
//     }
// }
// let flight=new Flight(456,"Makemytrip","mumbai","Hero",345,3000)
// flight.display()


// example 2
// class Hospital {

//     static hospitalName = "Apollo"
//     static totalDoctors = 50

//     constructor(patientId, patientName, age, disease, doctorName, roomNumber) {
//         this.patientId = patientId
//         this.patientName = patientName
//         this.age = age
//         this.disease = disease
//         this.doctorName = doctorName
//         this.roomNumber = roomNumber
//     }

//     display() {
//         console.log("Hospital Name:", Hospital.hospitalName)
//         console.log("Total Doctors:", Hospital.totalDoctors)
//         console.log("Patient ID:", this.patientId)
//         console.log("Patient Name:", this.patientName)
//         console.log("Age:", this.age)
//         console.log("Disease:", this.disease)
//         console.log("Doctor Name:", this.doctorName)
//         console.log("Room Number:", this.roomNumber)
//     }
// }

// let patient1 = new Hospital(101, "Rahul", 25, "Fever", "Dr. Kumar", 205)
// patient1.display()

// class OnlineCourse {

//     static platform = "Innomatics FSD"
//     static totalCourses = 2500

//     constructor(courseId, courseName, studentName, duration, price, instructor) {
//         this.courseId = courseId
//         this.courseName = courseName
//         this.studentName = studentName
//         this.duration = duration
//         this.price = price
//         this.instructor = instructor
//     }

//     display() {
//         console.log("Platform:", OnlineCourse.platform)
//         console.log("Total Courses:", OnlineCourse.totalCourses)
//         console.log("Course ID:", this.courseId)
//         console.log("Course Name:", this.courseName)
//         console.log("Student Name:", this.studentName)
//         console.log("Duration:", this.duration)
//         console.log("Price:", this.price)
//         console.log("Instructor:", this.instructor)
//     }
// }

// let course1 = new OnlineCourse(101,"Python Full Stack","Hero","6 Months",15000,"Vineeth SIR")
// course1.display()