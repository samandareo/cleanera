
document.getElementById("nannyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    // Get form values
    const formData = {
        parentName: document.getElementById("parentName").value,
        phone: document.getElementById("phone").value,
        childName: document.getElementById("childName").value,
        childAge: document.getElementById("childAge").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        time: document.getElementById("time").value,
        requirements: document.getElementById("requirements").value,
        address: document.getElementById("address").value,
    };

    // Send email to admin
    emailjs.send("service_tkuwkqg", "template_z27avbf", formData)
        .then(function(response) {
            alert("Ваша заявка отправлена!");
        }, function(error) {
            alert("Произошла ошибка. Попробуйте ещё раз.");
            console.error("Error sending email", error);
        });
});