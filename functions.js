let sumOfDiveners1 = 1; //her sayının kendi ile bölümü 1'dir. 1 vererek for döngüsünü numbers/2 yapıyorum
let sumOfDiveners2 = 1;
let isCountNumbers = (numbers1,numbers2) =>{
    for (let i = 2 ; i < numbers1/2 +1 ; i++) {
       if(numbers1 % i == 0){
            sumOfDiveners1 = sumOfDiveners1 + (numbers1/i)
        }
    }
    for (let i = 2 ; i < numbers2/2 +1 ; i++) {
        if(numbers2 % i == 0){
            sumOfDiveners2 = sumOfDiveners2 + (numbers2/i)
        }
    }
    if(sumOfDiveners1 == numbers2 && sumOfDiveners2 == numbers1){
        console.log(numbers1 + " ve " + numbers2 + " arkadaş sayıdır")
    }else{
        console.log(numbers1 + " ve " + numbers2 + " arkadaş sayı değildir.")
    }
}
isCountNumbers (5020, 5564)
