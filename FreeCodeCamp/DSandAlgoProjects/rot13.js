function rot13(str) {
  let res = '';
  const nonAlpha = /[^A-Z]/
  const base = 'A'.charCodeAt();
  const rot = 13;
  for(let i = 0; i < str.length; i++){
    if(nonAlpha.test(str.charAt(i))){
      res += str.charAt(i);
    } else {
      let transform = (str.charCodeAt(i) - base + rot) % 26 + base;
      res += String.fromCharCode(transform);
    }
  }
  return res;
}

console.log(rot13("GUR NAFJRE GB RIRELGUVAT VF ABGUVAT"));
