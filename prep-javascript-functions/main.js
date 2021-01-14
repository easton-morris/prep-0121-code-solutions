function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log("addTwoNumbers: ", addTwoNumbers(4, 4));

function convertHoursToMinutes(num1) {
  return num1 * 60
}

console.log("convertHoursToMinutes:", convertHoursToMinutes(2));

function personalizeGreeting(name) {
  return "Yo, wattup " + name
}

console.log("Greeting: ", personalizeGreeting('bruh.'));

function returnDatatype(data) {
  return typeof data
}

console.log("Datatype: ", returnDatatype(1072));

function addAndMultiplyBy5(num1, num2) {
return (num1 + num2) * 5
}

console.log("Add and Multiply by 5: ", addAndMultiplyBy5(10, 5));

function multiplyAndDividBy5(num1, num2) {
  return (num1 * num2) / 5
}

console.log("Multiply and Divide by 5: ", multiplyAndDividBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2
}

console.log("Subtract: ", subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return (2 * Math.PI) * radius
}

console.log("Circumference: ", getCircleCircumference(5));

function returnFullName(firstName, lastName) {
  return firstName + " " + lastName
}

console.log("Full Name: ", returnFullName('Juan', 'Ramirez'));

function cubeNumber(num1) {
  return num1 * num1 * num1
}

console.log("Number cubed: ", cubeNumber(5));

function returnMathSentence(num1, num2) {
  return "If you add " + num1 + " and " + num2 + " together you get " + (num1 + num2)
}

console.log("Math Sentence: ", returnMathSentence(5, 12));
