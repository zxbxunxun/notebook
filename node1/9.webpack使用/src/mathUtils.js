function sum(num1, num2) {
  console.log(arguments);
  for (const key in arguments) {
    if (arguments.hasOwnProperty(key)) {
      const element = arguments[key];
      console.log(element);
    }
  }
  const number1 = Number(num1);
  const number2 = Number(num2);
  if (!isNaN(number1) && !isNaN(number2)) {
    return number1 + number2;
  } else {
    throw new Error('TypeError', 'Expected Number');
  }
}

function decrement(num1, num2) {
  const number1 = parseInt(num1);
  const number2 = parseInt(num2);
  return number1 - number2;
}
// export default params => {
//   console.log(params);
// };

module.exports = {
  sum,
  decrement
};
