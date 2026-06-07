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



// let students = JSON.parse(localStorage.getItem("students")) || [] // storge bnai
// // let students = []
// let editIndex = null;   //mtlb is variable me koi value nhi hai  ya khali hai
// let form = document.querySelector(".form")
// let name = document.querySelector(".name")
// let id = document.querySelector(".id")
// let email = document.querySelector(".email")
// let number = document.querySelector(".number")
// let table = document.querySelector(".tableBody")


// form.addEventListener('submit',(e)=>{   //event chlaya
//     e.preventDefault();    // reload roka

//     if(name.value=="" || id.value=="" ||email.value==""||number.value==""){
//         alert("fill all the information")      // condition + alert diya
//         return;   // condition ko yhi stop krwa do
//     }

// if(editIndex === null){

//     students.push({
//         name:name.value,
//         id:id.value,
//         email:email.value,
//         number:number.value
//     });

// }else{

//     students[editIndex] = {
//         name:name.value,
//         id:id.value,
//         email:email.value,
//         number:number.value
//     };

//     editIndex = null;
// }

//   localStorage.setItem("students",JSON.stringify(students))
//   showData();
//   form.reset();
// })


// function showData(){
//     table.innerHTML="";

// for(let i = 0; i < students.length; i++){  //kuki is loop me idex milta hai isliye use hua.
//     let student = students[i];
//         table.innerHTML+=`
//         <tr>
//         <td>${student.name}</td>
//         <td>${student.id}</td>
//         <td>${student.email}</td>
//         <td>${student.number}</td>
//         <td>  <button onclick="deleteStudent(${i})">Delete</button></td>
//         <td>  <button onclick="editStudent(${i})">edit</button></td>

//         </tr>`}}

//         function deleteStudent(index) {

//     students.splice(index, 1);

//     localStorage.setItem(
//         "students",
//         JSON.stringify(students)
//     );

//     showData();
// }
    
// function editStudent(index){

//     editIndex = index;

//     name.value = students[index].name;
//     id.value = students[index].id;
//     email.value = students[index].email;
//     number.value = students[index].number;
// }





















//---------------------------------------again try---------------------------------





// let students = JSON.parse(localStorage.getItem("students")) || []
// //let students=[]
// let editIndex = null
// let form = document.querySelector(".form")
// let name = document.querySelector(".name")
// let id = document.querySelector(".id")
// let email = document.querySelector(".email")
// let number = document.querySelector(".number")
// let table = document.querySelector(".tableBody")


// form.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     if(name.value==""||id.value==""||email.value==""||number.value==""){
//         alert("Fill all information")
//         return;
//     }
//     if(editIndex===null){
//     students.push({
//    name:name.value,
//    id:id.value,
//    email:email.value,
//    number:number.value

//     })}else{
//         students[editIndex]={
//                name:name.value,
//    id:id.value,
//    email:email.value,
//    number:number.value
//         }
//     }editIndex=null

// localStorage.setItem("students",JSON.stringify(students))
// showData();
// form.reset();


// })

// function showData(){
//     table.innerHTML = "";
// for(let i=0;i<students.length;i++)
//     { let student = students[i]
//         table.innerHTML+=`
//         <tr>
//     <td>${student.name}</td>
//     <td>${student.id} </td>
//     <td>${student.email} </td>
//     <td>${student.number} </td>

//     <td><button onclick="deletee(${i})" >delete</button></td>
//     <td><button onclick="edit(${i})"  >edit</button></td>
//         </tr>`}}

// showData();


// function deletee(index){
// let check = confirm("are you sure ?");
// if(check){
//     return
// }
// students.splice(index,1)
//   localStorage.setItem("students",JSON.stringify(students))
//   showData();

// }

// function edit(index){
//     editIndex = index;
//    name.value = students[index].name;
//    id.value = students[index].id;
//    email.value = students[index].email;
//    number.value = students[index].number;
// }


// showData();











