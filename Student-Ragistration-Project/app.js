// let students = JSON.parse(localStorage.getItem('students')) || [];

// const form = document.querySelector('.form'),
// nameInput = document.querySelector('.name'),
// idInput = document.querySelector('.studentId'),
// emailInput = document.querySelector('.email'),
// phoneInput = document.querySelector('.phone'),
// tableBody = document.querySelector('.tablebody');

// const displayStudents = () => {
//   tableBody.innerHTML = students.map((student, index) => `
//     <tr>
//       <td>${student.name}</td>
//       <td>${student.id}</td>
//       <td>${student.email}</td>
//       <td>${student.phone}</td>
//       <td>
//         <button data-index="${index}" class="edit">Edit</button>
//         <button data-index="${index}" class="delete">Delete</button>
//       </td>
//     </tr>
//   `).join('');
// };


// form.onsubmit = (event) => {
//   event.preventDefault();

//   if (!nameInput.value || !idInput.value || !emailInput.value || !phoneInput.value) {
//     return alert("Fill all fields");
//   }

//   students.push({
//     name: nameInput.value,
//     id: idInput.value,
//     email: emailInput.value,
//     phone: phoneInput.value
//   });

//   localStorage.setItem('students', JSON.stringify(students));
//   form.reset();
//   displayStudents();
// };


// tableBody.onclick = (event) => {
//   const index = event.target.dataset.index;
//   if (index === undefined) return;

//   if (event.target.className === 'delete') {
//     students.splice(index, 1);
//   }

//   if (event.target.className === 'edit') {
//     const student = students[index];

//     nameInput.value = student.name;
//     idInput.value = student.id;
//     emailInput.value = student.email;
//     phoneInput.value = student.phone;

//     students.splice(index, 1);
//   }

//   localStorage.setItem('students', JSON.stringify(students));
//   displayStudents();
// };


// displayStudents();




const form = document.querySelector('.form');
const nameInput = document.querySelector('.name');
const idInput = document.querySelector('.studentId');
const emailInput = document.querySelector('.email');
const phoneInput = document.querySelector('.number');
const tableBody = document.querySelector('.tablebody');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = nameInput.value;
  const id = idInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  if (!name || !id || !email || !phone) {
    alert("Fill all fields");
    return;
  }

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${id}</td>
    <td>${email}</td>
    <td>${phone}</td>
  `;

  tableBody.appendChild(row);

   form.reset(); // sab clear
});