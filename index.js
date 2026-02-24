const studentList = [];
rederStudentList();

function rederStudentList() {


  let studentListHTML = '';
  for (let i = 0; i < studentList.length; i++) {
    const listObj = studentList[i];
    const id = listObj.id;
    const name = listObj.name;
    const date = listObj.date;
    const subject = listObj.subject;


    const html = `
    <div class = "student-list">
      <div>${id}</div>
      <div>${name}</div>
      <div>${date}</div>
      <div>${subject}</div>
      <button onclick = "studentList.splice(${i}, 1);
      rederStudentList();
      "
       class="button-delete"
      >
      Delete
      </button>
    </div>
   
    `;
    studentListHTML += html;
  }

  document.querySelector('.js-student-list').innerHTML = studentListHTML;

}

function Addstudent() {
  const inputId = document.querySelector('.js-id');
  const id = inputId.value;

  const inputName = document.querySelector('.js-name');
  const name = inputName.value;

  const inputDate = document.querySelector('.js-date');
  const date = inputDate.value;

  const inputSubject = document.querySelector('.js-subject');
  const subject = inputSubject.value;


  if (id === "" || name === "" || date === "" || subject === "") {
    alert("Please fill in all field before adding!");
  } else {
    studentList.push({
      id,
      name,
      date,
      subject
    });
  }



  // console.log(studentList);
  inputId.value = '';
  inputName.value = '';
  inputDate.value = '';
  inputSubject.value = '';

  rederStudentList();
}