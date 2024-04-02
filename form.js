
document.getElementById('task_Form').addEventListener('submit', function(e) {
e.preventDefault();

// Get all the input values
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var managerFirstName = document.getElementById('managerFirstName').value;
var managerLastName = document.getElementById('managerLastName').value;
var taskName = document.getElementById('taskName').value;
var taskId = document.getElementById('taskId').value;
var status = document.querySelector('input[name="status"]:checked').value;
var notes = document.getElementById('notes').value;
var instructions = document.getElementById('instructions').value;

// Display submitted data below the form
var submittedData = document.getElementById('submittedData');
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
