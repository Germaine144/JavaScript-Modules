

import { searchById, searchByName, filterByAge } from "./search.js";

const student1 = searchById(1);
console.log(`Found student: ${typeof student1 === 'object' ? JSON.stringify(student1) : student1}`);

const studentInvalid = searchById(99);
console.log(studentInvalid);

const studentName = searchByName("joLiVeT");
console.log(`Found student by name: ${typeof studentName === 'object' ? JSON.stringify(studentName) : studentName}`);

const filteredStudents = filterByAge(21);
console.log(`Students aged 21 and above: ${JSON.stringify(filteredStudents)}`);
