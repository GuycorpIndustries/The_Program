class Employee {
    constructor(_firstName, _middleName, _lastName, _phoneNumber, _email) {
        this.firstName = _firstName;
        this.middleName = _middleName;
        this.lastName = _lastName;
        this.phoneNumber = _phoneNumber;
        this.email = _email;
    }
}

class ProfileCard {
    static displayEmployees() {
        const StoredEmployee = [
          {
            _firstName: "Christopher",
            _middleName: "Thomas",
            _lastName: "Guy",
            _phoneNumber: "587 579 2490",
            _email: "guycorpindustries@gmail.com",
          },
          {
            _firstName: "Chris",
            _middleName: "T",
            _lastName: "Guy",
            _phoneNumber: "911 411 2490",
            _email: "guycorpindustries@outlook.com",
          },
          {
            _firstName: "Topher",
            _middleName: "Mas",
            _lastName: "Loco",
            _phoneNumber: "587 579 5150",
            _email: "clark_griswald@outlook.com",
          },
        ];

        const employees = StoredEmployee;

        employees.forEach((employee) => ProfileCard.addEmployeeToList(employee));
    }

    static addEmployeeToList(employee) {
        const list = document.querySelector('#employee-list');

        const row = document.createElement('tr');

        row.innerHTML =`
        <td>${employee._firstName}</td>
        <td>${employee._middleName}</td>
        <td>${employee._lastName}</td>
        <td>${employee._phoneNumber}</td>
        <td>${employee._email}</td>
        <td><a class="delete" href="#">X</a></td>
        `;

        list.appendChild(row);
    }
}
 document.addEventListener('DOMContentLoaded', ProfileCard.displayEmployees)



// console.log(ProfileCard);