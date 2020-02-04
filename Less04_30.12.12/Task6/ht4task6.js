//Task 6

//Create object group, maybe we need to put variable instead of constant

let group = {
    name: "Our group",
    students: 18,
    department: "New technology"
};

//Create array with lecture halls

let auditoryrooms = [
    {id: 0, name: "Innovative", seats: 18, department: "New technology"},
    {id: 1, name: "Radio", seats: 20, department: "New technology"},
    {id: 2, name: "Information", seats: 15, department: "New technology"},
    {id: 3, name: "Equipment", seats: 30, department: "New technology"},
    {id: 4, name: "Ukraine", seats: 25, department: "LingDepartment"},
    {id: 5, name: "English", seats: 20, department: "LingDepartment"},
    {id: 6, name: "Speaking", seats: 25, department: "LingDepartment"},
    {id: 7, name: "Science", seats: 30, department: "PhysDepartment"},
    {id: 8, name: "Technology", seats: 30, department: "PhysDepartment"},
    {id: 9, name: "Innovation", seats: 15, department: "PhysDepartment"}
];

//Print the name of all lecture halls (function)

function nameauditoryrooms() {
    alert("Print the name of the auditoryrooms");
    for (let id in auditoryrooms) {
        alert( "Name: " + auditoryrooms[id].name );
        console.log( "Variable id: " + id + ", Id: " + auditoryrooms[id].id + ", Name: " + auditoryrooms[id].name + 
        ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department);             
    }
}

// nameauditoryrooms();

//Print lecture halls for defined department (function)

function nameauditoryroomsbelongtodepartment() {
    alert("Print the name of the lecture halls to defined department");
    let printdepartment = prompt( "Please, write the name of the department", "New technology, LingDepartment, PhysDepartment" ); 
    console.log( 'Department name is printed by user:' + ' ' + printdepartment );
    alert( 'You typed deparment:' + ' ' + printdepartment );
    for (let id in auditoryrooms) {
        if (printdepartment === auditoryrooms[id].department) { 
//          console.log( 'Department name is printed by user:' + printdepartment );
            alert( "Name: " + auditoryrooms[id].name + ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department); //as list
            console.log( "Variable id: " + id + ", Id: " + auditoryrooms[id].id + ", Name: " + auditoryrooms[id].name + 
            ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department);   
        } else if (printdepartment == "PhysDepartment" || printdepartment == "LingDepartment" || printdepartment == "New technology") {
            console.log( "Error! Your printed department: " + printdepartment + ". There is department: " + auditoryrooms[id].department );
        } else { 
            if ( id == 0 ) {
            console.log( "Error! Your have typed incorrect department or department doesn't exist: " + printdepartment ); 
            alert("Error! Your have typed incorrect department or department doesn't exist.");
            }
        }
    }
}

// nameauditoryroomsbelongtodepartment();

//Print lecture halls for group (function)

function nameauditoryroomsforgroup() {
    alert("Print the names of the lecture hall for group");
    group.name = prompt( "Please, write the name of the group", "undefinded" );
    group.students = prompt( "Please, write how many students in the group", "undefinded" );
    group.department = prompt( "Please, write the department of the group", "New technology, LingDepartment, PhysDepartment" );
    name = group.name, students = group.students, department = group.department;
    console.log( 'You have printed next properties of the group. ' + 
    'Name: ' + name + ', Students: ' + students + ', Department: ' + department );
    alert ('You have printed next properties of the group. ' + 
    'Name: ' + name + ', Students: ' + students + ', Department: ' + department );
    for (let id in auditoryrooms) {
        if (department === auditoryrooms[id].department && students <= auditoryrooms[id].seats) { 
//          console.log(students);
            alert("Name: " + auditoryrooms[id].name + ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department); // as list
            console.log("Variable id: " + id + ", Id: " + auditoryrooms[id].id + ", Name: " + auditoryrooms[id].name + 
            ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department);   
        } else if (students <= auditoryrooms[id].seats && (department === "PhysDepartment" || department === "LingDepartment" || department === "New technology")) {
            alert("Other departments: " + "Name: " + auditoryrooms[id].name + ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department); 
            console.log("Other departments: " + "Variable id: " + id + ", Name: " + auditoryrooms[id].name + ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department);
        } else {
            console.log("Absent! Your printed quantity: " + students + ". There are seats: " + auditoryrooms[id].seats + ". Or " +
            "Error! Maybe your have typed incorrect department or department doesn't exist. You printed: " + department);
           }
        }
    }

// nameauditoryroomsforgroup();

//Print lecture halls in seats order (function)

function nameauditoryinseatsorder() {
    alert("Print the name of the lecture halls in seats order");
    for (let id in auditoryrooms) {
        auditoryrooms.sort(function(a, b) {
            return a.seats-b.seats;
        });
        alert( "Name: " + auditoryrooms[id].name + ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department );
        console.log( "Variable id: " + id + ", Id: " + auditoryrooms[id].id + ", Name: " + auditoryrooms[id].name + 
        ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department );
    }
}

// nameauditoryinseatsorder ();

//Print lecture halls in alphabet order (function)

function nameauditoryinalphabetorder() {
    alert("Print the name of the lecture halls in alphabet order");
    let auditorynames = [];
    for (let id in auditoryrooms) {
        console.log( "Variable id: " + id + ", Id: " + auditoryrooms[id].id + ", Name: " + auditoryrooms[id].name + 
        ", Seats: " + auditoryrooms[id].seats + ", Department: " + auditoryrooms[id].department);
        console.log("Auditory name will be added to array: " + auditoryrooms[id].name);
        console.log(auditorynames.push(auditoryrooms[id].name));
    }
    console.log("Auditory names not sorted: " + auditorynames);
    alert("Auditory names not sorted: " + auditorynames);
    auditorynames.sort();
    console.log("Auditory names in alphabet order: " + auditorynames);
    alert("Auditory names in alphabet order: " + auditorynames); // as list 
}

// nameauditoryinalphabetorder();