// def list_of_integers():
//     Returns a list of integers from 17 to 100 that are evenly divisible by 11.
//     >>> list_of_integers()
//     [22, 33, 44, 55, 66, 77, 88, 99]
//     pass
function listOfIntegers(start, end = 100) {
  start = start || 17;
  let range = [];

  while (start <= 100) {
    if (start % 11 === 0) {
      range.push(start);
      start += 11;
    } else {
      start++;
    }
  }

  return range;
}

// def dict_mapping():
//     """
//     Returns a dictionary mapping integers to their 2.75th root for all integers
//     from 2 up to 100 (including the 2.75th root of 100).
//     """
//     pass
function dictMapping(start, end = 100) {
  start = start || 2;
  let dictionary = {};

  for (let i = start; i <= end; i++) {
    let root = i ** (1/2.75);
    dictionary[i] = root;
  }

  return dictionary;
}

// def generate_cubes_until(modulus):
//     """
//     Generates the cubes of integers greater than 0 until the next is 0 modulo
//     the provided modulus.
//     >>> list(generate_cubes_until(25))
//     [1, 8, 27, 64]
//     """
//     pass
function generateCubesUntil(modules) {
  if (modules === 0) return null;
  let total = 1;
  let range = [1];
  let i = 2;

  while (total % modules !== 0) {
    let cube = i ** 3;
    total += cube;
    range.push(cube);
    i++;
  }

  return range;
}
generateCubesUntil(25);

// def check_type(typ):
//     """
//     Write a function decorator that takes an argument and returns a decorator
//     that can be used to check the type of the argument to a 1-argument function.
//     Should raise a TypeError if the wrong argument type was passed.
//     >>> @check_type(int)
//     ... def test(arg):
//     ...   print(arg)
//     ...
//     >>> test(4)
//     4
//     >>> test(4.5)
//     Traceback (most recent call last):
//         ...
//     TypeError
//     """
function checkType(typ) {

}


// def left_turn(one, two, three):
//     """
//     Given three points return True if they form a left turn, False if they do not
//     If you were standing at point one, looking at point two: If point three is on your left,
//     then these three points form a left-turn.
//     >>> left_turn((0, 0), (2, 2), (2, 3))
//     True
//     """
//     pass
function leftTurn(one, two, three) {
  // (2𝑥−1x)(3y−1y)−(2y−1y)(3x−1x)
  let result = (two[0]-one[0])*(three[1]-one[1])-(two[1]-one[1])*(three[0]-one[0]);
  console.log(result);
  return result > 0;
}
leftTurn([2, 2], [2, 4], [0, 4]);
leftTurn([2, 4], [2, 2], [4, 2]);
leftTurn([0, 0], [2, 2], [2, 3]);


// def nearest_point(candidate_points, points):
//     """
//     Given a list of candidate points find the candidate point
//     that is closest to any point in list points
//     Feel free to add a dependency if needed
//     >>> nearest_point([(0.1, 0.1), (2, 2), (2, 3)], [(0, 0), (5, 5), (2, 1), (2, 4)])
//     (0.1, 0.1)
function nearestPoint(candidatePoints, points) {

}
nearestPoint([[0.1, 0.1], [2, 2], [2, 3]], [[0, 0], [5, 5], [2, 1], [2, 4]]);


// def is_a_square(one, two, three, four, threshold=0.0):
//     """
//     Given four points determine if those points form a square
//     It's up to you how to define how square the points must be to qualify as a square
//     >>> is_square((0, 1), (1, 1), (1, 0), (0, 0))
//     True
//     >>> is_square((0, 0), (1, 1), (0, 1), (1, 0))
//     True
//     >>> is_square((0.1, 0.1), (0, 1), (1, 1), (1, 0), threshold=0.2)
//     """
//     pass
function isSquare(one, two, three, four, threshold=0.0) {
  let l = [];

  l.push(distance(one, two));
  l.push(distance(one, three));
  l.push(distance(one, four));
  l.push(distance(two, three));
  l.push(distance(two, four));
  l.push(distance(three, four));

  console.log(l)
  l = l.sort((a, b) => {
    return a-b;
  });
  console.log(l)

  let t = threshold**2;
  if (l[3]-l[4] ) return false;
  if (l[4] !== l[5]) return false;

  console.log("banana")

  if (!(l[0] == l[1] &&
        l[1] == l[2] &&
        l[2] == l[3])) {
   return false;
  }

  return true;
}

function distance(p1, p2) {
  return (Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));
}

isSquare([0, 1], [1, 1], [1, 0], [0, 0]);
isSquare([0, 0], [1, 1], [0, 1], [1, 0]);
isSquare([0.1, 0.1], [0, 1], [1, 1], [1, 0], 0.2);

// function isSquare(one, two, three, four, threshhol=0.0) {
//   let square = [one, two, three, four];
//   square = square.sort(function(a, b) {
//     if (a[0] == b[0]) {
//       return a[1] - b[1];
//     }
//     return b[0] - a[0];
//   });

//   let angle2 = ([square[0][0] + square[3][0]], [square[0][1] + square[3][1]]);
//   let angle3 = ([square[0][0] + square[3][0]], [square[0][1] + square[3][1]]);

//   if (square)
//   return one
// }
isSquare([0, 1], [1, 1], [1, 0], [0, 0]);
isSquare([0, 0], [1, 1], [0, 1], [1, 0]);
isSquare([0.1, 0.1], [0, 1], [1, 1], [1, 0], 0.2);