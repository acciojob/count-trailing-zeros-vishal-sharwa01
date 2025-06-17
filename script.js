function trailingZeros(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Take input via prompt and show result via alert
const input = parseInt(prompt("Enter a non-negative integer:"), 10);

if (isNaN(input) || input < 0) {
  alert("Please enter a valid non-negative integer.");
} else {
  const result = trailingZeros(input);
  alert(`Trailing zeros in ${input}! = ${result}`);
}
