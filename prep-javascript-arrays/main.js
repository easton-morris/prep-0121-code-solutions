var languagesArray = [
  "html",
  "css",
  "javascript",
  "react",
  "node.js"
    ];

console.log("languages array:", languagesArray);

console.log("languages array length: ", languagesArray.length)

languagesArray.push("C#", "php");

console.log("languages array:", languagesArray);

languagesArray.pop();

console.log("languages array:", languagesArray);

languagesArray.unshift("C++");

console.log("languages array:", languagesArray);

languagesArray.shift();

console.log("languages array:", languagesArray);

var thirdElement = languagesArray[2];

console.log("3rd element in languagesArray is: ", thirdElement);

var arrayLength = languagesArray.length;

console.log("length of languagesArray is: ", arrayLength);

var lastItem = languagesArray[(arrayLength - 1)];

console.log("last item in languagesArray is: ", lastItem);
