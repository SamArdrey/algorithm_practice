
/*
 * Complete the 'maximumContainers' function below.
 *
 * The function accepts STRING_ARRAY scenarios as parameter.
 */

function maximumContainers(scenarios) {
  // Write your code here

  for (let scenario of scenarios) {
      let budget = scenario.split(' ')[0];
      let cost = scenario.split(' ')[1];
      let bought = Math.floor(budget / cost);
      let remainingBalance = budget % cost;
      let returnValue = scenario.split(' ')[2];
      let total = Math.floor(budget / cost);

     while (bought >= returnValue) {
        let tradeInCount = Math.floor(bought / returnValue);
        total += tradeInCount;

        remainingBalance = tradeInCount + remainingBalance;
        bought = (bought % returnValue) + remainingBalance;
        remainingBalance = 0;
      }
      console.log(helper(budget, cost, returnValue));
  }
}

function helper(budget, cost, returnValue) {
  let bought = Math.floor(budget / cost);
  if (bought >= returnValue) {
      let returned = Math.floor(bought / returnValue);
      let remainder = bought % returnValue;
      let nextBudget = (returned * cost) + (budget % cost)
      return bought + helper(nextBudget + remainder, cost, returnValue);
  } else {
      return bought;
  }
}

maximumContainers(['10 4 2', '7 2 3']);



function minimumMoves(a, m) {
  // Write your code here
// Combine array into one big number, then separate numbers into an array. Iterate through said array and subtract the differences.
// Such that: [1234, 4321], [2345, 3214] === [12344321], [23453214] === [1,2,3,4,4,3,2,1], [2,3,4,5,3,2,1,4] = [-1, -1, -1, -1, 1, 1, 1, 3]. Take the absolute values of said numbers and combine to get the answer: 1+1+1+1+1+1+1+3 === 10

  a = a.join('').split('');
  m = m.join('').split('');

  let total = 0;
  for (let i in a) {
      total += Math.abs(a[i] - m[i])
  }
  return total
}

minimumMoves([123,543], [321,279]);