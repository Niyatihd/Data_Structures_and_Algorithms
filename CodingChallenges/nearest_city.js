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
y = [19, 4, 8];
// dist = ((x2 - x1) + (y2 - y1));
// else return NONE

function findClosestY(c, x_coord, idx, x, y) {
  //x-constant
  let y_dist = Math.max.apply(null, y);
  let nearest_y_idx = null;

  for (let i = 0; i < x.length; i++) {
    if (i !== idx && x_coord === x[i]) {
      console.log("in1");

      let tempDistY = Math.abs(y[idx] - y[i]);
      if (y_dist > tempDistY) {
        y_dist = tempDistY;
        nearest_y_idx = i;
      }
    }
  }

  return nearest_y_idx;
}
// console.log(findClosestY(c, 1, 2, x, y));
// console.log(findClosestY(c, 9, 1, x, y));

function findClosestX(c, y_coord, idx, x, y) {
  //y-constant
  let x_dist = Math.max.apply(null, x);
  let nearest_x_idx = null;

  for (let i = 0; i < y.length; i++) {
    if (i !== idx && y_coord === y[i]) {
      // console.log("in1");

      let tempDistX = Math.abs(x[idx] - x[i]);
      if (x_dist > tempDistX) {
        x_dist = tempDistX;
        nearest_x_idx = i;
      }
    }
  }

  return c[nearest_x_idx] ? c[nearest_x_idx] : null;
}
// console.log(findClosestX(c, 8, 2, x, y));
console.log(findClosestX(c, 2, 2, x, y));

function closestStraightCity(c, x, y, q) {
  // Write your code here
  let result = [];

  for (let i = 0; i < c.length; i++) {
    let city = c[i];
    let x_coord = x[i];
    console.log("x_coord: " + x_coord);
    let y_coord = y[i];
    console.log("y_coord: " + y_coord);
    console.log("i: " + i);
    console.log(c);
    console.log(x);
    console.log(y);

    let x_dist = Math.max.apply(null, x);
    let nearest_x_idx = null;

    for (let j = 0; j < y.length; j++) {
      if (j !== i && y_coord === y[j]) {
        // console.log("in1");

        let tempDistX = Math.abs(x[i] - x[j]);
        if (x_dist > tempDistX) {
          x_dist = tempDistX;
          nearest_x_idx = j;
        }
      }
    }

    let x_result = c[nearest_x_idx] ? c[nearest_x_idx] : null;

    // let x_result = findClosestX(c, x_coord, i, x, y);
    console.log(x_result);

    let y_dist = Math.max.apply(null, y);
    let nearest_y_idx = null;

    for (let k = 0; k < x.length; k++) {
      if (k !== i && x_coord === x[k]) {
        // console.log("in1");

        let tempDistY = Math.abs(y[i] - y[k]);
        if (y_dist > tempDistY) {
          y_dist = tempDistY;
          nearest_y_idx = k;
        }
      }
    }

    let y_result = c[nearest_y_idx] ? c[nearest_y_idx] : null;

    // let y_result = findClosestY(c, y_coord, i, x, y);
    console.log(y_result);

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
