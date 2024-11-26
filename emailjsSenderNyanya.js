(function(){
    emailjs.init({
      publicKey: "1QP0UJhcm0mJGtnRR",
    });
 })();
 
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    // Get the gender value
    const gender = document.querySelector('button[data-value]:focus');
    const selectedGender = gender ? gender.getAttribute('data-value') : '';

    // Get form values
    const formData = {
        gender: selectedGender,
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };

    // Send email to admin
    emailjs.send("service_tkuwkqg", "template_yor78zl", formData)
        .then(function(response) {
            alert("Ваша заявка отправлена!");
        }, function(error) {
            alert("Произошла ошибка. Попробуйте ещё раз.");
            console.error("Error sending email", error);
        });
});