function myFunction() {
  const b = parseFloat(document.getElementById("b").value)
  const h = parseFloat(document.getElementById("h").value)
  if (b > 0 && h > 0) {
    const area = b * h;
    document.getElementById("result").innerHTML = `The area of the Parallelogram is ${area}`;
    console.log(`The area of the trapezium is ${area}`);
    return area;
  } else {
    document.getElementById("result").innerHTML = "Error: All dimensions must be positive numbers.";
    console.log("Error: All dimensions must be positive numbers.");
    return null;
  }
}

