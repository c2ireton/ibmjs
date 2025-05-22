function submitFeedback() {
    // Retrieve the current values from the inputs when the function is called
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Update the display with the input values
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Alert the user and display the information
    alert('Thank you for your valuable Feedback');
    document.getElementById('userInfo').style.display = 'block';
}

// Set up the submit button's click event
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Optional: Handle Enter key to trigger the feedback submission
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents form submission
        submitFeedback();
    }
});