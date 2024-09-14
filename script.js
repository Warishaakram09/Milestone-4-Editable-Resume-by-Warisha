var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output with editable content
        var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Contact Number:</strong> <span contenteditable=\"true\">").concat(contact, "</span></p>\n        \n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        \n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        \n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
