document.getElementById("cleaning-request-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        rooms: document.getElementById("rooms").value,
        services: document.getElementById("services").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        address: document.getElementById("address").value,
    };

    // Send form data to Flask backend
    fetch("https://cleanera-backend.onrender.com/submit-cleaning-request", {
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
