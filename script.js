document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
}
