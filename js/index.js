const STUDENTLIST = "STUDENTLIST";

var studentList = [];

var dataJson = localStorage.getItem(STUDENTLIST);
if (dataJson) {
  var dataRaw = JSON.parse(dataJson);
  studentList = dataRaw.map(function (item) {
    return new Student(
      item.id,
      item.name,
      item.email,
      item.password,
      item.mathScore,
      item.physicScore,
      item.chemicalScore
    );
  });
  renderStudentList(studentList);
}

function saveLocalStorage() {
  var studentListJson = JSON.stringify(studentList);
  localStorage.setItem(STUDENTLIST, studentListJson);
}

function resetForm(){
    document.getElementById("formQLSV").reset();
    document.getElementById("txtMaSV").disabled = false;
}

function addNewStudent() {
  var newStudent = getInfoFromForm();
  studentList.push(newStudent);
  saveLocalStorage();
  renderStudentList(studentList);
  resetForm();
}

function removeStudent(id) {
  var index = studentList.findIndex(function (sv) {
    return sv.id == id;
  });

  if (index == -1) return;

  studentList.splice(index, 1);

  renderStudentList(studentList);
  saveLocalStorage();
}

function editStudentInfo(id) {
  var index = studentList.findIndex(function (sv) {
    return sv.id == id;
  });

  if (index == -1) return;
  var student = studentList[index];
  showInfoToform(student);
  document.getElementById("txtMaSV").disabled = true;
}

function updateStudent() {
  var studentEdit = getInfoFromForm();
  var index = studentList.findIndex(function (sv) {
    return sv.id == studentEdit.id;
  });
  studentList[index] = studentEdit;
  renderStudentList(studentList);
  saveLocalStorage();
  document.getElementById("txtMaSV").disabled = false;
  resetForm();
}
