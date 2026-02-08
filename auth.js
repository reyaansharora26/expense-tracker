// --- SIGNUP ---
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('expenseTrackerUsers')) || {};

    if (users[username]) {
      alert('Username already exists! Choose another.');
      return;
    }

    // Save new user
    users[username] = { password };
    localStorage.setItem('expenseTrackerUsers', JSON.stringify(users));

    alert('Account created! You can now log in.');
    window.location.href = 'index.html';
  });
}

// --- LOGIN ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('expenseTrackerUsers')) || {};

    if (users[username] && users[username].password === password) {
      // Save logged in user
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'tracker.html';
    } else {
      alert('Invalid username or password!');
    }
  });
}

// --- CHECK LOGIN FOR TRACKER ---
if (window.location.pathname.endsWith('tracker.html')) {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    alert('You must log in first!');
    window.location.href = 'index.html';
  } else {
    // Optional: display username on tracker page
    const welcome = document.getElementById('welcomeUser');
    if (welcome) {
      welcome.textContent = `Welcome, ${loggedInUser}!`;
    }
  }
}
