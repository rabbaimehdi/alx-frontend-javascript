interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstName: 'Student1',
  lastName: 'Student1',
  age: 20,
  location: 'Spain',
};

const Student2: Student = {
  firstName: 'Student2',
  lastName: 'Student2',
  age: 21,
  location: 'Italy',
};

const studentsList: Array<Student> = [Student1, Student2];

var myTable = document.createElement('table');
for (let student of studentsList) {
  var myRow = document.createElement('tr');

  var myCell1 = document.createElement('td');
  var myCell2 = document.createElement('td');
  var firstName_ = document.createTextNode(student.firstName);
  var location_ = document.createTextNode(student.location);
  myTable.appendChild(myRow);

  myRow.appendChild(myCell1);
  myRow.appendChild(myCell2);
  myCell1.appendChild(firstName_);
  myCell2.appendChild(location_);
  document.body.appendChild(myTable);
}
