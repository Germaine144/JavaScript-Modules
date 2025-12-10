const user = {
    firstName: "Jolivet",
    lastName: "shema",
    age: 24,
    city: "kigale",
    skills: [ "React", "Node.js", "UI/UX" ]
}

const { firstName, lastName, city, skills } = user;
console.log(`${firstName} ${lastName} lives in ${city} and is skilled in ${skills.join(' ')}`);