//=------------------------------agian try--------------------------------------------


// let students = JSON.parse(localStorage.getItem("students")) || []
// let editIndex = null

// let form = document.querySelector(".form")
// let name = document.querySelector(".name")
// let id = document.querySelector(".id")
// let email = document.querySelector(".email")
// let number = document.querySelector(".number")
// let table = document.querySelector(".tableBody")


// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     if(name.value===""||id.value===""||email.value===""||number.value===''){
//         alert("Fill all the Information")
//         return;
//     }


// if(editIndex===null){
//      students.push({
//         name:name.value,
//         id:id.value,
//         email:email.value,
//         number:number.value
//     })
// }else{
//     students[editIndex]={
//               name:name.value,
//         id:id.value,
//         email:email.value,
//         number:number.value
//     }
// }
// editIndex==null




//     localStorage.setItem("students",JSON.stringify(students))
//     showData();
//     form.reset();
// })

// function showData(){
//     table.innerHTML=""
//     for(let i=0;i<students.length;i++){
//       student = students[i]
//         table.innerHTML+=`
//         <tr>
//         <td>${student.name}</td>
//         <td>${student.id}</td>
//         <td>${student.email}</td>
//         <td>${student.number}</td>
//         <td><button onclick = deletee(${i})>delete</button></td>
// <td><button onclick = edit(${i})>edit</button></td>
//         </tr>  `
//     }
// }
//     showData();

// function deletee(index){
// let check = confirm("Are you sure ?")
// if(!check){
//     return
// }else

//      {   students.splice(index,1)
//        localStorage.setItem("students",JSON.stringify(students))
       
//        showData();
// }}


// function edit(index){
//  editIndex = index
//     name.value = students[index].name
//     id.value = students[index].id
//     email.value = students[index].email
//     number.value = students[index].number

// }
//        showData();










//---------------------- try  for edit part--------------------------------------------


// let editIndex = null;
// if(editIndex===null){
//     students.push({
//         name:name.value,
//         id:id.value,
//         number:number.value,
//         email:email.value,

//     })
// }else{
//     students[editIndex]={
            
//         name:name.value,
//         id:id.value,
//         number:number.value,
//         email:email.value,

//     }
// }
// editIndex=null



// function edit(index){
//     editIndex=index
//     name.value=students[index].name
//     name.value=students[index].email
//     name.value=students[index].id
//     name.value=students[index].number
// }












////---------------------------try again-------------------------------------------



let students = JSON.parse(localStorage.getItem("students")) || []
let editIndex = null

let form = document.querySelector(".form")
let name = document.querySelector(".name")
let email = document.querySelector(".email")
let id = document.querySelector(".id")
let number = document.querySelector(".number")
let table = document.querySelector(".tableBody")

form.addEventListener('submit',(e)=>{
    e.preventDefault();

if(name.value==""||id.value==""||email.value==""||number.value==""){
    alert("Fill all information")
    return
}
if(editIndex===null){
students.push({
    name:name.value,
    id:id.value,
    email:email.value,
    number:number.value
})}else{
    students[editIndex]={
        
    name:name.value,
    id:id.value,
    email:email.value,
    number:number.value
    }
}

localStorage.setItem("students",JSON.stringify(students))
showData()
form.reset();


})
function showData(){
table.innerHTML=""
for(let i=0;i<students.length;i++){
    student=students[i]
    table.innerHTML+=`
    <tr>
    <td>${student.name}</td>
    <td>${student.id}</td>
    <td>${student.email}</td>
    <td>${student.number}</td>
    <td><button onclick="deletee(${i})">delete</button></td>
    <td><button onclick=edit(${i})>edit</button></td>
    </tr>`}}
showData()



function deletee(index){
    students.splice(index,1)

    localStorage.setItem("students",JSON.stringify(students))
    showData()
}

function edit(index){
    editIndex=index
name.value=students[index].name
id.value=students[index].id
email.value=students[index].email
number.value=students[index].number
}