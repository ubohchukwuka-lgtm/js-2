function myFunction() {
      const g = 9.8; // acceleration due to gravity (m/s²)
      const velocity = parseFloat(document.getElementById("velocity").value);
      const angle = parseFloat(document.getElementById("angle").value);
      const resultDiv = document.getElementById("result");

      // Validation
      if (isNaN(velocity) || velocity <= 0) {
        resultDiv.textContent = "Please enter a valid initial velocity!";
        return;
      }
      if (isNaN(angle)) {
        resultDiv.textContent = "Please select a valid angle!";
        return;
      }

      // Convert degrees to radians
      const angleRad = (angle * Math.PI) / 180;

      // Time of flight formula
      const timeOfFlight = (2 * velocity * Math.sin(angleRad)) / g;

      resultDiv.textContent = `Time of Flight: ${timeOfFlight.toFixed(2)} seconds`;
    }