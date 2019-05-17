/*
 * Complete the 'closestStraightCity' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY c
 *  2. INTEGER_ARRAY x
 *  3. INTEGER_ARRAY y
 *  4. STRING_ARRAY q
 */
// example:
c = ["c1", "c2", "c3"];
q = ["c1", "c2", "c3"];
// x = [3, 9, 1];
// y = [6, 2, 8];
// c = ["c1", "c2", "c3"];
// x = [1, 9, 5];
// y = [2, 2, 2];
x = [5, 5, 5];
y = [8, 4, 8];
// dist = ((x2 - x1) + (y2 - y1));
// else return NONE

function closestStraightCity(c, x, y, q) {
  // Write your code here
  let result = [];

  for (let i = 0; i < c.length; i++) {
    let city = c[i];
    let x_coord = x[i];
    let y_coord = y[i];
    let x_dist = Math.max.apply(null, x);
    let nearest_x_idx = null;

    for (let j = 0; j < y.length; j++) {
      if (j !== i && y_coord === y[j]) {
        let tempDistX = Math.abs(x[i] - x[j]);
        if (tempDistX !== 0 && x_dist >= tempDistX) {
          if (x_dist > tempDistX) {
            x_dist = tempDistX;
            nearest_x_idx = j;
          } else if (x_dist === tempDistX) {
            if (q[j] > q[nearest_x_idx]) {
              x_dist = tempDistX;
              nearest_x_idx = j;
            } else {
              continue;
            }
          }
        }
      }
    }

    let x_result = c[nearest_x_idx] ? c[nearest_x_idx] : null;

    let y_dist = Math.max.apply(null, y);
    let nearest_y_idx = null;

    for (let k = 0; k < x.length; k++) {
      if (k !== i && x_coord === x[k]) {
        let tempDistY = Math.abs(y[i] - y[k]);
        if (tempDistY !== 0 && y_dist >= tempDistY) {
          if (y_dist > tempDistY) {
            y_dist = tempDistY;
            nearest_y_idx = k;
          } else if (y_dist === tempDistY) {
            if (q[k] > q[nearest_y_idx]) {
              y_dist = tempDistY;
              nearest_y_idx = k;
            } else {
              continue;
            }
          }
        }
      }
    }

    let y_result = c[nearest_y_idx] ? c[nearest_y_idx] : null;

    if (x_result) {
      result.push(x_result);
    } else if (y_result) {
      result.push(y_result);
    } else {
      result.push("NONE");
    }
  }

  return result;
}

console.log(closestStraightCity(c, x, y, q));
