document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const createAccountButton = document.querySelector('.create-account-button');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically send the login credentials to a server for authentication
        console.log('Login attempt:', email, password);
        alert('Login functionality will be implemented here.');
    });

    createAccountButton.addEventListener('click', function() {
        window.location.href = 'register.html';
    });
});