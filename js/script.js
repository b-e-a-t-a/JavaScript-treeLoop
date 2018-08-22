/*for ( var k = 1 ; k < 6 ; k++ ) {
  console.log('The value of k is now: ' + k);
}*/

/*for ( var i = 1 ; i < 6 ; i++ ) {
  var star = '*';
  console.log(star);
}*/

/*var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}*/

/*var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
*/

/*var person = {
    name: 'Piotr',
    age: 25,
    country: 'Poland'
};
for (var attrName in person) {
    console.log(attrName);
}*/

/*for ( var k = 0 ; k < 10 ; k++) {
    console.log('The value of k is now: ' + k);
    if (k == 5) {
        console.log('k is equal to 5. The end');
        break;
    }
}
*/
/*
for ( var k = 0 ; k < 10 ; k++) {
    console.log('The value of k is now: ' + k);
    if (k > 5) {
        continue;
    }
    console.log('Instruction at the end of the loop ');
}
*/

var treeHeight = drawTree(5);

function drawTree(h) {
  for ( var i = 1 ; i <= h ; i++) {
    var star = '';
    for ( var j = 1 ; j <= i ; j++) {
      star += '*';
    }
    console.log(star);
  }
  return treeHeight;
}

function drawTreeAmb(h) {

  for (var i = 1 ; i <= h; i++) {
    var star = '*';
    var space = '';
    for (var j = h; j > i; j--) {
      space +=' ';  
    }
    for (var j = 1; j < i; j++) {
      star += '**'
    }
    console.log(space, star);
  }
}

drawTreeAmb(10);

