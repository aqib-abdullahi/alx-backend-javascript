interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const [student1, student2]: Student[] = [
    {
        firstName: "Aqib",
        lastName: "Abdullahi",
        age: 20,
        location: "Nigeria"
    },
    {
        firstName: "Joe",
        lastName: "Doe",
        age: 30,
        location: "Amsterdam"
    }
];

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const firstCellHead: HTMLTableCellElement = rowHead.insertCell(0);
const secondCellHead: HTMLTableCellElement = rowHead.insertCell(1);
firstCellHead.textContent = "firstName";
secondCellHead.textContent = "location";
table.appendChild(thead);

studentsList.forEach(student => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const firstCell: HTMLTableCellElement = row.insertCell(0);
    const secondCell: HTMLTableCellElement = row.insertCell(1);

    firstCell.textContent = student.firstName;
    secondCell.textContent = student.location;
});
table.appendChild(tbody);
document.body.appendChild(table);
