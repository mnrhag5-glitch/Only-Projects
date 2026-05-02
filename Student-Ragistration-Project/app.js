let students = JSON.parse(localStorage.getItem('students')) || [];

function addStudent() {
  let name = document.getElementById('name').value;
  let id = document.getElementById('id').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;

  if (!name || !id || !email || !phone) {
    alert("Fill all fields");
    return;
  }

  students.push({ name, id, email, phone });
  localStorage.setItem('students', JSON.stringify(students));

  displayStudents();
}

function displayStudents() {
  let table = document.getElementById('tableBody');
  table.innerHTML = "";

  students.forEach((s, index) => {
    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.id}</td>
        <td>${s.email}</td>
        <td>${s.phone}</td>
        <td>
          <button onclick="editStudent(${index})">Edit</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(students));
  displayStudents();
}

function editStudent(index) {
  let s = students[index];

  document.getElementById('name').value = s.name;
  document.getElementById('id').value = s.id;
  document.getElementById('email').value = s.email;
  document.getElementById('phone').value = s.phone;

  deleteStudent(index);
}

displayStudents();