class Employee {
  // Set up
  constructor(
    _firstName,
    _middleName,
    _lastName,
    _month,
    _day,
    _year,
    _sin,
    _phoneNumber,
    _email,
    _ahc,
    _address
  ) {
    console.log("A New Employee Object is Being Created");
    this.firstName = _firstName;
    this.middleName = _middleName;
    this.lastName = _lastName;
    this.month = _month;
    this.day = _day;
    this.year = _year;
    this.sin = _sin;
    this.phoneNumber = _phoneNumber;
    this.email = _email;
    this.ahc = _ahc;
  }
}
const address = {
  street: "",
}

class Technician {}

class Staff {}

class OfficeAd {}

class Developer {}

// Create a new Object using the Class Template
let newE = new Employee();
