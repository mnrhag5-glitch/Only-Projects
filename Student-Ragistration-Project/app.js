// let students = JSON.parse(localStorage.getItem("students")) || [];

// const form = document.querySelector(".form");
// const nameInput = document.querySelector(".name");
// const idInput = document.querySelector(".Id");
// const emailInput = document.querySelector(".email");
// const phoneInput = document.querySelector(".number");
// const tableBody = document.querySelector(".tableBody");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (
//         nameInput.value === "" ||
//         idInput.value === "" ||
//         emailInput.value === "" ||
//         phoneInput.value === ""
//     ) {
//         alert("Fill all fields");
//         return;     // return matlab function ko ynhi rok do.
//     }

//     students.push({
//         name: nameInput.value,  // input ke andr jo likha hai use lene ke liye use hota hai.
//         id: idInput.value,
//         email: emailInput.value,
//         phone: phoneInput.value
//     });

//     localStorage.setItem(
//         "students",
//         JSON.stringify(students)
//     );

//     showStudents();
//     form.reset();
// });

// function showStudents() {

//     tableBody.innerHTML = "";    // isliye remove kiya kuki jab dusra nya data add hoga to purana data remove jo jaye
//     //lein iska mtln ye nhi ki pehla data remove hi ho jayga vo [ ] me store rehta hai
// //o hmne use dobara cll kiya hai niche..


//     for (let student of students) {

//         tableBody.innerHTML += ` 
//         <tr>  
//             <td>${student.name}</td>
//             <td>${student.id}</td>
//             <td>${student.email}</td>
//             <td>${student.phone}</td>
//         </tr> 
//         `;
//     }                                     
// }

// showStudents();












//-----------------------------again try--------------------------------



// let students = JSON.parse(localStorage.getItem("students")) || [];

// let form = document.querySelector(".form")
// let name = document.querySelector(".name")
// let id = document.querySelector(".id")
// let email = document.querySelector(".email")
// let number = document.querySelector(".number")
// let table = document.querySelector(".tableBody")


// form.addEventListener('submit',(e)=>{
//      e.preventDefault();
//    if(name.value==="" || id.value==="" || email.value==="" || number.value==="")
//    {alert("Fill all the information") 
//     return 
// }

// students.push({
//     name:name.value,
//     id:id.value,
//     email:email.value,
//     number:number.value})



// localStorage.setItem("students",JSON.stringify(students));
// studentList();
// form.reset();
// })



// function studentList(){
//     table.innerHTML = ""
// for(let student of students){
//     table.innerHTML+=`
//     <tr>
//     <td>${student.name}</td>
//     <td>${student.id}</td>
//     <td>${student.email}</td>
//     <td>${student.number}</td>
//     </tr>` }}

//     studentList();







//--------------------------again try------------------------------------


// let students = JSON.parse(localStorage.getItem("students")) || []
// //let students = []

// let form = document.querySelector(".form")
// let name = document.querySelector(".name")
// let id = document.querySelector(".id")
// let email = document.querySelector(".email")
// let number= document.querySelector(".number")
// let table= document.querySelector(".tableBody")


// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
// if(name.value==="" || id.value==="" ||email.value===""||number.value===""){
//     alert("fill all information")
// return }

//     console.log("All Done 👍");



// students.push({
//     name:name.value,
//     id:id.value,
//     email:email.value,
//     number:number.value
// })

// localStorage.setItem("students",JSON.stringify(students))
// showData();
// form.reset();
// })


// function showData(){
//     table.innerHTML = "";

//     for(let student of students){
//         table.innerHTML+= `
//         <tr>
//         <td>${student.name}     </td>  
//            <td> ${student.id} </td>
//            <td> ${student.email}</td>
//            <td> ${student.number}</td>
//         </tr>`}}
//     showData()









//----------------------again try-----------------------------



let students = JSON.parse(localStorage.getItem("students")) || [] // storge bnai
// let students = []
let form = document.querySelector(".form")
let name = document.querySelector(".name")
let id = document.querySelector(".id")
let email = document.querySelector(".email")
let number = document.querySelector(".number")
let table = document.querySelector(".tableBody")


form.addEventListener('submit',(e)=>{   //event chlaya
    e.preventDefault();    // reload roka

    if(name.value=="" || id.value=="" ||email.value==""||number.value==""){
        alert("fill all the information")      // condition + alert diya
        return;   // condition ko yhi stop krwa do
    }

  students.push({           // ye studenet [] me store ho jayenge
    name:name.value,
    id:id.value,
    email:email.value,
    number:number.value
  })

  localStorage.setItem("students",JSON.stringify(students))
  showData();
  form.reset();
})


function showData(){
    table.innerHTML="";

for(let i = 0; i < students.length; i++){  //kuki is loop me idex milta hai isliye use hua.
    let student = students[i];
        table.innerHTML+=`
        <tr>
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.email}</td>
        <td>${student.number}</td>
        <td>  <button onclick="deleteStudent(${i})">Delete</button></td>
        <td>  <button onclick="editStudent(${i})">edit</button></td>

        </tr>`}}

        function deleteStudent(index) {

    students.splice(index, 1);

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    showData();
}
    


        function editStudent(index) {

    students.splice(index, 0,'');

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    showData();
}
    





