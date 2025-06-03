const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  let valid = true;

  if (!name) {
    nameError.textContent = "Please enter your name.";
    valid = false;
  } else if (!/^[A-Za-z\s]+$/.test(name)) {
    nameError.textContent = "Name can only contain letters and spaces.";
    valid = false;
  }

  if (!email) {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  }

  if (!message) {
    messageError.textContent = "Please enter a message.";
    valid = false;
  } else if (message.length < 5) {
    messageError.textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "✅ Message sent successfully!";
    form.reset();
  }
});
