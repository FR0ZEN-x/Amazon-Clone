document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordCheck = document.getElementById('password-check').value;
        
        if (password !== passwordCheck) {
            alert("Passwords don't match. Please try again.");
            return;
        }
        
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        
        // Here you would typically send the registration data to a server
        console.log('Registration attempt:', name, email, password);
        alert('Account created successfully! Redirecting to login page...');
        
        // Redirect to login page after successful registration
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    });
});