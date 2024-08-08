
// Initialize students with dummy data
let students = [
    { name: 'Alice Johnson', age: 21 },
    { name: 'Bob Smith', age: 22 },
    { name: 'Charlie Brown', age: 20 },
    { name: 'Diana Prince', age: 23 },
    { name: 'Ethan Hunt', age: 22 },
    { name: 'Fiona Glenanne', age: 24 },
    { name: 'George Costanza', age: 21 },
    { name: 'Hannah Montana', age: 20 }
];

// Function to render the student list
const renderStudents = (students) => {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = ''; 

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${student.name} (${student.age} years old) <button data-index="${index}">Remove</button>`;
        studentList.appendChild(li);
    });
};

// Render the initial student list
renderStudents(students);




// Function to handle form submission
const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim(), 10);
    
    if (name && !isNaN(age)) {
        students.push({ name, age });
        nameInput.value = '';
        ageInput.value = '';
        renderStudents(students);
    }
};

// Function to handle student removal
const handleRemoveStudent = (index) => {
    console.log(index)
    students = students.filter((_, i) => i !== index);
    renderStudents(students);
};

// Function to handle sorting
const handleSortChange = (event) => {
    const sortBy = event.target.value;
    console.log(sortBy)
    students.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });
    renderStudents(students);
};

// Add event listeners
document.getElementById('student-form').addEventListener('submit', handleFormSubmit);
document.getElementById('sort').addEventListener('change', handleSortChange);

// Delegate remove button click
document.getElementById('student-list').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const index = event.target.getAttribute('data-index');
        handleRemoveStudent(parseInt(index, 10));
    }
});

// Initial render
renderStudents(students);

//===============================================================================================================================

// methods: flat(), flatMap(), find(), findIndex(), some(), and every().

/**
 * 1. flat()
   The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */

//    const nestedArray = [1,[2, [3, [4, 5]]] ];

//     console.log('Original Array:FLAT', nestedArray);

//     // Flatten the array to a depth of 2
//     const flatArray = nestedArray.flat(8);

//     console.log('Flattened Array:FLAT', flatArray);
//========================================================================================

/**
 * 2. flatMap()
   The flatMap() method first maps each element using a mapping function, then flattens the result into a new array.
 */

//    const students = [
//     { name: 'Alice', subjects: ['Math', 'English',["x"]] },
//     { name: 'Bob', subjects: ['Science'] },
//     { name: 'Charlie', subjects: ['Math', 'Art'] }
// ];




//     console.log('Original Students Array:FLATMAP', students);

//     // Get a flattened array of all subjects
//     const allSubjects = students.flatMap(student => student.subjects);

//     console.log('All Subjects:', allSubjects.flat());

/**
 * 3. find()
   The find() method returns the first element that satisfies the provided testing function.
 */

//    const students = [
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 22 },
//     { name: 'Y', age: 22 },
//     { name: 'Charlie', age: 22 }
// ];

// console.log('Original Students Array:FIND', students);

// // Find the student with age 22
// const student = students2.find(student => student.age === 22);

// console.log('Student with age 22:', student);


/**
 * 4. findIndex()
    The findIndex() method returns the index of the first element that satisfies the provided testing 
 */

    // console.log('Original Students Array: FINDINDEX', students2);

    // // Find the index of the student with age 20
    // const index = students2.findIndex(student => student.age === 22);
    
    // console.log('Index of student with age 20:', index);


/**
 * 5. some()
    The some() method tests whether at least one element in the array passes the provided function
 */

    // console.log('Original Students Array: EVERY', students);

    // // Check if there is any student older than 21
    // const OlderThan21 = students.every(student => student.age > 21);
    
    // console.log('Any student older than 21:', OlderThan21);

