(function(){
    emailjs.init({
      publicKey: "1QP0UJhcm0mJGtnRR",
    });
 })();

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    // Get the gender value
    let selectedGender = '';

    // Add event listeners to gender buttons
    const genderButtons = document.querySelectorAll('.gender-button');
    genderButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Set selected gender to the clicked button's data-value
            selectedGender = this.getAttribute('data-value');
            
            // Set the value of the hidden input
            document.getElementById('gender').value = selectedGender;

            // Optionally, you can highlight the selected button by adding a class
            genderButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Get form values
    const formData = {
        gender: selectedGender,
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };

    // Telegram bot
        const message = `
        Новый запрос на няня👩🏼‍🍼:
Пол: ${selectedGender}
Имя и Фамилия: ${formData.name}
Дата рождения: ${formData.dob}
Номер телефона: ${formData.phone}
Email: ${formData.email}
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
    emailjs.send("service_tkuwkqg", "template_yor78zl", formData)
        .then(function(response) {
            window.location.href = "confirmation.html";

        }, function(error) {
            alert("Произошла ошибка. Попробуйте ещё раз.");
            console.error("Error sending email", error);
        });
});