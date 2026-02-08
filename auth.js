// Signup functionality
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Save user in localStorage
    localStorage.setItem('expenseTrackerUser', JSON.stringify({ username, password }));

    alert('Account created! You can now log in.');
    window.location.href = 'index.html';
  });
}

// Login functionality
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const savedUser = JSON.parse(localStorage.getItem('expenseTrackerUser'));

    if (savedUser && savedUser.username === username && savedUser.password === password) {
      // Mark user as logged in
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'tracker.html';
    } else {
      alert('Invalid username or password!');
    }
  });
}

// Check if user is logged in on tracker.html
if (window.location.pathname.endsWith('tracker.html')) {
  const isLoggedIn = localStorage.getItem('loggedIn');
  if (!isLoggedIn) {
    alert('You must log in first!');
    window.location.href = 'index.html';
  }
}
