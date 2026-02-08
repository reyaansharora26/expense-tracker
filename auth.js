function signup() {
  const user = document.getElementById("signupUser").value;
  const pass = document.getElementById("signupPass").value;

  if (!user || !pass) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Account created!");
  window.location.href = "index.html";
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (
    user === localStorage.getItem("user") &&
    pass === localStorage.getItem("pass")
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "tracker.html";
  } else {
    alert("Wrong username or password");
  }
}
