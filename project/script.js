// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () => {
//     container.classList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classList.remove("active");
// });
// document.querySelectorAll('.toggle-password').forEach(icon => {
//     icon.addEventListener('click', function () {
//         let passwordField = this.previousElementSibling;
//         if (passwordField.type === "password") {
//             passwordField.type = "text";
//             this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
//         } else {
//             passwordField.type = "password";
//             this.innerHTML = '<i class="fa-solid fa-eye"></i>';
//         }
//     });
// });

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInForm = document.querySelector('.sign-in form');
const emailInput = document.querySelector('.sign-in input[type="email"]');
const passwordInput = document.querySelector('.sign-in input[type="password"]');
const errorDisplay = document.createElement('p');
errorDisplay.style.color = 'red';

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === 'dhanush@gmail.com' && password === 'dhanush@123') {
        window.location.href = 'file:///C:/Users/Lenovo/Desktop/batch8/web.html'; // Replace with your desired page
    } else {
        errorDisplay.textContent = 'Invalid email or password.';
        // Check if error message is already present before appending
        if (!signInForm.contains(errorDisplay)) {
            signInForm.appendChild(errorDisplay);
        }
    }
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('.sign-up form');
    const signUpButton = document.getElementById('register');
    const signInButton = document.getElementById('login');

    // Add event listener to the Sign Up form submission
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the form data
        const nameInput = signUpForm.querySelector('input[type="text"]');
        const emailInput = signUpForm.querySelector('input[type="email"]');
        const passwordInput = signUpForm.querySelector('input[type="password"]');

        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        // Log the form data to the console
        console.log('Sign Up Data:', {
            name,
            email,
            password
        });

        // Optionally, redirect to another page or send data to a server
        // window.location.href = 'register.html'; // Redirect to another page
        // Or use fetch API to send data to a server
    });

    // Add event listener to the Sign Up button to redirect to register.html
    signUp.addEventListener('click', () => {
        if (signUpButton('click')){
        signUpButton.addEventListener('click', () => {
            window.location.href = 'register.html'; // Redirect to register.html
        });
        }
         // Redirect to register.html
    });

    

    // Add event listener to the Sign In button (optional, if needed)
    signInButton.addEventListener('click', () => {
        const container = document.getElementById('container');
        container.classList.remove('right-panel-active');
    });

    // Password Toggle functionality
    const passwordInputs = document.querySelectorAll('.password');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');

    togglePasswordButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const passwordInput = passwordInputs[index];
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Toggle the eye icon
            button.querySelector('i').classList.toggle('fa-eye');
            button.querySelector('i').classList.toggle('fa-eye-slash');
        });
    });
});
