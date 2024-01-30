

// Algorithm
function numDecodings(str) {
  if (str == null || str.length === 0) return 0;
  if (str[0] === "0") return 0;

  const dp = new Array(str.length + 1).fill(0); //creates a new zero filled array
  // console.log(dp); //[0, 0, 0, 0, 0] 

  // for string with 1 char
  dp[0] = 1;
  dp[1] = 1;

  

  for (let i = 2; i <= str.length; i++) {
    const a = Number(str.slice(i - 1, i)); // last one digit 1 t0 9
    // console.log(a);
    if (a >= 1 && a <= 9) {
      dp[i] += dp[i - 1];  // dp[i] = dp[i] + dp[i-1] 
                           // dp[2] = dp[2] + dp[2-1] --> 0 + 1 = 1
    }

    const b = Number(str.slice(i - 2, i)); // last two digits 10 to 26
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2];  // dp[i] = dp[i] + dp[i-2] 
                           // dp[2] = dp[2] + dp[2-2] --> 1 + 1 = 2
    }
  }

  console.log('DECODE WAYS = ' +  dp[str.length]);
  console.log(dp);
  return dp[str.length];
}

// Constraints for the algorithm
// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

// Implementation
const inputStr = "1126";
const differentWays = numDecodings(inputStr);
console.log(
  `The number of ways the given string ${inputStr} can be decoded is ${differentWays}`
);

// different combination for 1126 is
// 1 1 2 6
// 11 26
// 1 12 6
// 11 2 6
// 1 1 26

// // BIG O Notation
// Time complexity - O(n)
// Space complexity - O(n)
