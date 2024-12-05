//button
  function handleRegistration() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Check for valid Gmail address
    if (!email.endsWith("@gmail.com")) {
        alert("Please enter a valid Gmail address ending with '@gmail.com'.");
        return;
    }

    // Show alert box with user info
    alert(`Thank you, ${name}! You have registered with the email: ${email}.`);

    // Close modal after submission
    const modal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
    modal.hide();
}
