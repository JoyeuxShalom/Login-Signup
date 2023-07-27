// JavaScript for the login/signup page
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const protectedContent = document.getElementById('protected-content');

async function login(email, password) {
  // Send login request to the backend
  const loginResponse = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (loginResponse.ok) {
    // Show the protected content after successful login
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    protectedContent.style.display = 'block';
  } else {
    // Handle login error (e.g., display error message to the user)
    const errorMessage = await loginResponse.text();
    console.error(errorMessage);
  }
}

async function signup(username, email, password) {
  // Send signup request to the backend
  const signupResponse = await fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  if (signupResponse.ok) {
    // Show the protected content after successful signup
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    protectedContent.style.display = 'block';
  } else {
    // Handle signup error (e.g., display error message to the user)
    const errorMessage = await signupResponse.text();
    console.error(errorMessage);
  }
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  login(email, password);
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  signup(username, email, password);
});

