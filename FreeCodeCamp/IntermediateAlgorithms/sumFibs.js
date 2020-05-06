function sumFibs(num) {
  let fib = [1,1];
  let sum = 0;
  for(let i = 0; fib[i] <= num; i++){
    fib.push(fib[i] + fib[i+1]);
    if(fib[i] % 2 == 1){
      sum += fib[i];
    }
  }

  return sum;
}

console.log(sumFibs(75025));
