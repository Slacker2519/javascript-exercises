const add = function(...args) {
	let sum = 0;
  for (let arg of args) 
    sum += arg;
  
  return sum;
};

const subtract = function(...args) {
	let abstract = args[0];
  for (let i = 1; i < args.length; i++) 
    abstract -= args[i];

  return abstract;
};

const sum = function(arr) {
	let sum = 0;
  for (let i of arr)
    sum += i;

  return sum;
};

const multiply = function(arr) {
  let multiply = arr.reduce((inn, current) => 
    inn *= current, 1);

  return multiply;
};

const power = function(n, power) {
	return n ** power;
};

const factorial = function(n) {
	if (n < 0) 
    return "enter number greater or equal 0";

  let factorial = 1;
  if (n == 0)
    return factorial;

  for (let i = 1; i <= n; i++) 
    factorial *= i;

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
