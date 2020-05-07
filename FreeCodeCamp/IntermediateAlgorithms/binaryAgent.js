/*takes a string value
representing a 8 bit binary
value and converts it
to an integer value*/
function btoi(b){
  let intVal = 0;
  for(let i = 0; i < b.length; i++){
    intVal += (Math.pow(2, i) * Number(b.charAt(b.length-1-i)));
  }
  return intVal;
}

/*takes a str of space seperated
8 bit binary values and translates
it to english*/
function binaryAgent(str) {
  let binArr = str.split(" ");
  let letterArr = binArr.map((b) => {
    return String.fromCharCode(btoi(b));
  });

  return letterArr.join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
