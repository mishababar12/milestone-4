var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
var editButton = document.getElementById("editButton");
// This will be the object storing the resume data
var resumeData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    degree: "Bachelor of Science",
    institute: "University X",
    year: "2022",
    experience: "3 years of experience in front-end development",
    skills: "HTML, CSS, JavaScript, TypeScript"
};
// Function to generate resume
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Capture data from form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institute = document.getElementById("institute").value;
    var year = document.getElementById("year").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Save data in an object for easy re-population
    resumeData = { name: name, email: email, phone: phone, degree: degree, institute: institute, year: year, experience: experience, skills: skills };
    // Generate resume HTML
    resumeOutput.innerHTML = "\n        <h2><strong>Name:</strong>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>Institute:</strong> ").concat(institute, "</p>\n        <p><strong>Year:</strong> ").concat(year, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
    // Hide the form, show the output and edit button
    resumeForm.style.display = "none";
    resumeOutput.style.display = "block";
    editButton.style.display = "inline-block";
});
// Function to edit resume
editButton.addEventListener("click", function () {
    // Populate form fields with saved resume data
    document.getElementById("name").value = resumeData.name;
    document.getElementById("email").value = resumeData.email;
    document.getElementById("phone").value = resumeData.phone;
    document.getElementById("degree").value = resumeData.degree;
    document.getElementById("institute").value = resumeData.institute;
    document.getElementById("year").value = resumeData.year;
    document.getElementById("experience").value = resumeData.experience;
    document.getElementById("skills").value = resumeData.skills;
    // Show the form again and hide the output and edit button
    resumeForm.style.display = "block";
    resumeOutput.style.display = "none";
    editButton.style.display = "none";
});
