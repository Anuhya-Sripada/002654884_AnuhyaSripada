

$(document).ready(function () {

  var submitBtn = $('input[type="submit"]');
  submitBtn.prop('disabled', true).css({ 'background-color': 'gray' });


  var rowCounter = 1;
  $('#add-student').click(function () {
    $('table').append(
      '<tr>' +
      '<td><input type="checkbox"></td>' +
      '<td>Student ' + rowCounter + '</td>' +
      '<td>Teacher ' + rowCounter + '</td>' +
      '<td>Award Status' + rowCounter + '</td>' +
      '<td>Budget ' + rowCounter + '</td>' +
      '<td>Percentage ' + rowCounter + '</td>' +
      '<td><input type="button" value="Delete"></td>' +
      '<td><input type="button" value="Edit"></td>' +
      '</tr>'
    );
    rowCounter++;
  });


  $('table').on('append', 'tr', function () {
    $(this).css({ 'background-color': 'lightgray' });
  });


  $('form').submit(function (e) {
    e.preventDefault();

    if ($("input[type='checkbox']").is(":checked")) {
      $("input[type='submit']").prop("disabled", false);
      $("input[type='submit']").css("background-color", "orange");
      alert("Record added successfully");
    } else {
      $("input[type='submit']").prop("disabled", true);
      alert("Error adding record");
    }
  });


  $('table').on('change', 'input[type="checkbox"]', function () {
    var tr = $(this).closest('tr');


    if ($(this).is(':checked')) {
      tr.css({ 'background-color': 'yellow' });
      submitBtn.css({ 'background-color': 'orange' });
    } else {
      tr.css({ 'background-color': 'lightgray' });
      submitBtn.css({ 'background-color': 'gray' });
    }



    var deleteBtn = tr.find('.delete-btn');
    if (!deleteBtn.length) {
      tr.find('td:nth-child(9)').append('<button class="delete-btn">Delete</button>');
      deleteBtn = tr.find('.delete-btn');
      deleteBtn.click(function () {
        tr.remove();
        alert('Record deleted successfully');
      });
    }



    var editBtn = tr.find('.edit-btn');
    if (!editBtn.length) {
      tr.find('td:nth-child(10)').append('<button class="edit-btn">Edit</button>');
      editBtn = tr.find('.edit-btn');
      editBtn.click(function () {
        alert('Edit button clicked');
      });
    }



  });

  const addStudentButton = document.getElementById("add-student-button");
  const studentTable = document.getElementById("student-table");

  addStudentButton.addEventListener("click", function () {
    const stcnt = studentTable.rows.length;
    const newRow = studentTable.insertRow(-1);
    newRow.id = "Student " + stcnt;
    const selectCell = newRow.insertCell(0);
    const selectInput = document.createElement("input");
    selectInput.setAttribute("type", "checkbox");
    selectCell.appendChild(selectInput);
    const selectImg = document.createElement("img");
    selectImg.setAttribute("src", "down.png");
    selectImg.setAttribute("width", "20");
    selectImg.setAttribute("height", "20");
    selectImg.onclick = () => showInfo("Student " + stcnt)
    selectCell.appendChild(selectImg)


    const studentCell = newRow.insertCell(1);
    studentCell.innerText = "Student " + stcnt;

    const teacherCell = newRow.insertCell(2);
    teacherCell.innerText = "Teacher " + stcnt;

    const AwardStatusCell = newRow.insertCell(3);
    AwardStatusCell.innerText = "Aprroved";

    const SemesterCell = newRow.insertCell(4);
    SemesterCell.innerText = "Fall";

    const TypeCell = newRow.insertCell(5);
    TypeCell.innerText = "TA";

    const BudgetCell = newRow.insertCell(6);
    const Budget = Math.floor(Math.random() * 99999) + 10000;
    BudgetCell.innerText = Budget;

    const PercentageCell = newRow.insertCell(7);
    PercentageCell.innerText = "100%";

    const deleteCell = newRow.insertCell(8);


    deleteCell.style.border = 'none';




    // const editCell = newRow.insertCell(9);
    // const editButton = document.createElement("button");
    // editButton.innerText = "Edit";
    // editButton.click(function() {
    //   alert('Edit button clicked');
    // });
    // editCell.appendChild(editButton);

    const editCell = newRow.insertCell(9);


    editCell.style.border = 'none';



    if ($(this).is(':checked')) {
      tr.css({ 'background-color': 'yellow' });

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteCell.appendChild(deleteButton);
      deleteCell.style.borderRadius = '5px';
      deleteCell.style.padding = '5px,10px';
      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.click(function () {
        alert('Edit button clicked');
      });
      editCell.appendChild(editButton);
      editCell.style.borderRadius = '5px';
      editCell.style.padding = '5px,10px'

    } else {
      tr.css({ 'background-color': 'lightgray' });
    }
  });
});

function showInfo(student) {
  const studentInfo = document.getElementById(student + " details");
  if (studentInfo.style.display === "none") {
    studentInfo.style.display = "block";
  } else {
    studentInfo.style.display = "none";
  }

}
