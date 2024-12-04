function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // result1: number = 8
const result2 = subtract(10, 4); // result2: number = 6

// Solution: Explicit type conversion or input validation
const result3 = add(5, parseInt("3", 10));
const result4 = subtract(10, parseInt("4", 10));

//Alternative solution using type guards
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error("Invalid input: Both arguments must be numbers");
  }
}

function subtractSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  } else {
    throw new Error("Invalid input: Both arguments must be numbers");
  }
}

const result5 = addSafe(5, "3"); //Throws Error
const result6 = subtractSafe(10, "4"); //Throws Error
const result7 = addSafe(5, 3); // result7: number = 8
const result8 = subtractSafe(10, 4); // result8: number = 6