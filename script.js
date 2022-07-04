var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["studentid"] = document.getElementById("studentid").value;
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["address"] = document.getElementById("address").value;
    formData["program"] = document.getElementById("program").value;
    formData["status"] = document.getElementById("status").value;
    formData["country"] = document.getElementById("country").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentid;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.firstname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lastname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.program;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.status;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.country;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("studentid").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("program").value = "";
    document.getElementById("status").value = "";
    document.getElementById("country").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("firstname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;
    document.getElementById("program").value = selectedRow.cells[4].innerHTML;
    document.getElementById("status").value = selectedRow.cells[5].innerHTML;
    document.getElementById("country").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentid;
    selectedRow.cells[1].innerHTML = formData.firstname;
    selectedRow.cells[2].innerHTML = formData.lastname;
    selectedRow.cells[3].innerHTML = formData.address;
    selectedRow.cells[4].innerHTML = formData.program;
    selectedRow.cells[5].innerHTML = formData.status;
    selectedRow.cells[6].innerHTML = formData.country;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("studentid").value == "") {
        isValid = false;
        document.getElementById("studentidValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("studentidValidationError").classList.contains("hide"))
            document.getElementById("studentidValidationError").classList.add("hide");
    }
    return isValid;
}
