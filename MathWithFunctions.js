// write calculations using functions and get the results. Let's have a look at some examples:
/*
    seven(times(five())); must return 35
    four(plus(nine()));  must return 13
    eight(minus(three()));  must return 5
    six(dividedBy(two()));  must return 3
*/
function zero(cb) {
  if (cb) return cb(0);
  else return 0;
}
function one(cb) {
  if (cb) return cb(1);
  else return 1;
}
function two(cb) {
  if (cb) return cb(2);
  else return 2;
}
function three(cb) {
  if (cb) return cb(3);
  else return 3;
}
function four(cb) {
  if (cb) return cb(4);
  else return 4;
}
function five(cb) {
  if (cb) return cb(5);
  else return 5;
}
function six(cb) {
  if (cb) return cb(6);
  else return 6;
}
function seven(cb) {
  if (cb) return cb(7);
  else return 7;
}
function eight(cb) {
  if (cb) return cb(8);
  else return 8;
}
function nine(cb) {
  if (cb) return cb(9);
  else return 9;
}

function plus(number) {
  return function (anotherNumber) {
    return number + anotherNumber;
  };
}
function minus(number) {
  return function (anotherNumber) {
    return anotherNumber - number;
  };
}
function times(number) {
  return function (anotherNumber) {
    return number * anotherNumber;
  };
}
function dividedBy(number) {
  return function (anotherNumber) {
    return parseInt(anotherNumber / number);
  };
}
