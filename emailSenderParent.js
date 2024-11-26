
document.getElementById("nannyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

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

        // Telegram bot
        const message = `
        Новый запрос на услугу няни (от родителей)👥:

Имя родителя: ${formData.parentName}
Телефон: ${formData.phone}
Email: ${formData.email}
Имя ребёнка: ${formData.childName}
Возраст ребёнка: ${formData.childAge}
Дата начала: ${formData.startDate}
Дата окончания: ${formData.endDate}
Время пребывания: ${formData.time}

Дополнительные требования: ${formData.requirements}

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
    emailjs.send("service_tkuwkqg", "template_z27avbf", formData)
        .then(function(response) {
            window.location.href = "confirmation.html";
        }, function(error) {
            alert("Произошла ошибка. Попробуйте ещё раз.");
            console.error("Error sending email", error);
        });
});