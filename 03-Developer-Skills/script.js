// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const arr = [9, 5, 8, 23, 78, 45, 15];
// let min = arr[0];
// let max = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i + 1] > max) {
//     max = arr[i + 1];
//   }
//   if (arr[i + 1] < min) {
//     min = arr[i + 1];
//   }
// }
// console.log(max, min);

// Problem: Given an array of the temperatures a thermo records in a day you have to find the temperture amplitude, sometimes thermo produces error in producing temp, you need to avoid it
// const temp = [15, 17, 23, 9, -9, -7, 19, -1, 'error', 21];
// const calcAmplitude = function (temp) {
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 1; i < temp.length; i++) {
//     if (typeof temp[i] !== 'number') {
//       continue;
//     }
//     if (temp[i] > max) {
//       max = temp[i];
//     }
//     if (temp[i] < min) {
//       min = temp[i];
//     }
//   }
//   console.log(max, min);
//   if (min < 0) {
//     return max + min;
//   }
//   return max - min;
// };
// console.log(calcAmplitude(temp));

//Problem: Now given two array do the same for them

const temp1 = [15, 17, 23, 9, -15, -7, 19, -1, 'error', 21];
const temp2 = [-5, 8, 17, 3, 12, -9, 6, 50, -1, 10];

const calcAmplitude = function (temp1, temp2) {
  const temp = temp1.concat(temp2);
  let max = temp[0];
  let min = temp[0];
  for (let i = 1; i < temp.length; i++) {
    if (typeof temp[i] !== 'number') {
      continue;
    }
    if (temp[i] > max) {
      max = temp[i];
    }
    if (temp[i] < min) {
      min = temp[i];
    }
  }
  console.log(max, min);
  if (min < 0) {
    return max + min;
  }
  return max - min;
};

console.log(calcAmplitude(temp1, temp2));
