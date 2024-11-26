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

    const message = `
    Новый запрос на уборку🧹:

Имя клиента: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}
Количество комнат: ${formData.rooms}

Дополнительные услуги: ${formData.services}

Дата уборки: ${formData.date}
Время уборки: ${formData.time}
Адрес: ${formData.address}
`;

    const botToken = '7580434956:AAE68J5NF1vupXhvIHojSAsnXXEr76p1XMo'; // Replace with your Telegram Bot token
    const chatId = '-1002295559153'; // Replace with your Telegram channel's chat ID

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Message sent to Telegram:", data);
    })
    .catch(error => {
        console.error("Error sending message to Telegram:", error);
    });

    // Send email to admin
    emailjs.send("service_x6wpo8q", "template_rp96hia", formData)
    .then(function(response) {
        window.location.href = "confirmation.html";

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
