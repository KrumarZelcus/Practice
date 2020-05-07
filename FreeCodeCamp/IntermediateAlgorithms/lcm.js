//get an array of prime numbers up to the given argument
function getPrimes(num){
  let primes = [];
  for(let i = 2; i <= num; i++){
    let isPrime = true;
    for(let j = 2; j < num; j++){
      if(i % j == 0 && j != i){
        isPrime = false;
      }  
    }
    if(isPrime) primes.push(i);
  }
  return primes;
}

//get an array of prime factors for a given argument
//ex: getPrimeFactors(21) => [3,7]
function getPrimeFactors(num){
  let primes = getPrimes(num);
  let factors = [];
  for(let i = primes.length; i >= 0; i--){
    if(num % primes[i] == 0){
      factors.push(primes[i]);
      num = Math.floor(num / primes[i])
      i++; //recheck if prime is used again (ex: 18 is 3 * 3 * 2)
    }
  }

  return factors;
}

function smallestCommons(arr) {
  let start = Math.min(...arr);
  let end = Math.max(...arr);

  //get all prime factors of each number in the range
  let factors = [];
  for(let i = start; i <= end; i++){
    factors.push(getPrimeFactors(i))
  }

  //make each factor unique and sort for easier processing
  let uniqueFactors = factors.flat().filter((element, index, arr) => {
    return arr.indexOf(element) === index;
  }).sort((a,b) => a > b);
  
  //get the max occurances of each unique factor
  let occurances = [];
  for(let i = 0; i < uniqueFactors.length; i++){
    let max = 0;
    for(let j = 0; j < factors.length; j++){
      let count = 0;
      for(let w = 0; w < factors[j].length; w++){
        if(factors[j][w] == uniqueFactors[i]){
          count++;
        }
      }
      if(count > max) max = count;
    }
    occurances.push(max);
  }
  
  //finally after all that we can calculate this
  let LCM = 1;
  for(let i = 0; i < uniqueFactors.length; i++){
    LCM *= Math.pow(uniqueFactors[i], occurances[i]);
  }

  return LCM;
}


console.log(smallestCommons([2,10]));
