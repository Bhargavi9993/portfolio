function downloadResume() {
    alert("Downloading Resume...");
    // Replace with actual file download link
    window.location.href = "resume.pdf";
}

function viewResume() {
    alert("Viewing Resume...");
    // Replace with actual resume link
    window.open("resume.pdf", "_blank");
}
document.getElementById("contactForm").addEventListener("submit", function (event) {
    alert("Thank you for Connect with me! ");
    this.reset(); // Clear the form fields
    document.getElementById("name").value = ""; // Ensure the name field is cleared
    document.getElementById("email").value = ""; // Ensure the email field is cleared
    document.getElementById("message").value = ""; // Ensure the message field is cleared
  
    event.preventDefault(); 
});
