// search.js

const students = [
  { id: 1, name: "Jolivet", age: 24 },
  { id: 2, name: "Aline", age: 21 },
  { id: 3, name: "Kevin", age: 28 },
  { id: 4, name: "Sarah", age: 19 }
];

export const searchById = (id) =>
  students.find(student => student.id === id) || "Student not found";


export const searchByName = (name) => {
  const lowerName = name.toLowerCase();
  const found = students.find(student => student.name.toLowerCase() === lowerName);
  return found || "No student with that name";
};

export const filterByAge = (minAge) =>
  students.filter(student => student.age >= minAge);
