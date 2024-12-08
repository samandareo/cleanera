document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const maleButton = document.getElementById('male-button');
    const femaleButton = document.getElementById('female-button');
    let selectedGender = '';

    if (maleButton.classList.contains('active')) {
        selectedGender = 'Мужчина';
    } else if (femaleButton.classList.contains('active')) {
        selectedGender = 'Женщина'; 
    }

    const errorMessage = document.getElementById("genderError");
    if (!selectedGender) {
        errorMessage.style.display = "block";
        errorMessage.style.color = "red";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    const formData = {
        gender: selectedGender,
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
    };

    fetch("https://cleanera-backend.onrender.com/submit-nanny-request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            window.location.href = "confirmation.html";
        } else {
            alert("An error occurred. Please try again.");
        }
    })
    .catch((error) => {
        console.error("Error submitting form:", error);
    });
});

document.getElementById('male-button').addEventListener('click', () => {
    setGender('male-button', 'female-button');
});

document.getElementById('female-button').addEventListener('click', () => {
    setGender('female-button', 'male-button');
});

function setGender(activeButtonId, inactiveButtonId) {
    document.getElementById(activeButtonId).classList.add('active');
    document.getElementById(inactiveButtonId).classList.remove('active');
    document.getElementById("genderError").style.display = 'none';
}
