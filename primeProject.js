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
let N = 1;
let ans=checkPrime(N);
if (ans){
  console.log(N,": Prime");
}else{
  console.log(N,": Not Prime");
}
