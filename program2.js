function romanToInt(s) {
  // Map to hold Roman numeral symbols and their corresponding values
  const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  let total = 0;
  let prevValue = 0;

  // Iterate through the string from left to right
  for (let i = 0; i < s.length; i++) {
      // Get the value of the current Roman numeral
      let currentValue = romanMap[s[i]];

      // If the previous numeral is less than the current one, we subtract twice the previous value
      if (prevValue < currentValue) {
          total += currentValue - 2 * prevValue;
      } else {
          total += currentValue;
      }
      
      // Update the previous value to the current one for the next iteration
      prevValue = currentValue;
  }

  return total;
}

// Test cases
console.log(romanToInt("III"));       // Output: 3
console.log(romanToInt("LVIII"));     // Output: 58
console.log(romanToInt("MCMXCIV"));   // Output: 1994
