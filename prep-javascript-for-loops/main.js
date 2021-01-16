// create your loops here.
var i;
var num1 = 0;

for (i = 0; i < 10; i++) {
  num1++;
  console.log(num1);
}

var num2 = 0;

for (i = 0; i < 50; i++) {
  num2++;
  if (i % 2 !== 1) {
    console.log(num2);
  }
}

for (i = 0; i < 20;) {
  i = i + 2;
  console.log(i);
}

for (i = 100; i >= 0; i--) {
  console.log('Time till explosion: ', i, '!');
}
