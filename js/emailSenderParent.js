document.getElementById("nannyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const formData = {
        parentName: document.getElementById("parentName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        childName: document.getElementById("childName").value,
        childAge: document.getElementById("childAge").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        time: document.getElementById("time").value,
        requirements: document.getElementById("requirements").value,
        address: document.getElementById("address").value,
    };

    // Validate dates
    const startDateInDateFormat = new Date(formData.startDate);
    const endDateInDateFormat = new Date(formData.endDate);

    if (startDateInDateFormat > endDateInDateFormat) {
        const dateError = document.getElementById("dateError");
        dateError.style.display = "block";
        dateError.style.color = "red";
        return;
    } else {
        document.getElementById("dateError").style.display = "none";
    }

    // Send form data to Flask backend
    fetch("https://cleanera-backend.onrender.com/submit-parent-request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            // Redirect to confirmation page
            window.location.href = "confirmation.html";
        } else {
            alert("An error occurred. Please try again.");
        }
    })
    .catch((error) => {
        console.error("Error submitting form:", error);
    });
});
