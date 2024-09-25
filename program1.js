function isValid(s) {
  // Stack to keep track of opening brackets
  let stack = [];
  
  // Object to map closing brackets to their corresponding opening brackets
  let bracketMap = {
      ')': '(',
      '}': '{',
      ']': '['
  };
  
  // Traverse through each character in the string
  for (let char of s) {
      // If the character is a closing bracket
      if (bracketMap[char]) {
          // Pop the top element from the stack if it's not empty, else use a dummy value '#'
          let topElement = stack.length ? stack.pop() : '#';
          
          // If the popped element doesn't match the corresponding opening bracket
          if (bracketMap[char] !== topElement) {
              return false;
          }
      } else {
          // If it's an opening bracket, push onto the stack
          stack.push(char);
      }
  }
  
  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
}

// Test cases
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false