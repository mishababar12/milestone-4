const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
const editButton = document.getElementById("editButton") as HTMLButtonElement;

interface ResumeData {
    name: string;
    email: string;
    phone: string;
    degree: string;
    institute: string;
    year: string;
    experience: string;
    skills: string;
  }
  
  // This will be the object storing the resume data
  let resumeData: ResumeData = {
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
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capture data from form fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institute = (document.getElementById("institute") as HTMLInputElement).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Save data in an object for easy re-population
    resumeData = { name, email, phone, degree, institute, year, experience, skills };

    // Generate resume HTML
    resumeOutput.innerHTML = `
        <h2><strong>Name:</strong>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institute:</strong> ${institute}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    // Hide the form, show the output and edit button
    resumeForm.style.display = "none";
    resumeOutput.style.display = "block";
    editButton.style.display = "inline-block";
});


// Function to edit resume
editButton.addEventListener("click", () => {
    // Populate form fields with saved resume data
    (document.getElementById("name") as HTMLInputElement).value = resumeData.name;
    (document.getElementById("email") as HTMLInputElement).value = resumeData.email;
    (document.getElementById("phone") as HTMLInputElement).value = resumeData.phone;
    (document.getElementById("degree") as HTMLInputElement).value = resumeData.degree;
    (document.getElementById("institute") as HTMLInputElement).value = resumeData.institute;
    (document.getElementById("year") as HTMLInputElement).value = resumeData.year;
    (document.getElementById("experience") as HTMLTextAreaElement).value = resumeData.experience;
    (document.getElementById("skills") as HTMLTextAreaElement).value = resumeData.skills;

    // Show the form again and hide the output and edit button
    resumeForm.style.display = "block";
    resumeOutput.style.display = "none";
    editButton.style.display = "none";
});
