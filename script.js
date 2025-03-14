document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const submitBtn = document.querySelector(".input2 button"); 

    // Boshlang‘ich holatda tugmani o‘chirib qo‘yish
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "#ccc"; // O‘chirilgan tugma rangi

    function checkInputs() {
        if (phoneInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = "#ff7f50"; 
            submitBtn.style.cursor = "pointer";
        } else {
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = "#ccc"; // Tugma o‘chadi
            submitBtn.style.cursor = "not-allowed";
        }
    }

    phoneInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);
});

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const submitBtn = document.querySelector(".input2 button"); 
    const togglePassword = document.getElementById("togglePassword");

    
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "#ccc";

    function checkInputs() {
        if (phoneInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = "#ff7f50";
            submitBtn.style.cursor = "pointer";
        } else {
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = "#ccc";
            submitBtn.style.cursor = "not-allowed";
        }
    }

    phoneInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);

    // Ko‘zcha orqali parolni ko‘rsatish/yashirish
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.src = "Eye (1).png"; //
        } else {
            passwordInput.type = "password";
            togglePassword.src = "Eye (1).png";
        }
    });
});
