const courseList = [
    {code: "ACIT 1620", name: "Web Fundamental Technologies"},
    {code: "ACIT 1420", name: "Introduction to Systems Administration"},
    {code: "ACIT 1630", name: "Database System"},
];

let input;
do{
   input = prompt("Please enter a 4-digit number: "); 
} 
while (isNaN(input) || input.length !== 4);
    prompt("Course not found. Please enter another 4-digit number: ")

const courseCode = 'ACIT ${input}';

let course_found = false;
for (let i = 0; i < courseList.length; i++) {
    if (courseList[i].code === courseCode) {
        console.log('Yes I am taking the course: ${courselist[i].code - ${courselist[i].name}');
        course_found = true;
        break;
    }
}

if (!course_found) {
    courseList.push({code: courseCode, name: null});
    console.log(courseList);
}