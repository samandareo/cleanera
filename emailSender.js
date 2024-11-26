(function() {
    emailjs.init("n8ESzzgSIBWhzFzzC"); // Replace with your EmailJS user ID
})();

document.getElementById("cleaning-request-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

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

    // Send email to admin
    emailjs.send("service_x6wpo8q", "template_rp96hia", formData)
    .then(function(response) {
        alert("Ваш запрос отправлен успешно!");

        // Optionally, send confirmation email to the user
        emailjs.send("service_x6wpo8q", "template_8frsyau", {
            ...formData,
            to_email: formData.email, // Send confirmation to user email
        })
        .then(function(response) {
            console.log("Confirmation email sent", response);
        }, function(error) {
            console.error("Error sending confirmation email", error);
        });
    }, function(error) {
        alert("Произошла ошибка. Попробуйте ещё раз.");
        console.error("Error sending email", error);
    });
});
