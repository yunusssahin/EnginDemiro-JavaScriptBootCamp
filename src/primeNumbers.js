
let isPrime = true
function primeNumbers(...numbers) {
    for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i]<2){
        console.log(numbers[i] + " : asal sayı değildir")
    }else if(numbers[i] == 2){
        console.log(numbers[i] + " :" +"En küçük asal sayıdır")
    }else{
            for(let j = 2 ; j < numbers[i]; j++){
                if(numbers[i] % j == 0){
                isPrime = false
                break
                }
               isPrime = true
            }
           if(isPrime){
               console.log(numbers[i] + " : Asal sayıdır")
           }else{
               console.log(numbers[i] + " : Asal sayı değildir.")
           }
         }
         
    }
}

primeNumbers(2,7,1,-6,0,97)
