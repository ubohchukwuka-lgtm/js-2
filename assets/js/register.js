document.getElementById('registerForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Simulate registration success
      alert(`Welcome to MyBank, ${name}! Your account has been created.`);
      window.location.href = "index.html"; // Redirect to home after registration
    });