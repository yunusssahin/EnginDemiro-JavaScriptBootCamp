let isPrime = true
let primeNumbers = []
let flag = 0
function findPrimeNumbers(number) {
    for(let i = 2 ; i < number ; i++){
    if(i == 2){
       primeNumbers[flag]=i
       flag++
    }else{
            for(let j = 2 ; j <= i/2; j++){
                if(i % j == 0){
                isPrime = false
                break
                }
               isPrime = true
            }
           if(isPrime){
            primeNumbers[flag]=i
            flag++
           }
         }
         
    }
}

findPrimeNumbers(1000)

for(let i = 0; i < primeNumbers.length; i++){
    console.log(primeNumbers[i])
}