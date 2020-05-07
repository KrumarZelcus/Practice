/*
Flatten a nested array. You must account for varying levels of nesting.
*/


function steamrollArray(arr) {
  let res = [].concat(arr)
  for(let i = 0; i < res.length; i++){
    if(res[i] instanceof Array){
      res = res.reduce((a,b) => a.concat(b), []);
      i--; //incase multiple levels of nesting
    }
  }
  return res;
}

steamrollArray([[["a"]], [["b"]]]);
