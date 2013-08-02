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

function prime_sum(n){

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

var fs = require('fs');

var n = Math.pow(10,17);

fs.appendFileSync("p","[ 3");

var p = 5;
while(n-p > 0){
fs.appendFileSync("p",", "+p)
p += 2;
}




//console.log(isPrime(5));
//console.log(prime_sum(Math.pow(10,15)*10+16));
