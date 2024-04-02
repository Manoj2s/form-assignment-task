
document.getElementById('task_form').addEventListener('submit', function(e) {
    e.preventDefault();


    let  firstName = document.getElementById('firstName').value;
    let  lastName = document.getElementById('lastName').value;
    let  managerFirstName = document.getElementById('managerFirstName').value;
    let  managerLastName = document.getElementById('managerLastName').value;
    let  taskName = document.getElementById('taskName').value;
    let  taskId = document.getElementById('taskId').value;
    let  status = document.querySelector('input[name="Status"]:checked').value;
    let  notes = document.getElementById('notes').value;
    let  instructions = document.getElementById('instructions').value;


    let  submittedData = document.getElementById('submittedData');
    submittedData.innerHTML = `
        <h2>Submitted Data</h2>
        <p><strong>Employee Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Manager Name:</strong> ${managerFirstName} ${managerLastName}</p>
        <p><strong>Task ID:</strong> ${taskId}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Additional Notes:</strong> ${notes}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
    `;
});
