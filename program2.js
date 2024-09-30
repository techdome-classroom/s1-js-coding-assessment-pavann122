/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    // Initialize the total value to 0
    let total = 0;

    // Traverse the string from left to right
    for (let i = 0; i < s.length; i++) {
        // If the current value is less than the next value, subtract it (for cases like IV, IX)
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]];
        } else {
            // Otherwise, add the current value
            total += romanMap[s[i]];
        }
    }
    
    return total;
}
// Example Usage
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994

















    
};


module.exports={romanToInt}