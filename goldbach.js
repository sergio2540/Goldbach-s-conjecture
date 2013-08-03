//Every even integer greater than 2 
//can be expressed as the sum of two primes
//https://en.wikipedia.org/wiki/Goldbach%27s_conjecture

function primeSum(n){

var prime = [];

function isPrime(n){

	if(prime[n] !== undefined)
		return prime[n];
		
	var i = 2;
	while(i < Math.sqrt(n)){
		if((n%i) == 0 ){
		  prime[n] = false;
                  return false;
		}
		i+=1;

	}
        prime[n] = true;
	return true;
}

if(n%2 !== 0)
	return false;

var solution = [];
var p = 3; 
while(n-p > 0){
 if (isPrime(p) && isPrime(n-p)){
 	solution.push(p)
        solution.push(n-p)
	return solution;
	
 }
 p +=2;
}
}
