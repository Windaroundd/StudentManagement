function getInfoFromForm() {
  var studentId = document.getElementById("txtMaSV").value;
  var studentName = document.getElementById("txtTenSV").value;
  var studentEmail = document.getElementById("txtEmail").value;
  var studentPass = document.getElementById("txtPass").value;
  var mathScore = document.getElementById("txtDiemToan").value;
  var physicScore = document.getElementById("txtDiemLy").value;
  var chemicalScore = document.getElementById("txtDiemHoa").value;

  var student = new Student(
    studentId,
    studentName,
    studentEmail,
    studentPass,
    mathScore,
    physicScore,
    chemicalScore
  );
  return student;
}

function renderStudentList(list) {
  var contentHTML = "";
  for (var i = 0; i < list.length; i++) {
    var currentStudent = list[i];
    var contentTr = `<tr>
        <td>${currentStudent.id}</td>
        <td>${currentStudent.name}</td>
        <td>${currentStudent.email}</td>
        <td>${currentStudent.tinhDTB()}</td>
        <td>
        <button onclick="removeStudent('${
          currentStudent.id
        }')"  class="btn btn-danger">Xoa</button>
        <button onclick="editStudentInfo('${
          currentStudent.id
        }')" class="btn btn-primary">Sua</button>
        </td>
        </tr>`;
    contentHTML += contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function showInfoToform(student) {
  document.getElementById("txtMaSV").value = student.id;
  document.getElementById("txtTenSV").value = student.name;
  document.getElementById("txtEmail").value = student.email;
  document.getElementById("txtPass").value = student.password;
  document.getElementById("txtDiemToan").value = student.mathScore;
  document.getElementById("txtDiemLy").value = student.physicScore;
  document.getElementById("txtDiemHoa").value = student.chemicalScore;
}
