(function(){
    emailjs.init({
      publicKey: "1QP0UJhcm0mJGtnRR",
    });
 })();

const maleButton = document.getElementById('male-button');
const femaleButton = document.getElementById('female-button');
const errorMessage = document.getElementById('genderError');

maleButton.addEventListener('click', () => {
    console.log('Male button is clicked');
    errorMessage.style.display = 'none';
    handleButtonClick('Мужчина');
});

femaleButton.addEventListener('click', () => {
    console.log('Female button is clicked');
    errorMessage.style.display = 'none';
    handleButtonClick('Женщина');
});

var selectedGender = '';
function handleButtonClick(buttonName) {
    selectedGender = buttonName
}


document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

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
        Запрос на вакансию няни👩🏼‍🍼:

Пол: ${selectedGender}
Имя и Фамилия: ${formData.name}
Дата рождения: ${formData.dob}
Номер телефона: ${formData.phone}
Email: ${formData.email}
Адрес: ${formData.address}
        `;

        const botToken = '7580434956:AAE68J5NF1vupXhvIHojSAsnXXEr76p1XMo'; // Replace with your Telegram Bot token
        const chatId = '-1002295559153'; // Replace with your Telegram channel's chat ID
    if (selectedGender === 'Мужчина' || selectedGender === 'Женщина'){
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
    }else{
        errorMessage.style.display = 'block';
        return;
    }
});
