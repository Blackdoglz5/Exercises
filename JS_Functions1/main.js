// var x = 0;
// function tripleFive (x) {
//   for (x = 0; x < 3 ; x++) {
//   console.log("Five!");
// }
// }
// tripleFive();
//
// function lastLetter(word, seperator) {
//   var openArray = word.split("");
//   var last = openArray.pop([]);
//   return last;
// }
// lastLetter("hello");
// lastLetter("island");
//
// var square = function (num){
//   return num * num ;
// }
// square(3);
// square(5);
//
//
// function negate(num2) {
//   return num2 * -1;
// }
// negate(5);
// negate(-8);
//
// function toArray(a,b,c) {
//   var ary = [a,b,c];
//   return ary;
// }
//
// toArray(1,2,3);
// toArray(8,9,10);

function startsWithA(word1, seperator) {
  var cutWord = word1.split("");
  if (cutWord[0] && cutWord[1] === 'a');
  return true;
}

startsWithA("aardvark");
startsWithA("bear");

// function excite (word2) {
//   console.log(word2 + "!!!");
// }
// excite("yes");
// excite("go");

// function sun(str) {
//   var n = str.indexOf("sun");
//   if (n === -1) {
//   return false;
// } else {
//   return true;
// }
// }
// sun("sundries");
// sun("asunder");
// sun("catapult");

// function tiny (num) {
//   if (num > 0 && num < 1){
//     return true;
//   } else {
//     return false;
//   }
// }
// tiny(0.3);
// tiny(14);
// tiny(-5);


function getSeconds(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}
getSeconds('01:30');
getSeconds('10:25');
