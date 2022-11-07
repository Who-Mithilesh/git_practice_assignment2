function checkPrime(num)
{
	if(num<=1){
		return false;
	}else{
		for(let i=2;i<=num**0.5;i++){
			if(num%i==0){
				return false;
			}
		}
		return true;
	}

}
let input = 1;
let output=checkPrime(input);
if (output){
  console.log(input,": Prime");
}else{
  console.log(input,": Not Prime");
}
