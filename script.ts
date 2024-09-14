document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if (nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output with editable content
        const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Contact Number:</strong> <span contenteditable="true">${contact}</span></p>
        
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        
        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
        
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');

        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});

