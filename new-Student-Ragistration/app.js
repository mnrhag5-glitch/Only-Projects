// let name = document.querySelector("#name")
// let age = document.querySelector("#age")
// let cource = document.querySelector("#course")
// let btn = document.querySelector("#btn")
// let ul1 = document.querySelector("#list1")
// let ul2 = document.querySelector("#list2")
// let ul3 = document.querySelector("#list3")


// name.addEventListener("input",()=>{
//     ul1.innerText = name.value
// })



// age.addEventListener("input",()=>{
//     ul2.innerText = age.value
// })


// cource.addEventListener("input",()=>{
//     ul3.innerText = cource.value
// })


//----------------Data setup kro pehle-------------


let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = null;


//------------------Add + Update Student-----------------------------


btn.addEventListener("click", () => {
    let student = {
        name: name.value,
        age: age.value,
        course: course.value
    };

    if(editIndex === null){
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = null;
    }

    saveData();
    renderUI();
    clearInputs();
});


//-------------Render UI--------------------------------------

const ul = document.querySelector("#list1")

function renderUI(){
    ul.innerHTML = "";

    students.forEach((s, index) => {
        ul.innerHTML += `
        <li>
            ${s.name} - ${s.age} - ${s.course}
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
        </li>
        `;
    });
}




function editStudent(index){
    let s = students[index];

    name.value = s.name;
    age.value = s.age;
    course.value = s.course;

    editIndex = index;
}




function deleteStudent(index){
    students.splice(index, 1);
    saveData();
    renderUI();
}



function saveData(){
    localStorage.setItem("students", JSON.stringify(students));
}



function clearInputs(){
    name.value = "";
    age.value = "";
    course.value = "";
}

renderUI();