// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let num_cars = A.length;

    let east_cars = 0
    for (let i=0; i < num_cars; i++) {
        if (A[i] === 0) {
            east_cars += 1;
        }
    }

    let west_cars = num_cars - east_cars;

    let west_passed = 0;
    let total_combinations = 0;

    if ((east_cars === num_cars) || (east_cars === 0)) {
        return 0;
    }

    for (let i=0; i < num_cars; i++) {
        if (A[i] === 1) {
            west_passed += 1;            
        } else {
            total_combinations += (west_cars - west_passed);
        }        
    }

    if (total_combinations > 1000000000) {
        return -1;
    }

    return total_combinations;
}
